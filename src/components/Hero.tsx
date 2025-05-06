
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-kubecraft-lightgray to-white py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              The #1 DevOps Community for <span className="gradient-text">Getting In, Standing Out & Staying Ahead</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              DevOps is in high-demand and high-paid, but landing a job alone can feel impossible.
              When you&apos;re surrounded by people who&apos;ve already done it, everything changes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-primary text-lg">
                Join KubeCraft Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex-1 mt-8 md:mt-0">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full rounded-xl bg-kubecraft-blue/10"></div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop"
                alt="DevOps Engineer Working"
                className="rounded-xl shadow-lg w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
