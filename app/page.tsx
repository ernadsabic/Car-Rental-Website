import Bestcars from "@/components/home/Bestcars";
import ChooseUs from "@/components/home/ChooseUs";
import Faq from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import Options from "@/components/home/Options";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";

export default async function Home() {
  return (
    <>
      <Hero />
      <Bestcars />
      <Stats />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Options />
    </>
  );
}
