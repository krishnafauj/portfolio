import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Send, Loader2 } from "lucide-react";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_7f71ydh",   // 🔹 replace with your EmailJS service ID
        "template_kkjhpl8",  // 🔹 replace with your EmailJS template ID
        form.current,
        "P_9-wGeALQcRyuBRX"  // 🔹 replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        () => {
          setStatus("❌ Failed to send message. Try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
          <Send className="mr-3 text-emerald-400" /> Contact
        </h2>

        <form ref={form} onSubmit={sendEmail} className="bg-slate-800 p-8 rounded-xl shadow-md">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400 mb-6"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2" size={18} /> Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>

          {status && (
            <p className="mt-4 text-center text-sm text-gray-300">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
