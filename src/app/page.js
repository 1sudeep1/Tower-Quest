import Link from "next/link";
export default function Home() {
  return (
    <>
      <section className="text-gray-600 bg-gray-700 lg:h-screen">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="lg:text-5xl text-4xl font-medium title-font mb-4 text-white text-center">Tower-Quest Game</h1>

          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="lg:text-xl text-lg font-medium title-font mb-4 text-white">Welcome to Tower-Quest Game</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">Tower Quest features eight floors, each with a set number of boxes. Players begin at the
              bottom floor and select a box. If they uncover a gem, they advance to the next floor; if they
              reveal a bomb, the game ends. The goal is to ascend to the top floor by selecting gems
              while avoiding bombs.</p>
          </div>
          <div className="flex justify-center w-full sm:flex-row flex-col items-center mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0">
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
