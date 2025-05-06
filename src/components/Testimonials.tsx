
import { Star } from "lucide-react";

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
