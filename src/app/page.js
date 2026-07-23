import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import Marquee from "react-fast-marquee";
import FeaturedBooks from "../Components/FeaturedBooks/FeaturedBooks";

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
      <div className="bg-amber-500 px-30 py-3 text-amber-900 text-[16px] font-semibold mb-5">
        <Marquee speed={50} gradient={false} pauseOnHover={true}>
          New Arrivals: JavaScript Mastery | Special Discount on Memberships...
        </Marquee>
      </div>
      <div className="px-5 md:px-20 mt-20">
        <div>
          <p className="text-3xl font-bold text-amber-900">
            Featured Books
          </p>
          <FeaturedBooks />
        </div>
        <div className="mt-20">
          <p className="text-3xl font-bold text-amber-900">
            User Statistics
          </p>
          <div className="mt-8 flex justify-around bg-amber-100 py-10 rounded-lg shadow-md">
            <span className="flex flex-col justify-center items-center w-full border-r border-amber-900">
              <p className="text-2xl font-semibold text-amber-900">300K</p>
              <p className="text-lg text-amber-900">Active Users</p>
            </span>

            <span className="flex flex-col justify-center items-center w-full border-r border-amber-900">
              <p className="text-2xl font-semibold text-amber-900">1M</p>
              <p className="text-lg text-amber-900">Available Books</p>
            </span>

            <span className="flex flex-col justify-center items-center w-full border-r border-amber-900">
              <p className="text-2xl font-semibold text-amber-900">4.8</p>
              <p className="text-lg text-amber-900">Average Rating</p>
            </span>

            <span className="flex flex-col justify-center items-center w-full">
              <p className="text-2xl font-semibold text-amber-900">100K</p>
              <p className="text-lg text-amber-900">Members</p>
            </span>

          </div>
        </div>
      </div>



    </div>
  );
}
