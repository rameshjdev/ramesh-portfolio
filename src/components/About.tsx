import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';

/**
 * A component that renders a section about the developer.
 * @returns {React.ReactElement} The about section.
 */
const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-secondary to-dark-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="md:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-2 text-white">
                About <span className="text-primary">Me</span>
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full mb-8"></div>
            </motion.div>
            
            <motion.p 
              className="text-lg text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Hi, I'm a Experienced Full Stack Java Developer with over six years of designing and implementing high-performance applications.
              Expertise in optimizing the codebase for robustness and scalability, while adept at managing complex technical challenges.
              Proven track record in delivering both web and mobile applications on time, through effective team collaboration.
              Aiming to lead innovative projects that leverage cutting-edge technology to drive business growth.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="./resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-secondary px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-primary/90 transition shadow-lg shadow-primary/20 font-medium"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.a>
              <motion.a 
                href="#contact"
                className="border-2 border-primary text-primary px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-primary/10 transition font-medium"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-80 h-80">
              {/* Animated background elements */}
              <motion.div 
                className="absolute -top-4 -left-4 w-full h-full bg-primary/20 rounded-2xl"
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                  x: [0, 5, 0, -5, 0],
                  y: [0, 5, 0, -5, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -right-4 w-full h-full bg-primary/30 rounded-2xl"
                animate={{ 
                  rotate: [0, -5, 0, 5, 0],
                  x: [0, -5, 0, 5, 0],
                  y: [0, -5, 0, 5, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              ></motion.div>
              
              {/* Profile image with frame */}
              <motion.div 
                className="relative z-10 w-full h-full rounded-2xl overflow-hidden border-4 border-dark-800 shadow-2xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent mix-blend-overlay z-10"
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                
                <motion.img 
                  src="./ramesh.jpg" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;