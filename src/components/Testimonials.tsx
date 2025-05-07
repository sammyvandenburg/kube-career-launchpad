
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Joe Sabbagh",
    role: "Cloud Engineer",
    content: "After almost a year of studying and certifications, I landed a great Remote DevOps offer thanks to the Kubernetes courses and career guidance. Thank you for helping me break into this field!",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg"
  },
  {
    name: "Pravin Kumar",
    role: "Cloud Engineer",
    content: "My journey from zero IT knowledge to my first job took 2 years. If I had joined KubeCraft earlier, it would've taken just 6 months or less. The community kept me motivated, focused and I got a job thanks to this.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Victor Dominioni",
    role: "Software Engineer",
    content: "The quality and teachings here are transformative. Mischa's explanations are clear, respectful, and easy to follow, it's been a tremendous help in my career and mindset.",
    avatar: "https://randomuser.me/api/portraits/men/63.jpg"
  },
  {
    name: "Boris Levenzon",
    role: "Sr. Infrastructure Engineer",
    content: "The best community I've ever been part of. Beyond technical skills, the live Q&A sessions deliver insights and mentorship you won't find anywhere else.",
    avatar: "https://randomuser.me/api/portraits/men/72.jpg"
  },
  {
    name: "Jhonatan Magalhães",
    role: "OSS Engineer",
    content: "Finding KubeCraft was the best decision I made in my career. It gave me direction, clarity, and a community that supported me when I felt completely lost. I trippled my salary in 6 months and it changed my life.",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg"
  },
  {
    name: "Can Kaya",
    role: "DevOps Student",
    content: "Thanks to Mischa and the community, I got a job and even won a CTF competition. I met amazing people here and found motivation to keep growing.",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding py-24 bg-gradient-to-b from-kubecraft-lightgray/30 to-white">
      <div className="container-custom max-w-7xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-kubecraft-gray">
            What Our <span className="text-kubecraft-blue">Members Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join hundreds of engineers transforming their careers with KubeCraft.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="testimonial-card flex flex-col h-full relative rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
