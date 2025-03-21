import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Code2,
  Home,
  User,
  Briefcase,
  Cpu,
  FolderGit2,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";

/**
 * A responsive navigation bar component with a hamburger menu on mobile devices.
 *
 * Features:
 * - A fixed position nav bar that changes its background color on scroll
 * - A hamburger menu on mobile devices that slides in from the top
 * - Animated menu items that slide in from the left on desktop
 * - A gradient background on the logo
 * - A hover effect on the logo that rotates it slightly
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { name: "Home", icon: Home, href: "#", color: "#FF6B6B" },
    { name: "About", icon: User, href: "#about", color: "#4ECDC4" },
    {
      name: "Experience",
      icon: Briefcase,
      href: "#experience",
      color: "#45B7D1",
    },
    { name: "Skills", icon: Cpu, href: "#skills", color: "#96CEB4" },
    { name: "Projects", icon: FolderGit2, href: "#projects", color: "#FFEEAD" },
    { name: "Contact", icon: Mail, href: "#contact", color: "#D4A5A5" },
  ];

  useEffect(() => {
/*************  ✨ Codeium Command ⭐  *************/
/**
 * Updates the `isScrolled` state based on the current scroll position.
 * Sets `isScrolled` to true if the window's vertical scroll position is greater than 0,
 * indicating that the user has scrolled down the page.
 */

/******  94f73f17-9745-4596-9e0d-87d970e0af92  *******/
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-secondary/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-10 h-10 bg-primary rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
              <Code2 className="w-6 h-6 text-secondary" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
              Ramesh
            </span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-primary transition flex items-center gap-2 group"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <item.icon
                  className="w-4 h-4 group-hover:rotate-12 transition-transform"
                  style={{ color: item.color }}
                />
                <span
                  className="hover:text-[color:var(--hover-color)]"
                  style={{ "--hover-color": item.color } as React.CSSProperties}
                >
                  {item.name}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-secondary/95 backdrop-blur-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-md transition"
                  style={{
                    backgroundColor: `${item.color}10`,
                    color: item.color,
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{
                    backgroundColor: `${item.color}20`,
                    x: 10,
                  }}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
