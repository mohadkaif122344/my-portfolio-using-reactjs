import { useRef, useState } from "react";
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
        {
          publicKey:import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setResult("");
        e.target.reset();
      })
      .catch(() => {
        toast.error("Something went wrong!");
        setResult("");
      });
  };

  return (
    <div
      id="contact"
      className="relative overflow-hidden bg-gray-950 py-20 text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-950/30 via-gray-950 to-pink-950/20"></div>
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"></div>
      <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl"></div>
      <ToastContainer />
      <div className="relative container mx-auto px-6 -m-10">
        <h2 className="mb-4 text-center text-5xl font-bold">
          Get In{" "}
          <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-xl font-semibold text-gray-400">
          Have a project in mind or want to collaborate? Let's talk!
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mx-auto max-w-xl space-y-6"
        >
          <div>
            <label className="mb-2 block text-gray-300">Your Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Your name..."
              required
              className="w-full rounded-lg border border-gray-800 bg-transparent px-4 py-3 outline-none focus:border-orange-500 duration-300 shadow-md hover:shadow-red-700"
            />
          </div>
          <div>
            <label className="mb-2 block text-gray-300">Email Address</label>
            <input
              type="email"
              name="user_email"
              placeholder="Your email address..."
              required
              className="w-full rounded-lg border border-gray-800 bg-transparent px-4 py-3 outline-none focus:border-orange-500 duration-300 shadow-md hover:shadow-red-700"
            />
          </div>
          <div>
            <label className="mb-2 block text-gray-300">Your Message</label>
            <textarea
              name="message"
              placeholder="Your message..."
              required
              className="h-56 w-full rounded-lg border border-gray-800 bg-transparent px-4 py-3 outline-none focus:border-orange-500 duration-300 shadow-md hover:shadow-red-700"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-orange-600 to-pink-400 px-6 py-3 font-medium text-white shadow-md transition duration-300 hover:from-orange-800 hover:to-pink-500 "
          >
            Send
          </button>

          <span className="text-gray-300">{result}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
