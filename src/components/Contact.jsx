import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [result, setResult] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setResult("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);

          toast.success("Message sent successfully!");

          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error);

          toast.error(" Something went wrong!");
        }
      );
  };
  return (
    <div
      id="contact"
      className="py-20 bg-gradient-to-r from-black via-black to-slate-700"
    >
      <ToastContainer />
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4 text-white">
          Get In{" "}
          <span
            className="bg-gradient-to-r from-orange-500 to-pink-500 
           bg-clip-text text-transparent"
          >
            Touch
          </span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl font-semibold text-xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let's talk!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 max-w-xl mx-auto">
          <div>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  className="w-full font-extralight bg-transparent border border-gray-800 rounded-lg px-4 py-3 outline-none"
                  type="text"
                  name="user_name"
                  placeholder="Your name..."
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="user_email"
                  className="block text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  className="w-full font-extralight bg-transparent border border-gray-800 rounded-lg px-4 py-3 outline-none"
                  type="email"
                  name="user_email"
                  placeholder="Your email address..."
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  className="w-full font-extralight bg-transparent border border-gray-800 rounded-lg px-4 py-3 h-56 outline-none"
                  name="message"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 
                   text-white   shadow-lg 
                   hover:from-orange-600 hover:to-pink-700 rounded-lg font-medium  transition duration-300 cursor-pointer hover:bg-gradient-to-r"
              >
                Send
              </button>

              <span className="text-gray-300">{result}</span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
