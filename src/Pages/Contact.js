import React from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faEnvelope, faComment, faUser } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const [state, handleSubmit] = useForm("xwpbdjwk");

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none text-gray-900 dark:text-white placeholder-gray-400 transition-all";

  return (
    <main className="relative min-h-screen grid-bg pt-32 pb-20">
      <div className="blob w-96 h-96 bg-blue-500 top-20 -left-20"></div>
      <div className="blob w-96 h-96 bg-purple-500 bottom-20 right-0"></div>

      <div className="container mx-auto max-width px-6 relative z-10">
        
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            Let's talk
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-gray-900 dark:text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Drop me a message!
          </p>
        </motion.div>

        {state.succeeded ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto glass rounded-2xl p-8 text-center shadow-xl"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
              <span className="text-3xl">✅</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Message Sent!
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Thanks for reaching out. I'll get back to you soon.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto glass rounded-3xl p-8 md:p-10 shadow-2xl border border-white/20"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  <FontAwesomeIcon icon={faEnvelope} className="text-blue-500" />
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className={inputClass}
                  placeholder="you@example.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  <FontAwesomeIcon icon={faComment} className="text-blue-500" />
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  className={`${inputClass} resize-none`}
                  placeholder="I'd like to talk about..."
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={state.submitting}
                className={`btn-shine w-full py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-3 ${
                  state.submitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {state.submitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} />
                    Send Message
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        )}
      </div>
    </main>
  );
}

export default Contact;