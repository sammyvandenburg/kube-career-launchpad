
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
          <DialogTitle className="text-2xl mb-4">KubeCraft Refund Policy</DialogTitle>
          <DialogDescription className="text-base text-foreground">
            <div className="space-y-4">
              <p>
                At KubeCraft, we stand behind the quality of our DevOps community and training materials. We want you to be completely satisfied with your investment.
              </p>
              
              <h3 className="text-lg font-medium mt-4">14-Day Money Back Guarantee</h3>
              <p>
                We offer a 14-day money-back guarantee for all new memberships. If you're not satisfied with your KubeCraft membership for any reason, you can request a full refund within 14 days of your initial purchase.
              </p>
              
              <h3 className="text-lg font-medium mt-4">How to Request a Refund</h3>
              <p>
                To request a refund, please email <a href="mailto:support@kubecraft.com" className="text-kubecraft-blue hover:underline">support@kubecraft.com</a> with your purchase information and reason for the refund request. Our team will process your request within 3-5 business days.
              </p>
              
              <h3 className="text-lg font-medium mt-4">Refund Eligibility</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Refunds are only available within 14 days of your initial purchase</li>
                <li>Promotional or discounted memberships may have different refund terms as specified at the time of purchase</li>
                <li>After the 14-day period, no refunds will be issued for any reason</li>
                <li>Refunds will be processed using the original payment method</li>
              </ul>
              
              <h3 className="text-lg font-medium mt-4">Questions?</h3>
              <p>
                If you have any questions about our refund policy, please contact us at <a href="mailto:support@kubecraft.com" className="text-kubecraft-blue hover:underline">support@kubecraft.com</a>.
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default RefundPolicy;
