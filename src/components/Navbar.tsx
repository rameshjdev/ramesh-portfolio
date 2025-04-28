import { useState, useEffect } from "react";
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
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [activeSection, setActiveSection] = useState("#");

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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      
      // Determine active section based on scroll position
      const sections = menuItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        if (section === "") return window.scrollY < 200;
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      setActiveSection(currentSection ? `#${currentSection}` : "#");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-dark-950/90 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-primary/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-500 to-indigo-600 opacity-90"></div>
              <Code2 className="w-7 h-7 text-white relative z-10" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-yellow-500/30 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-indigo-500/30 rounded-full blur-xl"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text leading-tight">
                Ramesh
              </span>
              <span className="text-xs text-gray-400 -mt-1">Kolukuluri</span>
            </div>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="bg-dark-800/50 backdrop-blur-md rounded-full px-3 py-1.5 border border-dark-700/30 shadow-inner">
              {menuItems.map((item, index) => {
                const isActive = activeSection === item.href;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`relative px-3 py-1.5 mx-1 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                      isActive 
                        ? "text-dark-950" 
                        : "text-gray-300 hover:text-white"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        layoutId="navIndicator"
                        style={{ backgroundColor: item.color }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <item.icon
                      className={`w-4 h-4 relative z-10 ${isActive ? "text-dark-950" : ""}`}
                    />
                    <span className="relative z-10">{item.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-dark-800/50 backdrop-blur-md border border-dark-700/30"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X className="text-primary" /> : <Menu className="text-primary" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-dark-950/95 backdrop-blur-md mt-4 rounded-2xl border border-dark-800/50 shadow-xl overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-4 space-y-2">
                {menuItems.map((item, index) => {
                  const isActive = activeSection === item.href;
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                        isActive
                          ? "bg-gradient-to-r"
                          : "hover:bg-dark-800/50"
                      }`}
                      style={{
                        backgroundImage: isActive 
                          ? `linear-gradient(to right, ${item.color}20, transparent)` 
                          : undefined,
                        color: isActive ? item.color : "white",
                        borderLeft: isActive ? `3px solid ${item.color}` : "3px solid transparent"
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-5 h-5" />
                        {item.name}
                      </div>
                      {isActive && <ChevronRight className="w-4 h-4" />}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
