import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const SuccessPage = () => {
  return (
    <section className="w-full min-h-[70vh] py-10 flex justify-center items-center">
      <div className="container mx-auto px-4 py-8 text-center flex flex-col items-center gap-4">
        <div>
          <CheckCircle2 className="size-16 text-center text-green-400" />
        </div>
        <h1 className="text-3xl font-bold">Payment Successful!</h1>
        <p>
          Thank you for your purchase. Your order is being processed.
        </p>
        <Link href={"/"} className="text-blue-600 hover:underline">
          Go Back to Homepage
        </Link>
      </div>
    </section>
  );
};

export default SuccessPage;
