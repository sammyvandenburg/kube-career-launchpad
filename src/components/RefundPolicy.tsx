
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const RefundPolicy = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-gray-300 hover:text-white transition-colors p-0 h-auto font-normal text-sm">
          Refund Policy
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl mb-4">What is your refund policy?</DialogTitle>
          <DialogDescription className="text-base text-foreground">
            <div className="space-y-4">
              <p>
                We don't offer refunds, but we've designed our community with flexibility in mind. You can easily cancel your subscription at any time with just a few clicks. There's no long-term commitment.
              </p>
              
              <p className="mt-4">
                We're confident in the value KubeCraft provides, and we encourage you to fully engage with the program. If you find it's not the right fit, you can cancel before your next billing cycle without any hassle.
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default RefundPolicy;
