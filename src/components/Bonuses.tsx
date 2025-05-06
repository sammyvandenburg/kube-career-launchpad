
import { Gift } from "lucide-react";

const Bonuses = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Exclusive <span className="gradient-text">Bonuses</span> <span className="text-xl md:text-2xl">(Worth $2,000+)</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Get these special bonuses when you join our community today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="feature-card flex flex-col h-full border border-kubecraft-blue/20 bg-gradient-to-br from-white to-kubecraft-blue/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-kubecraft-blue/10 p-2 rounded-full">
                <Gift className="h-5 w-5 text-kubecraft-blue" />
              </div>
              <h3 className="font-bold text-xl">KubeCraft Internship</h3>
            </div>
            <p className="text-gray-700 mb-4 flex-grow">
              Gain real DevOps job experience and get my personal CV reference to boost your job applications.
            </p>
            <div className="bg-kubecraft-blue/10 rounded-lg p-4">
              <p className="font-medium text-kubecraft-gray">
                "The internship experience was the key differentiator on my resume. Hiring managers were impressed with the actual projects I could talk about."
              </p>
            </div>
          </div>

          <div className="feature-card flex flex-col h-full border border-kubecraft-teal/20 bg-gradient-to-br from-white to-kubecraft-teal/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-kubecraft-teal/10 p-2 rounded-full">
                <Gift className="h-5 w-5 text-kubecraft-teal" />
              </div>
              <h3 className="font-bold text-xl">400+ Exclusive LinkedIn Connections</h3>
            </div>
            <p className="text-gray-700 mb-4 flex-grow">
              Get connected with industry professionals and hiring managers who can fast-track your career.
            </p>
            <div className="bg-kubecraft-teal/10 rounded-lg p-4">
              <p className="font-medium text-kubecraft-gray">
                "I landed my job through a connection I made in this community. The networking opportunities alone are worth the price of admission."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
