"use client";
declare global {
  interface Window {
    submitted: boolean;
  }
}
import { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
        onLoad={() => {
          if (window.submitted) {
            setIsSubmitted(true);
            toast("Submitted ✅");
          }
        }}
      ></iframe>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-glow-green text-green-neon mt-10 p-8 text-center text-2xl lg:text-3xl"
        id="contact"
      >
        Contact
      </motion.p>

      <div className="mx-auto flex w-full justify-center px-4 pb-12">
        <motion.div
          className="w-full max-w-sm rounded-4xl border-3 p-8 sm:max-w-lg md:w-2/3 md:max-w-xl"
          initial={{ scale: 0.95, opacity: 0, x: 10 }}
          whileInView={{ scale: 1, opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {isSubmitted ? (
            <div className="font-quicksand flex flex-col items-center text-center text-lg sm:text-xl">
              Form Submitted!
            </div>
          ) : (
            <form
              action="https://docs.google.com/forms/d/e/1FAIpQLSeYyIU3k7Ln6LiohuWma4ZAqXxghR5Y_s12oObQr-8JEL_c-w/formResponse"
              onSubmit={() => (window.submitted = true)}
              target="hidden_iframe"
            >
              <div className="font-quicksand block text-sm font-bold md:text-base">
                Name
              </div>
              <input
                name="entry.495580574"
                type="text"
                placeholder="Name"
                className="mt-2 w-full rounded-2xl border-1 bg-white p-3 font-medium text-black"
                required
              />

              <div className="font-quicksand mt-4 block text-sm font-bold md:text-base">
                Email
              </div>
              <input
                name="entry.1903916603"
                type="email"
                placeholder="Email"
                className="mt-2 w-full rounded-2xl border-1 bg-white p-3 font-medium text-black"
                required
              />

              <div className="font-quicksand mt-4 block text-sm font-bold md:text-base">
                Message
              </div>
              <textarea
                name="entry.477008615"
                className="mt-2 w-full rounded-2xl border-1 bg-white p-6 font-medium text-black"
                required
              />
              <motion.div whileHover={{ scale: 1.05 }}>
                <div className="mt-4 flex justify-center">
                  <button className="bg-blue-secondary w-30 cursor-pointer rounded-2xl border-1 p-2.5 text-center text-sm md:text-base">
                    Submit
                  </button>
                </div>
              </motion.div>
            </form>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default ContactUs;
