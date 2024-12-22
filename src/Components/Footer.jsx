import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
    return (
        <>
            <footer className="bg-[#f3e0ec] py-8 px-6 text-[#6e3b56]">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    {/* Branding */}
                    <div className="mb-6 md:mb-0">
                        <h1 className="text-3xl font-serif font-bold text-[#9b4d83]">Bulkify</h1>
                        <p className="text-sm mt-2">Designed and developed by <i>Biruntha krishnamoorthy</i></p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col md:flex-row md:gap-8 text-center">
                        <p className="mb-2 md:mb-0 hover:text-[#9b4d83] cursor-pointer">Get the App</p>
                        <p className="mb-2 md:mb-0 hover:text-[#9b4d83] cursor-pointer">Privacy Policy</p>
                        <p className="mb-2 md:mb-0 hover:text-[#9b4d83] cursor-pointer">Terms of use</p>
                        <p className="mb-2 md:mb-0 hover:text-[#9b4d83] cursor-pointer">Cookie Policy</p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex gap-4 text-2xl text-[#9b4d83] mt-6 md:mt-0">
                        <i className="fab fa-facebook hover:text-[#6e3b56] cursor-pointer"></i>
                        <i className="fab fa-twitter hover:text-[#6e3b56] cursor-pointer"></i>
                        <i className="fab fa-instagram hover:text-[#6e3b56] cursor-pointer"></i>
                        <i className="fab fa-linkedin hover:text-[#6e3b56] cursor-pointer"></i>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center mt-8 text-sm text-[#9b4d83]">
                    <p>&copy; 2024 Bulkify. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
