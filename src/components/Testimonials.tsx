
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex R.",
    role: "DevOps Engineer",
    content: "I joined KubeCraft with zero knowledge of IT and now I'm a DevOps Engineer. The community support and resources were instrumental in my career transition.",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg"
  },
  {
    name: "Sarah K.",
    role: "Cloud Engineer",
    content: "Within 3 months of joining KubeCraft, I landed my first cloud role. The hands-on projects and weekly coaching calls made all the difference in my job search.",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg"
  },
  {
    name: "Michael T.",
    role: "DevOps Lead",
    content: "Best investment I've made in my career. The Kubernetes workshops and Azure lab environments provided the practical experience employers were looking for.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-kubecraft-gray">
            What Our <span className="text-kubecraft-blue">Community Members</span> Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join hundreds of successful engineers who transformed their careers with KubeCraft.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="testimonial-card flex flex-col h-full relative rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute -top-4 -left-4 text-kubecraft-blue opacity-30">
                <Quote size={42} strokeWidth={1.5} />
              </div>
              <div className="p-8 pt-10 pb-6 bg-white rounded-t-2xl border border-gray-100 shadow-md">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-kubecraft-blue text-kubecraft-blue" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6">{testimonial.content}</p>
              </div>
              <div className="mt-auto bg-gray-50 p-6 rounded-b-2xl border-x border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-kubecraft-blue/20"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
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
