import React from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faUser, faEnvelope, faComment } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const [state, handleSubmit] = useForm("xwpbdjwk");

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto max-width pt-10 pb-20 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg"
    >
      <section className="px-6 py-10">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl text-center text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold border-b-2 border-gray-300 dark:border-gray-600 pb-4 mb-10"
        >
          Get In Touch
        </motion.h1>

        {state.succeeded ? (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg text-center"
          >
            ✅ Message sent successfully! I’ll get back to you soon.
          </motion.div>
        ) : (
          <motion.form
            variants={formVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
            className="space-y-8 max-w-2xl mx-auto bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg"
          >

            <div className="space-y-2">
              <label htmlFor="email" className="flex items-center text-lg font-medium text-gray-700 dark:text-gray-200">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-500" />
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-800 dark:text-gray-200 transition-all duration-200"
                placeholder="you@example.com"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="flex items-center text-lg font-medium text-gray-700 dark:text-gray-200">
                <FontAwesomeIcon icon={faComment} className="mr-2 text-blue-500" />
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-800 dark:text-gray-200 transition-all duration-200"
                placeholder="I'd like to talk about..."
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <div className="pt-4">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                disabled={state.submitting}
                className={`w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ${state.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {state.submitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        )}
      </section>
    </motion.main>
  );
}

export default Contact;
