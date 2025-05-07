
import { motion } from "framer-motion";

const SocialProof = () => {
  return (
    <section className="py-16 bg-kubecraft-lightgray/40">
      <div className="container-custom max-w-5xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-kubecraft-gray">
            Our Members Work At
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-3 gap-10 items-center justify-items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Google Logo */}
          <motion.div 
            className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
              alt="Google" 
              className="h-12 md:h-16 object-contain" 
            />
          </motion.div>
          
          {/* Microsoft Logo */}
          <motion.div 
            className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/800px-Microsoft_logo.svg.png" 
              alt="Microsoft" 
              className="h-12 md:h-16 object-contain" 
            />
          </motion.div>
          
          {/* IBM Logo */}
          <motion.div 
            className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/800px-IBM_logo.svg.png" 
              alt="IBM" 
              className="h-12 md:h-16 object-contain" 
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
