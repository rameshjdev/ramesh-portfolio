import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-secondary via-secondary to-dark-950">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl font-bold mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm{' '}
            <span className="text-primary animate-pulse">
              Ramesh Kolukuluri
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            A passionate Full Stack Developer specializing in building exceptional digital experiences
          </motion.p>
          <motion.div 
            className="flex justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.a 
              href="https://github.com/rameshjdev"
              target='_blank'
              rel='noopener noreferer'
              className="p-2 bg-primary text-secondary rounded-full hover:bg-primary/80 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/ramesh-k-a95b55279/" 
              target='_blank'
              rel='noopener noreferrer'
              className="p-2 bg-primary text-secondary rounded-full hover:bg-primary/80 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="#contact" 
              className="p-2 bg-primary text-secondary rounded-full hover:bg-primary/80 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>
          <motion.button 
            className="bg-primary text-secondary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/80 transition shadow-lg shadow-primary/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a href='#projects'>View My Work</a>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;