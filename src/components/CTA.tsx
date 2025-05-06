
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#326CE5] to-[#3E88F6]">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Ready to Transform Your DevOps Career?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Join now and build your DevOps career with the support of our expert community.
            Stop struggling alone - success is just one click away.
          </p>
          <Button 
            size="lg" 
            variant="default" 
            className="bg-white text-[#326CE5] hover:bg-gray-100 hover:text-[#2251B9] text-lg px-8 py-6"
            onClick={() => window.location.href = 'https://www.skool.com/kubecraft'}
          >
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
