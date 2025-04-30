import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

/**
 * The `Contact` component renders a contact section for users to reach out.
 * It includes a form for submitting messages via EmailJS, and displays contact
 * information such as email, phone, and location. The form features animated
 * input fields and a responsive design, with state management for submission
 * status. Users can submit their name, email, and message, and receive feedback
 * on successful or failed message delivery.
 */

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      await emailjs.sendForm(
        'service_gnqey7r', // Replace with your EmailJS service ID
        'template_2t8ec0q', // Replace with your EmailJS template ID
        form.current,
        'tDD54-RIWy48tC4Ye' // Replace with your EmailJS public key
      );

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      });
      form.current.reset();
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 2000);
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-dark-900 to-dark-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-accent-primary/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Let's connect and discuss how we can collaborate on your next project
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-stretch">
            <motion.div 
              className="md:col-span-2 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-dark-800/40 backdrop-blur-md p-8 rounded-2xl border border-dark-700/50 shadow-xl h-full">
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-gray-300 mb-10 leading-relaxed text-align-justify">
                  Whether you're interested in collaborating, discussing a professional opportunity, or simply want to connect, I'd love to hear from you.
                </p>
                
                <div className="space-y-6">
                  <motion.a 
                    href="mailto:rameshworkwiz@gmail.com"
                    className="flex items-center gap-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400">Email</h4>
                      <p className="text-white font-medium group-hover:text-primary transition-colors">rameshworkwiz@gmail.com</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                  </motion.a>

                  <motion.a 
                    href="tel:+17043093315"
                    className="flex items-center gap-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-500/10 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-yellow-500/10 transition-all duration-300">
                      <Phone className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400">Phone</h4>
                      <p className="text-white font-medium group-hover:text-yellow-500 transition-colors">+1 (704) 309-3315</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                  </motion.a>

                  <motion.div 
                    className="flex items-center gap-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-teal-500/10 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-teal-500/10 transition-all duration-300">
                      <MapPin className="w-5 h-5 text-teal-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400">Location</h4>
                      <p className="text-white font-medium group-hover:text-teal-500 transition-colors">Charlotte, NC</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="md:col-span-3 bg-dark-800/40 backdrop-blur-md p-8 rounded-2xl border border-dark-700/50 shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <input
                      type="text"
                      id="user_name"
                      name="from_name"
                      required
                      className="w-full px-5 py-4 bg-dark-900/50 border border-dark-700/50 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-white peer pt-7 outline-none transition-all"
                      placeholder=" "
                    />
                    <label 
                      htmlFor="user_name" 
                      className="absolute text-sm text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary"
                    >
                      Your Name
                    </label>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <input
                      type="email"
                      id="user_email"
                      name="from_email"
                      required
                      className="w-full px-5 py-4 bg-dark-900/50 border border-dark-700/50 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-white peer pt-7 outline-none transition-all"
                      placeholder=" "
                    />
                    <label 
                      htmlFor="user_email" 
                      className="absolute text-sm text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary"
                    >
                      Your Email
                    </label>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-5 py-4 bg-dark-900/50 border border-dark-700/50 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-white peer pt-7 outline-none transition-all resize-none"
                    placeholder=" "
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary"
                  >
                    Your Message
                  </label>
                </motion.div>

                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-primary to-primary/80 text-dark-950 font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-5 h-5 ml-2" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;