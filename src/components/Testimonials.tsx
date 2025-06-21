
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Joe Sabbagh",
    role: "Cloud Engineer", 
    content: "After almost a year of solo learning, I landed a remote DevOps job thanks to KubeCraft",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg"
  },
  {
    name: "Pravin Kumar",
    role: "Cloud Engineer",
    content: "From zero IT knowledge to my first job in 6 months. This community changed everything",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Jhonatan Magalhães",
    role: "OSS Engineer",
    content: "Tripled my salary in 6 months. Best decision I have made for my career",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg"
  },
  {
    name: "Boris Levenzon",
    role: "Senior Infrastructure Engineer",
    content: "The Q and A sessions and mentorship here are unmatched",
    avatar: "https://randomuser.me/api/portraits/men/72.jpg"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container-custom max-w-7xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-2 text-white">
            Real Words from Real Members
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="testimonial-card flex flex-col h-full relative rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="absolute -top-4 -left-4 text-kubecraft-green opacity-30">
                <Quote size={42} strokeWidth={1.5} />
              </div>
              <div className="p-8 pt-10 pb-6 bg-gray-900 rounded-t-2xl border border-gray-700 shadow-md">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-kubecraft-terracotta text-kubecraft-terracotta" />
                  ))}
                </div>
                <p className="text-white text-lg mb-6">{testimonial.content}</p>
              </div>
              <div className="mt-auto bg-gray-800 p-6 rounded-b-2xl border-x border-b border-gray-700">
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-kubecraft-terracotta/20"
                  />
                  <div>
                    <h4 className="font-bold text-lg text-white">{testimonial.name}, {testimonial.role}</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
