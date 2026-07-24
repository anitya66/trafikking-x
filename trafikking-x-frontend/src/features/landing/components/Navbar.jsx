import { useState, useEffect } from "react";
import { Menu, X, Ambulance } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import { NAVIGATION } from "../constants/navigation";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {

    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (

    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <motion.div

          initial={{
            opacity: 0,
            y: -20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          className="flex items-center gap-3"
        >

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">

            <Ambulance className="h-6 w-6" />

          </div>

          <div>

            <h2 className="text-lg font-bold tracking-tight">

              TRAFIKKING X

            </h2>

            <p className="text-xs text-muted-foreground">

              AI Emergency Response

            </p>

          </div>

        </motion.div>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 lg:flex">

          {NAVIGATION.map((item) => (

            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition hover:text-primary"
            >
              {item.label}
            </a>

          ))}

        </nav>

        {/* Right Side */}

        <div className="hidden items-center gap-3 lg:flex">

          <Button
  variant="ghost"
  onClick={() => navigate("/login")}
>
  Login
</Button>

<Button
  onClick={() => navigate("/register")}
>
  Launch Platform
</Button>

        </div>

        {/* Mobile */}

        <Button
          size="icon"
          variant="ghost"
          className="lg:hidden"
          onClick={() =>
            setMobileOpen(
              !mobileOpen
            )
          }
        >

          {mobileOpen ? (

            <X className="h-5 w-5" />

          ) : (

            <Menu className="h-5 w-5" />

          )}

        </Button>

      </div>

    </header>

  );

}