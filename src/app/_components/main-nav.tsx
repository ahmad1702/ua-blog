import Container from "@/app/_components/container";
import Link from "next/link";

export function MainNav() {
  return (
    <nav className="bg-neutral-50 border border-neutral-200 mb-16">
      <Container>
        <div className="py-8 flex flex-col lg:flex-row items-center">
          <div className="flex items-center lg:pl-4 lg:w-1/2">
            <Link
              href="/"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Home
            </Link>
            <Link href="/about" className="mx-3 font-bold hover:underline">
              About
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default MainNav;
