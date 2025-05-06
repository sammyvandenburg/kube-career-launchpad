
import { Check } from "lucide-react";

const featuresList = [
  {
    title: "NEW DevOps Masterclass",
    description: "50+ hours of comprehensive training",
    highlight: true
  },
  {
    title: "Enterprise Grade Azure Environment",
    description: "Get hands-on experience with real-world tools",
    highlight: false
  },
  {
    title: "Weekly Coaching Calls",
    description: "Get your questions answered by experts",
    highlight: true
  },
  {
    title: "Active Community of Experts",
    description: "Connect with professionals from Google, Microsoft, and hiring managers",
    highlight: false
  },
  {
    title: "Tech Support",
    description: "100% issues solved by our dedicated team",
    highlight: true
  },
  {
    title: "Personal Brand, LinkedIn & CV Accelerator",
    description: "Stand out from the crowd and get hired faster",
    highlight: false
  }
];

const Features = () => {
  return (
    <section className="section-padding bg-kubecraft-lightgray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            What You Get <span className="gradient-text">(Worth $8,000+)</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Everything you need to launch your DevOps career and stay ahead in the competitive tech industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card ${feature.highlight ? 'border-l-4 border-l-kubecraft-blue' : ''}`}
            >
              <div className="flex items-start gap-3">
                <div className="bg-kubecraft-blue/10 p-2 rounded-full mt-1">
                  <Check className="h-5 w-5 text-kubecraft-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
