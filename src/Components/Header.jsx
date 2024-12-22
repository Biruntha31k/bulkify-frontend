function Header() {
    return (
        <>
            <section className="bg-gradient-to-r from-[#f3e0ec] to-[#d4a3c3] mt-24 p-10 flex flex-col justify-center items-center shadow-2xl rounded-lg">

                <h1 className="text-4xl font-serif mb-4 text-center text-[#6a4c9c]">Connect with Your Audience in Mere Minutes</h1>
                <p className="mb-8 font-serif text-center text-[#7d4e8c] max-w-xl">Effortlessly generate and dispatch customized quotes in large quantities. Streamline your business communications swiftly, enhancing customer engagement to unprecedented levels.<br></br><br></br> Ready to streamline your emails? Sign up now!</p>

                <div className="flex gap-5 justify-center">
                    <button className="bg-[#9b67a5] border border-[#7d4e8c] rounded-full px-8 py-3 text-white shadow-lg transform transition duration-300 hover:bg-[#6a4c9c] hover:scale-105">
                        Login
                    </button>
                    <button className="border border-[#9b67a5] rounded-full px-8 py-3 text-[#9b67a5] shadow-lg transform transition duration-300 hover:bg-[#7d4e8c] hover:text-white hover:scale-105">
                        Sign up
                    </button>
                </div>

            </section>
        </>
    );
}

export default Header;
