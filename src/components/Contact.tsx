"use client";
declare global {
  interface Window {
    submitted: boolean;
  }
}
import { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const formContainerVariants = {
  hidden: { scale: 0.95, opacity: 0, x: 10 },
  visible: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: 0.3 },
  },
};

const buttonHoverVariants = {
  hover: { scale: 1.05 },
};

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
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="font-chakra text-glow-green text-green-neon mt-10 p-8 text-center text-2xl lg:text-3xl"
        id="contact"
      >
        Contact
      </motion.p>

      <div className="mx-auto flex w-full justify-center px-4 pb-12">
        <motion.div
          className="w-full max-w-sm rounded-4xl border-3 p-8 sm:max-w-lg md:w-2/3 md:max-w-xl"
          variants={formContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {isSubmitted ? (
            <div className="font-share flex flex-col items-center text-center text-lg sm:text-xl">
              Form Submitted!
            </div>
          ) : (
            <form
              action="https://docs.google.com/forms/d/e/1FAIpQLSeYyIU3k7Ln6LiohuWma4ZAqXxghR5Y_s12oObQr-8JEL_c-w/formResponse"
              onSubmit={() => (window.submitted = true)}
              target="hidden_iframe"
            >
              <div className="font-share block text-sm font-bold md:text-base">
                Name
              </div>
              <input
                name="entry.495580574"
                type="text"
                placeholder="Name"
                className="font-share mt-2 w-full rounded-2xl border-1 bg-white p-3 font-medium text-black"
                required
              />

              <div className="font-share mt-4 block text-sm font-bold md:text-base">
                Email
              </div>
              <input
                name="entry.1903916603"
                type="email"
                placeholder="Email"
                className="font-share mt-2 w-full rounded-2xl border-1 bg-white p-3 font-medium text-black"
                required
              />

              <div className="font-share mt-4 block text-sm font-bold md:text-base">
                Message
              </div>
              <textarea
                name="entry.477008615"
                className="font-share mt-2 w-full rounded-2xl border-1 bg-white p-6 font-medium text-black"
                required
              />
              <motion.div variants={buttonHoverVariants} whileHover="hover">
                <div className="mt-4 flex justify-center">
                  <button className="font-share bg-blue-secondary w-30 cursor-pointer rounded-2xl border-1 p-2.5 text-center text-sm md:text-base">
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
