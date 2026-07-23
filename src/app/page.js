import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import Marquee from "react-fast-marquee";

export default function Home() {

  return (
    <div>

      <section className="hero min-h-[70vh] bg-linear-to-br from-red-500 to-amber-900">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
              Find Your Next Read
            </h1>

            <p className="mt-6 text-lg text-amber-500 font-medium">
              Explore thousands of books across every genre. From timeless
              classics to the latest bestsellers, your next favorite story is
              waiting for you.
            </p>

            <div className="mt-8">
              <Link href="/books" className="btn border-0 text-xl bg-white normal-case">
                <span className='bg-linear-to-r from-red-500 to-amber-900 bg-clip-text text-transparent flex justify-around items-center'>Browse Now <GoArrowRight className="ml-2" size={30} color="oklch(47% 0.157 37.304)" /></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-amber-500 px-30 py-3 text-amber-900 text-[16px] font-semibold">
        <Marquee speed={50} gradient={false} pauseOnHover={true}>
          New Arrivals: JavaScript Mastery | Special Discount on Memberships...
        </Marquee>
      </div>
    </div>
  );
}
