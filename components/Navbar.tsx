import Link from "next/link";
import { Button } from "./ui/button";
const Navbar = () => {
  return (
    <nav className="py-2 sticky top-0 z-50 text-[#F5F5F7] bg-linear-to-r from-[#101415] to-[#1f2628] border-b border-[#4A5D53]/20">
      <div className="container mx-auto px-8 py-4 flex items-center justify-between">
        <h1>
          <Link href={"/"} className="text-2xl md:text-3xl font-bold uppercase">
            Horizon<span className="text-[#799e8d] font-bold">.</span>{" "}
          </Link>
        </h1>
        <ul className="hidden lg:flex items-center gap-8 text-lg">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/cars"}>Cars</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
        <Button
          asChild
          variant={"secondary"}
          className=" bg-transparent border border-[#42554c] hover:bg-[#28332e] text-white transition-colors duration-200 ease-in-out px-8 py-5 hidden lg:inline-flex"
        >
          <Link href={"/cars"}>Book a Car</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
