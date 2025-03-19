import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
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
        'template_o89gkyu', // Replace with your EmailJS template ID
        form.current,
        'tDD54-RIWy48tC4Ye' // Replace with your EmailJS public key
      );

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      });
      form.current.reset();
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-dark-50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-dark-50 mb-6">Let's Connect</h3>
              <p className="text-dark-100 mb-8 text-justify">
              Whether you're interested in collaborating, discussing to provide an professional oppurtunity, or simply want to connect, I’d love to hear from you. Feel free to reach out, and let's explore how we can work together to bring your ideas to life.
              </p>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-accent-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent-primary" color='#FF6B6B'/>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-dark-100">Email</h4>
                    <p className="text-dark-50">rameshworkwiz@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-accent-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent-primary" color='#e9ff70'/>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-dark-100">Phone</h4>
                    <p className="text-dark-50">+1 (704) 309-3315</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-accent-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent-primary" color='#2ec4b6'/>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-dark-100">Location</h4>
                    <p className="text-dark-50">Charlotte, NC</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-dark-800/50 backdrop-blur-sm p-8 rounded-xl border border-dark-700"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="user_name" className="block text-sm font-medium text-dark-100 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    className="w-full px-4 py-2 bg-dark-900/50 border border-dark-700 rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-transparent text-dark-50"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="user_email" className="block text-sm font-medium text-dark-100 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    className="w-full px-4 py-2 bg-dark-900/50 border border-dark-700 rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-transparent text-dark-50"
                    placeholder="your@email.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-dark-100 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-dark-900/50 border border-dark-700 rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-transparent text-dark-50"
                    placeholder="Your message"
                  ></textarea>
                </motion.div>

                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-500/10 text-green-500 border border-green-500/20' 
                        : 'bg-red-500/10 text-red-500 border border-red-500/20'
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-accent-primary text-black font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-accent-primary/90 transition ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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