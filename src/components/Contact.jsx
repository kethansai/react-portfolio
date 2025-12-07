import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { personalInfo, socialLinks } from "../data/portfolioData";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    alert("Thank you for your message! This is a demo form.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-br from-gray-50 via-primary-50/30 to-blue-50/30 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 print-section"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-8 sm:mb-12 px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
          </motion.div>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Let's discuss how we can work together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900 dark:text-white">
              Contact Information
            </h3>

            <div className="space-y-4 sm:space-y-6">
              <motion.a
                href={socialLinks.email}
                whileHover={{ x: 10, scale: 1.05 }}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                <div
                  className="w-14 h-14 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl 
                              flex items-center justify-center text-white shadow-lg"
                >
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Email
                  </p>
                  <p className="text-gray-900 dark:text-white font-semibold">
                    {personalInfo.email}
                  </p>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${personalInfo.phone}`}
                whileHover={{ x: 10, scale: 1.05 }}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                <div
                  className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl 
                              flex items-center justify-center text-white shadow-lg"
                >
                  <FaPhone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Phone
                  </p>
                  <p className="text-gray-900 dark:text-white font-semibold">
                    {personalInfo.phone}
                  </p>
                </div>
              </motion.a>

              <motion.a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10, scale: 1.05 }}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                <div
                  className="w-14 h-14 bg-gradient-to-r from-green-400 to-green-600 rounded-xl 
                              flex items-center justify-center text-white shadow-lg"
                >
                  <FaWhatsapp size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    WhatsApp
                  </p>
                  <p className="text-gray-900 dark:text-white font-semibold">
                    Message Me
                  </p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 10, scale: 1.05 }}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md"
              >
                <div
                  className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl 
                              flex items-center justify-center text-white shadow-lg"
                >
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Location
                  </p>
                  <p className="text-gray-900 dark:text-white font-semibold">
                    Tirupati, Andhra Pradesh
                  </p>
                </div>
              </motion.div>

              {/* Social Links */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">
                  Follow Me
                </p>
                <div className="flex gap-4">
                  <motion.a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
                  >
                    <FaGithub size={24} />
                  </motion.a>
                  <motion.a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <FaLinkedin size={24} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="no-print"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 
                                                 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-900 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-primary-500 focus:border-transparent 
                           transition-all duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 
                                                  dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-900 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-primary-500 focus:border-transparent 
                           transition-all duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 
                                                    dark:text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-900 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-primary-500 focus:border-transparent 
                           transition-all duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 
                                                    dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-900 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-primary-500 focus:border-transparent 
                           transition-all duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold 
                         hover:bg-primary-700 transition-colors shadow-lg flex items-center 
                         justify-center gap-2"
              >
                <FaPaperPlane /> Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
