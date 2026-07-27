import { useState, useEffect } from "react";
import { Menu, X, Ambulance } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { NAVIGATION } from "../constants/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-background/70 backdrop-blur-2xl shadow-2xl shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="page-container">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}

            <motion.div
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-xl shadow-primary/25 transition-transform duration-300 hover:scale-105">
                <Ambulance className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-lg font-bold tracking-tight text-white">
                  TRAFIKKING X
                </h2>

                <p className="text-xs tracking-wide text-muted-foreground">
                  AI Emergency Response
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}

            <nav className="hidden items-center gap-8 xl:flex">
              {NAVIGATION.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="relative text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-white"
                >
                  {item.label}

                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}

            <div className="hidden items-center gap-3 xl:flex">
              <Button
                variant="ghost"
                className="px-5"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>

              <Button
                className="px-6 shadow-lg shadow-primary/25"
                onClick={() => navigate("/register")}
              >
                Launch Platform
              </Button>
            </div>

            {/* Mobile Toggle */}

            <Button
              size="icon"
              variant="ghost"
              className="xl:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm xl:hidden"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28 }}
              className="fixed right-0 top-0 z-50 flex h-screen w-[300px] flex-col border-l border-white/10 bg-background p-6 shadow-2xl xl:hidden"
            >
              <div className="mb-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Ambulance className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-bold text-white">
                      TRAFIKKING X
                    </h3>

                    <p className="text-xs text-muted-foreground">
                      AI Response
                    </p>
                  </div>
                </div>

                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setMobileOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <nav className="flex flex-col gap-2">
                {NAVIGATION.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-4 py-3 text-muted-foreground transition-all duration-200 hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-auto space-y-3 pt-10">
                <Button
                  variant="ghost"
                  className="w-full"
                  onClick={() => {
                    setMobileOpen(false);
                    navigate("/login");
                  }}
                >
                  Login
                </Button>

                <Button
                  className="w-full"
                  onClick={() => {
                    setMobileOpen(false);
                    navigate("/register");
                  }}
                >
                  Launch Platform
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}