
import { Award, Calendar, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Story = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 order-2 md:order-1">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full rounded-xl bg-kubecraft-teal/10"></div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop"
                alt="Success Story"
                className="rounded-xl shadow-lg w-full object-cover h-[350px]"
              />
            </div>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <div className="flex items-center gap-2 mb-4">
              <Award className="text-kubecraft-blue h-6 w-6" />
              <p className="text-kubecraft-blue font-semibold uppercase tracking-wider">Success Story</p>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              From Nurse to DevOps Engineer in Just 6 Months
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-gray-700">
                I went from nurse to DevOps engineer in 6 months, built a 46K+ YouTube Channel and now earn 6-figures Freelancing, making jobs come to me.
              </p>
              <p className="text-gray-700">
                Join the #1 Awarded community of 600+ Engineers who followed this proven system to high-paying careers. Now it&apos;s your turn.
              </p>
            </div>
            <Button className="btn-primary">
              Follow My Path
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
