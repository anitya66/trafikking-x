package com.trafikkingx.security.jwt;

import lombok.RequiredArgsConstructor;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import com.trafikkingx.auth.entity.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import javax.crypto.SecretKey;
import io.jsonwebtoken.Claims;
import java.util.function.Function;

@Service
@RequiredArgsConstructor
public class JwtService {

    private final JwtProperties jwtProperties;

    private SecretKey getSigningKey() {

    byte[] keyBytes = Decoders.BASE64.decode(jwtProperties.getSecret());

    return Keys.hmacShaKeyFor(keyBytes);
}

public String generateToken(User user) {

    Map<String, Object> claims = new HashMap<>();

    claims.put("role", user.getRole().name());

    return Jwts.builder()
            .claims(claims)
            .subject(user.getEmail())
            .issuedAt(new Date())
            .expiration(new Date(
                    System.currentTimeMillis() + jwtProperties.getExpiration()
            ))
            .signWith(getSigningKey(), SignatureAlgorithm.HS256)
            .compact();
}
public <T> T extractClaim(
        String token,
        Function<Claims, T> claimsResolver) {

    Claims claims = extractAllClaims(token);

    return claimsResolver.apply(claims);
}
private Claims extractAllClaims(String token) {

    return Jwts.parser()
            .verifyWith(getSigningKey())
            .build()
            .parseSignedClaims(token)
            .getPayload();
}
public String extractUsername(String token) {

    return extractClaim(
            token,
            Claims::getSubject
    );
}
public Date extractExpiration(String token) {

    return extractClaim(
            token,
            Claims::getExpiration
    );
}
public boolean isTokenExpired(String token) {

    return extractExpiration(token)
            .before(new Date());
}
public boolean isTokenValid(
        String token,
        UserDetails userDetails) {

    String username = extractUsername(token);

    return username.equals(userDetails.getUsername())
        && !isTokenExpired(token);
}

}