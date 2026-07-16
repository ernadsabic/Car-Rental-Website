import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="py-16 md:py-20 w-full min-h-72   bg-linear-to-b from-[#101415] to-[#1f2628]">
      <div className="container mx-auto px-8 py-4">
        <div className="grid grid-cols-1 gap-8 md:gap-0 md:grid-cols-3 md:items-center  ">
          <div className="flex flex-col gap-2">
            <Link
              href="#hero"
              className="text-2xl md:text-3xl font-bold uppercase text-[#E0E3E5]"
            >
              Horizon<span className="text-[#799e8d] font-bold">.</span>{" "}
            </Link>
            <p className="text-gray-400 max-w-sm">
              Elevating urban mobility through precision and luxury.
            </p>
          </div>
          <ul className="flex flex-col gap-2 md:flex-row md:justify-center  md:gap-6 text-gray-400">
            <li>
              <Link href="/privacy" className="underline hover:text-gray-300">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms" className="underline hover:text-gray-300">Terms of Service</Link>
            </li>
            <li>
              <Link href="/cookies" className="underline hover:text-gray-300">Cookies</Link>
            </li>
            <li>
              <Link href="/contact" className="underline hover:text-gray-300">Contact</Link>
            </li>
          </ul>
          <p className="text-gray-600 text-sm text-left md:text-right">
            &copy;{new Date().getFullYear()} HORIZON LUXURY RENTALS. ALL RIGHTS
            RESERVED.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
