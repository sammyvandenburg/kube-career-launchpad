
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-200 shadow-sm">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold gradient-text mr-4">
              KubeCraft
            </a>
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li><a href="#" className="text-gray-700 hover:text-kubecraft-blue transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-700 hover:text-kubecraft-blue transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-700 hover:text-kubecraft-blue transition-colors">Testimonials</a></li>
                <li><a href="#" className="text-gray-700 hover:text-kubecraft-blue transition-colors">About</a></li>
              </ul>
            </nav>
          </div>
          
          <div className="hidden md:block">
            <Button className="btn-primary">
              Join Now
            </Button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="container-custom">
            <nav>
              <ul className="space-y-4">
                <li><a href="#" className="block text-gray-700 hover:text-kubecraft-blue transition-colors">Home</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-kubecraft-blue transition-colors">Features</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-kubecraft-blue transition-colors">Testimonials</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-kubecraft-blue transition-colors">About</a></li>
                <li className="pt-2">
                  <Button className="btn-primary w-full">
                    Join Now
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
