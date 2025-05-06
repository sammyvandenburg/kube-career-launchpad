
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-kubecraft-blue to-kubecraft-teal">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Ready to Transform Your DevOps Career?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Join now and build your DevOps career with the support of our expert community.
            Stop struggling alone - success is just one click away.
          </p>
          <Button size="lg" variant="default" className="bg-white text-kubecraft-blue hover:bg-gray-100 hover:text-kubecraft-darkblue text-lg px-8 py-6">
            Join KubeCraft Community Today
          </Button>
          <p className="mt-6 text-sm opacity-80">
            Limited spots available - Secure your place now!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
