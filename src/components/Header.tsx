
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const topFeatures = [
    "True hands-on DevOps Masterclass (50+ hours)",
    "Active community of industry experts",
    "Weekly mentorship calls",
    "Learn how to <span class='text-[#F98C20] font-semibold'>actually</span> get hired"
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src="/lovable-uploads/8ba9d379-c66b-4414-86b4-8509520d0a49.png"
                alt="KubeCraft Logo"
                className="h-10 md:h-12 mr-3"
              />
              <span className="font-bold text-lg md:text-xl text-kubecraft-gray">
                KubeCraft
              </span>
            </a>
            
            {/* Award badge - now with hover effect */}
            <motion.div 
              className="ml-4 hidden md:flex items-center px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-amber-700 text-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img 
                src="/lovable-uploads/b454ae57-e940-4c56-bde1-aa4097bf1ed2.png" 
                alt="Award" 
                className="h-4 w-4 mr-1"
              />
              <span>Top 1% Skool Community Award</span>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="https://www.skool.com/kubecraft"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Join Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-kubecraft-gray" />
            ) : (
              <Menu className="h-6 w-6 text-kubecraft-gray" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col space-y-3">
              <a
                href="https://www.skool.com/kubecraft"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center mx-4"
              >
                Join Now
              </a>
            </div>
          </motion.div>
        )}

        {/* Top features */}
        <div className="hidden md:block mt-16 pt-12 pb-3">
          <div className="flex flex-wrap justify-center gap-5">
            {topFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100"
              >
                <div className="h-2 w-2 bg-kubecraft-blue rounded-full mr-2"></div>
                <span 
                  className="text-sm font-medium text-kubecraft-gray"
                  dangerouslySetInnerHTML={{ __html: feature }}
                ></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
