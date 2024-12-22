import { useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";

function Bulkmail() {
    const [msg, setmsg] = useState("");
    const [status, setstatus] = useState(false);
    const [emailList, setEmailList] = useState([]);

    function handlemsg(evt) {
        setmsg(evt.target.value);
    }

    function handlefile(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function (event) {
            const data = event.target.result;
            const workbook = XLSX.read(data, { type: "binary" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const emailList = XLSX.utils.sheet_to_json(worksheet, { header: "A" });
            const totalemail = emailList.map((item) => item.A);
            setEmailList(totalemail);
        };
        reader.readAsArrayBuffer(file);
    }

    function send() {
        setstatus(true);
        axios.post(`${process.env.REACT_APP_API_URL}/sendmail`, { msg, emailList })
            .then((response) => {
                if (response.data === true) {
                    alert("Email Sent Successfully 👍 :)");
                } else {
                    alert("Email sending failed 👎 :(");
                }
            })
            .catch((err) => {
                console.error("Error sending mail:", err);
                alert("An error occurred while sending emails");
            });
    }

    return (
        <>
            <div className="bg-gradient-to-r from-[#9b4d83] to-[#d4a3c3] text-white text-center py-6 shadow-md">
                <h1 className="text-4xl font-serif">Bulkify! ~ Your go-to solution for sending bulk emails effortlessly</h1>
                <p className="mt-2 font-medium">Streamline your email correspondence in just a few minutes!</p>
            </div>

            <div className="bg-[#f9ebf3] py-8 px-4">
                <h2 className="text-3xl font-serif text-center text-[#6e3b56] mb-6">
                    Drag and Drop Your Email List
                </h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    {/* Message Input */}
                    <div className="flex flex-col items-start w-full max-w-md">
                        <label className="text-lg font-medium text-[#6e3b56] mb-2">
                            Email Message:
                        </label>
                        <textarea
                            onChange={handlemsg}
                            value={msg}
                            className="w-full h-32 border border-[#d3a1b8] bg-[#fffafa] text-[#6e3b56] rounded-lg p-3 shadow-sm outline-none focus:ring-2 focus:ring-[#d4a3c3]"
                            placeholder="Please enter the content of your email in this space."
                        ></textarea>
                    </div>

                    {/* File Upload */}
                    <div className="flex flex-col items-center">
                        <label className="text-lg font-medium text-[#6e3b56] mb-3">
                            Upload your E-mail list as Excel file:
                        </label>
                        <input
                            onChange={handlefile}
                            type="file"
                            className="border-4 border-dashed py-3 px-5 border-[#d3a1b8] bg-[#fffafa] text-[#6e3b56] rounded-lg shadow-sm focus:ring-2 focus:ring-[#d4a3c3]"
                        />
                        <p className="mt-4 text-sm text-[#6e3b56]">
                            Total emails uploaded: <strong>{emailList.length}</strong>
                        </p>
                    </div>
                </div>

                {/* Send Button */}
                <div className="flex justify-center mt-10">
                    <button
                        onClick={send}
                        className={`py-3 px-6 rounded-lg font-medium text-white shadow-md transition duration-300 ${
                            status
                                ? "bg-[#9b4d83] opacity-70 cursor-not-allowed"
                                : "bg-[#9b4d83] hover:bg-[#6e3b56] hover:shadow-lg"
                        }`}
                        disabled={status}
                    >
                        {status ? "Sending..." : "Send Emails"}
                    </button>
                </div>
            </div>
        </>
    );
}

export default Bulkmail;
