
import { Star, Quote, Check } from "lucide-react";
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
  const orange = "#F98C20"; // Using the softer orange option
  
  return (
    <section id="testimonials" className="section-padding py-24 bg-gradient-to-b from-kubecraft-lightgray/30 to-white">
      <div className="container-custom max-w-7xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-kubecraft-gray">
            What Our <span className="text-kubecraft-blue">Members Say</span>
          </h2>
        </motion.div>

        {/* Featured quotes */}
        <motion.div 
          className="flex flex-wrap justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="bg-white shadow-md rounded-lg px-8 py-4 border-l-4 border-amber-500 max-w-md">
            <p className="italic text-lg text-gray-700">"I tripled my salary in 6 months thanks to KubeCraft."</p>
          </div>
          <div className="bg-white shadow-md rounded-lg px-8 py-4 border-l-4 border-amber-500 max-w-md">
            <p className="italic text-lg text-gray-700">"I landed a remote DevOps job after a year of struggle."</p>
          </div>
        </motion.div>
        
        {/* Enhanced "Why it works" section */}
        <motion.div 
          className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 mb-16 border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl text-center font-bold mb-6 text-kubecraft-gray">
            Our members don't just learn technical skills — <span className="text-kubecraft-blue">they get:</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-xl text-gray-800 font-medium">
                Real-world experience employers value
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-xl text-gray-800 font-medium">
                A supportive network that opens doors
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-xl text-gray-800 font-medium">
                Mentorship and coaching from experienced engineers
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-xl text-gray-800 font-medium">
                Practical, in-demand skills that <span style={{ color: orange }} className="font-bold">actually</span> get you hired
              </p>
            </div>
          </div>
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
