import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-slate-700 border-gray-200">
            <div className="max-w-100 flex flex-wrap items-center justify-between mx-auto p-4">
                <span>
                    {/*<Image src="/assets/pokeball.jpeg" alt="Pokeball!" width={48} height={48} className="inline mr-4"/>*/}
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Make-a-Dex</span>
                </span>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                    <li>
                        <Link href="/pokedex/new" className="block py-2 pl-3 pr-4 text-white" aria-current="page">New Pokedex</Link>
                    </li>
                    <li>
                        <Link href="/pokedexes" className="block py-2 pl-3 pr-4 text-white" aria-current="page">My Pokedexes</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;