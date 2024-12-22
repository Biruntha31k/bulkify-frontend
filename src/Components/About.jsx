function About() {
    return (
        <>
            <div className="text-center bg-gradient-to-r from-[#f3e0ec] to-[#d4a3c3] p-10">
                <h1 className="text-4xl font-serif text-[#6e3b56]">Know Who We Are</h1>
                <p className="text-xl text-[#8c516e] mt-3 mb-8">We are an organization dedicated to providing exceptional services and fostering meaningful connections within our community.<br></br><br></br>Bulkify has simplified our email campaigns and improved outreach by 50%!</p>

                <div className="grid md:grid-cols-3 gap-8">

                    <div className="border-2 border-[#d3a1b8] p-6 shadow-lg rounded-lg bg-[#f9ebf3] hover:scale-105 transition duration-300 ease-in-out">
                        <p className="flex justify-center text-5xl text-[#c27d9b] mb-4">
                            <i className="fas fa-smile"></i> {/* Example Icon */}
                        </p>
                        <h2 className="text-2xl font-semibold text-[#6e3b56]">Satisfied Users</h2>
                        <p className="text-[#70485e] mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, porro! Porro consequuntur rerum dignissimos, eos libero voluptas earum necessitatibus aut, ad accusantium odio cum tempora, expedita est deleniti ipsum nesciunt?</p>
                    </div>

                    <div className="border-2 border-[#d3a1b8] p-6 shadow-lg rounded-lg bg-[#f9ebf3] hover:scale-105 transition duration-300 ease-in-out">
                        <p className="flex justify-center text-5xl text-[#c27d9b] mb-4">
                            <i className="fas fa-credit-card"></i> {/* Example Icon */}
                        </p>
                        <h2 className="text-2xl font-semibold text-[#6e3b56]">Subscribed Users</h2>
                        <p className="text-[#70485e] mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, porro! Porro consequuntur rerum dignissimos, eos libero voluptas earum necessitatibus aut, ad accusantium odio cum tempora, expedita est deleniti ipsum nesciunt?</p>
                    </div>

                    <div className="border-2 border-[#d3a1b8] p-6 shadow-lg rounded-lg bg-[#f9ebf3] hover:scale-105 transition duration-300 ease-in-out">
                        <p className="flex justify-center text-5xl text-[#c27d9b] mb-4">
                            <i className="fas fa-headset"></i> {/* Example Icon */}
                        </p>
                        <h2 className="text-2xl font-semibold text-[#6e3b56]">Round-the-clock service & support</h2>
                        <p className="text-[#70485e] mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, porro! Porro consequuntur rerum dignissimos, eos libero voluptas earum necessitatibus aut, ad accusantium odio cum tempora, expedita est deleniti ipsum nesciunt?</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default About;
