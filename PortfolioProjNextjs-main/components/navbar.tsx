import Link from "next/link";

export default function Navbar() {
    return(
        <nav>
            <div className="container mx-auto bg-grey p-4">
                <ul className="flex md:space-x-6 items-center justify-center py-3">
                    <li>
                        <Link href="/" className="text-white text-base md:text-xl p-2 m-2 hover:bg-white hover:text-black hover:ring rounded-lg shadow-white shadow-sm transition-colors duration-500">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-white text-base md:text-xl p-2 m-2 hover:bg-white hover:text-black hover:ring rounded-lg shadow-white shadow-sm transition-colors duration-500">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="education" className="text-white text-base md:text-xl p-2 m-2 hover:bg-white hover:text-black hover:ring rounded-lg shadow-white shadow-sm transition-colors duration-500">
                            Education
                        </Link>
                    </li>
                    <li>
                        <Link href="projects" className="text-white text-base md:text-xl p-2 m-2 hover:bg-white hover:text-black hover:ring rounded-lg shadow-white shadow-sm transition-colors duration-500">
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}