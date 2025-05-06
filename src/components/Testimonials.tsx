
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ale R.",
    role: "DevOps Engineer",
    content: "I joined Mischa's and May's Course with zero knowledge of IT and now I'm a DevOps Engineer. I would like to thank Mischa and May for helping me change my life. KubeCraft and its community is amazing!",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg"
  },
  {
    name: "Maninder B.",
    role: "Cloud Engineer",
    content: "I enrolled in KubeCraft after trying everything. Within 4 months I landed my first Azure Cloud Engineer role. The community and weekly calls were game changers - everyone is genuinely helpful and supportive.",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg"
  },
  {
    name: "Shaliza A.",
    role: "DevOps Engineer",
    content: "The best investment I've made in my career. I landed my first cloud job within weeks of joining thanks to the amazing community, coaching, and hands-on experience in the Azure lab environment.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-kubecraft-lightgray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            What Our Community Members Say
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Join hundreds of successful engineers who transformed their careers with KubeCraft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-kubecraft-blue text-kubecraft-blue" />
                ))}
              </div>
              <p className="text-gray-700 flex-grow">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
