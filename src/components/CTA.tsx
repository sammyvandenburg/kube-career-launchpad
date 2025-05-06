
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
          <p className="mt-3 text-sm opacity-80 flex items-center justify-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-receipt"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/></svg>
            14-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
