import Link from "next/link";
import NormalLevel from "./(pages)/normal-level/page";

export default function Home() {
  return (
    <>
      <section className="text-gray-600 bg-gray-700 h-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Welcome to Tower-Quest Game</h1>
          </div>
          <div className="flex justify-center w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <Link href='/normal-level' className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Normal</Link>
            <Link href='/medium-level' className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Medium</Link>
            <Link href='/hard-level' className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Hard</Link>
            <Link href='/impossible-level' className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Impossible</Link>

          </div>
        </div>
      </section>

    </>
  );
}
