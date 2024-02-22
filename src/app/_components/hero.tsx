import heroImage from "@/assets/img/hero.avif";
import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="mb-8 md:mb-16">
      <Image
        src={heroImage}
        alt="hero-image"
        className="shadow-sm w-full"
        width={1300}
        height={630}
      />
    </section>
  );
}
