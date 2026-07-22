package com.trafikkingx.assignment.util;

public final class GeoLocationUtil {

    /**
     * Earth's radius in kilometers.
     */
    private static final double EARTH_RADIUS = 6371.0;

    private GeoLocationUtil() {
    }

    /**
     * Calculates the distance between two coordinates
     * using the Haversine Formula.
     *
     * @param sourceLatitude Source Latitude
     * @param sourceLongitude Source Longitude
     * @param destinationLatitude Destination Latitude
     * @param destinationLongitude Destination Longitude
     * @return Distance in kilometers
     */
    public static double calculateDistance(

            double sourceLatitude,

            double sourceLongitude,

            double destinationLatitude,

            double destinationLongitude) {

        double latitudeDifference =
                Math.toRadians(
                        destinationLatitude - sourceLatitude
                );

        double longitudeDifference =
                Math.toRadians(
                        destinationLongitude - sourceLongitude
                );

        double latitude1 =
                Math.toRadians(sourceLatitude);

        double latitude2 =
                Math.toRadians(destinationLatitude);

        double haversine =
                Math.sin(latitudeDifference / 2)
                        * Math.sin(latitudeDifference / 2)
                        + Math.cos(latitude1)
                        * Math.cos(latitude2)
                        * Math.sin(longitudeDifference / 2)
                        * Math.sin(longitudeDifference / 2);

        double angularDistance =
                2 * Math.atan2(
                        Math.sqrt(haversine),
                        Math.sqrt(1 - haversine)
                );

        return EARTH_RADIUS * angularDistance;
    }
}