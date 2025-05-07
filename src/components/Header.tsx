
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { 
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <a href="/" className="text-2xl font-bold flex items-center">
              <div className="h-10 w-10 mr-2 flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/62d392eb-a9ce-41fc-934d-b5bb6aba18e7.png" 
                  alt="KubeCraft Logo" 
                  className="logo-image h-full w-auto object-contain"
                />
              </div>
              <span className="gradient-text">KubeCraft</span>
            </a>
            <nav className="hidden md:block ml-12">
              <ul className="flex space-x-10">
                <li>
                  <a href="#" className="text-gray-700 hover:text-kubecraft-blue transition-colors font-medium">Home</a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-700 hover:text-kubecraft-blue transition-colors font-medium">Testimonials</a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-kubecraft-blue transition-colors font-medium">About</a>
                </li>
              </ul>
            </nav>
          </motion.div>
          
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button 
              className="bg-kubecraft-blue hover:bg-kubecraft-darkblue text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
              onClick={() => window.location.href = 'https://www.skool.com/kubecraft'}
            >
              Join Now
            </Button>
          </motion.div>
          
          <motion.button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white border-t border-gray-200 absolute w-full left-0 shadow-lg"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="container-custom py-6">
              <nav>
                <ul className="space-y-5">
                  <motion.li variants={itemVariants}>
                    <a 
                      href="#" 
                      className="block text-gray-700 hover:text-kubecraft-blue transition-colors font-medium text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </a>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <a 
                      href="#testimonials" 
                      className="block text-gray-700 hover:text-kubecraft-blue transition-colors font-medium text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Testimonials
                    </a>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <a 
                      href="#" 
                      className="block text-gray-700 hover:text-kubecraft-blue transition-colors font-medium text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About
                    </a>
                  </motion.li>
                  <motion.li variants={itemVariants} className="pt-3">
                    <Button 
                      className="bg-kubecraft-blue hover:bg-kubecraft-darkblue text-white w-full py-3 text-lg rounded-lg"
                      onClick={() => window.location.href = 'https://www.skool.com/kubecraft'}
                    >
                      Join Now
                    </Button>
                  </motion.li>
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
