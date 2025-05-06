
import RefundPolicy from "./RefundPolicy";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-kubecraft-gray text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <img 
                src="/lovable-uploads/a81cae79-d03e-4b1b-965b-fcc2c7ce5f6c.png" 
                alt="KubeCraft Logo" 
                className="h-8 mr-2" 
              />
              KubeCraft
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The #1 DevOps Community for Getting In, Standing Out & Staying Ahead.
            </p>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} KubeCraft. All rights reserved.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors inline-block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-full">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors inline-block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-full">
                  About
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors inline-block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-full">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="https://www.skool.com/kubecraft" className="text-gray-300 hover:text-white transition-colors inline-block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-full">
                  Join Now
                </a>
              </li>
              <li><RefundPolicy /></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-4 mb-8">
              <li className="text-gray-300">
                <a href="https://www.skool.com/kubecraft" className="hover:text-white transition-colors inline-block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-full">
                  www.skool.com/kubecraft
                </a>
              </li>
              <li className="text-gray-300">
                <a href="mailto:support@kubecraft.com" className="hover:text-white transition-colors inline-block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-full">
                  support@kubecraft.com
                </a>
              </li>
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin hover:scale-110 transition-transform"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube hover:scale-110 transition-transform"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter hover:scale-110 transition-transform"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
