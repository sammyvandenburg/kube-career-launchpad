
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael T.",
    role: "Former Teacher, Now DevOps Engineer",
    content: "Before joining KubeCraft, I was struggling to get interviews. Within 2 months of applying the strategies I learned here, I landed a job paying $95K as my first DevOps role!",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg"
  },
  {
    name: "Sarah J.",
    role: "Career Switcher, Cloud Engineer",
    content: "The hands-on Azure environment was a game-changer for me. I could actually show real projects during interviews instead of just talking about concepts.",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg"
  },
  {
    name: "David L.",
    role: "Junior to Senior DevOps in 1 Year",
    content: "The weekly coaching calls and community support helped me solve problems that would have taken days to figure out on my own. Accelerated my growth tremendously.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-kubecraft-lightgray">
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
