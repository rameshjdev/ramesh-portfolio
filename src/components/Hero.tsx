import { Github, Mail, ArrowDown, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * The `Hero` component renders a hero section that appears at the top of the
 * page. It features a centered title, a tagline, and a call-to-action button
 * that links to the projects section. The component uses Framer Motion to animate
 * the elements when they come into view.
 * @returns {JSX.Element} The hero component.
 */
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-950">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-secondary/20 to-dark-950 z-0"></div>
      
      {/* Animated particles/circles */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
                Full Stack Developer
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70 inline-block">
                Ramesh Kolukuluri
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              A passionate Full Stack Developer specializing in building exceptional digital experiences with modern technologies and creative solutions.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.a 
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-dark-950 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <ExternalLink className="w-5 h-5" />
              </motion.a>
              
              <motion.a 
                href="#contact"
                className="px-8 py-4 bg-dark-800/50 backdrop-blur-sm text-white rounded-xl font-bold border border-dark-700/50 hover:bg-dark-800 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="text-gray-400 font-medium">Find me on</div>
              <div className="h-px bg-gray-700 flex-grow"></div>
              <motion.a 
                href="https://github.com/rameshjdev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-dark-800/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-dark-700/50 hover:bg-primary/10 hover:border-primary/50 transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a 
                href="mailto:rameshworkwiz@gmail.com"
                className="w-12 h-12 bg-dark-800/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-dark-700/50 hover:bg-primary/10 hover:border-primary/50 transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 text-white" />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative">
              {/* This is where you could add a profile image or animated illustration */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-1">
                <div className="w-full h-full rounded-full bg-dark-900 flex items-center justify-center overflow-hidden">
                  {/* If you have a profile image, add it here */}
                  <div className="text-6xl font-bold text-primary">RK</div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary/30 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="text-gray-400 text-sm mb-2">Scroll Down</div>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;