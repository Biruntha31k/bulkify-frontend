function Newsletter() {
    return (
        <>
            <div className="text-center bg-[#f3e0ec] shadow-2xl p-10 mt-3">
                <h1 className="text-3xl font-serif mt-5 text-[#6e3b56] p-3">Subscribe to our newsletter</h1>
                <p className="text-[#6e3b56]">
                To receive updates regarding our services, offers, and more, please subscribe to our notifications.
                </p>
                <input
                    type="text"
                    className="border border-[#d3a1b8] p-2 m-4 w-[80%] rounded-lg bg-[#f9ebf3] text-[#6e3b56] outline-none"
                    placeholder="Enter your E-mail..."
                />
                <br />
                <button className="bg-[#9b4d83] text-white p-3 m-1 rounded-md hover:bg-[#c27d9b]">
                    Subscribe to Us
                </button>
            </div>
        </>
    );
}

export default Newsletter;
