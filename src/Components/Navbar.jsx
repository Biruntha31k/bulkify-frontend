function Navbar() {
    return (
        <div>
            <nav className="bg-gradient-to-r from-[#9b4d83] to-[#d4a3c3] p-5 z-30 flex items-center justify-between fixed w-[100%] top-0 shadow-2xl">
                <h1 className="text-3xl text-white font-serif tracking-widest">Bulkify</h1>

                <ul className="flex gap-8 text-white font-serif">
                    <li>
                        <a className="hover:text-[#f1b5d2] transition-all duration-300" href="#">Home</a>
                    </li>

                    <li>
                        <a className="hover:text-[#f1b5d2] transition duration-300" href="#">About</a>
                    </li>

                    <li>
                        <a className="hover:text-[#f1b5d2] transition duration-300" href="#">Contact</a>
                    </li>
                </ul>

                <div className="flex gap-4 text-2xl text-white">
                    <i className="fab fa-facebook hover:text-[#f1b5d2] cursor-pointer transition duration-300"></i>
                    <i className="fab fa-twitter hover:text-[#f1b5d2] cursor-pointer transition duration-300"></i>
                    <i className="fab fa-instagram hover:text-[#f1b5d2] cursor-pointer transition duration-300"></i>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
