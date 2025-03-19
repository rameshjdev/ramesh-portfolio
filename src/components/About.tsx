import { motion } from 'framer-motion';

/**
 * A component that renders a section about the developer.
 * @returns {React.ReactElement} The about section.
 */
const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="md:w-1/2"
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-primary">About Me</h2>
            <p className="text-lg text-gray-300 mb-6 text-justify">
            Hi, I'm a Experienced Full Stack Java Developer with over six years of designing and implementing high-performance applications.
            Expertise in optimizing the codebase for robustness and scalability, while adept at managing complex technical challenges.
            Proven track record in delivering both web and mobile applications on time, through effective team collaboration.
            Aiming to lead innovative projects that leverage cutting-edge technology to drive business growth.
            </p>
            <div className="flex gap-4">
              <motion.button 
                className="bg-primary text-secondary px-6 py-2 rounded-lg hover:bg-primary/80 transition shadow-lg shadow-primary/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              <a target='_blank' rel='noopener noreferrer' href='./resume.pdf'>Download CV</a>
              </motion.button>
              <motion.button 
                className="border-2 border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary/10 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href='#contact'>Contact Me</a>
              </motion.button>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-72 h-72 mx-auto">
              <motion.div 
                className="absolute inset-0 bg-primary rounded-2xl"
                animate={{ rotate: [0, 6, 6, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              ></motion.div>
              <motion.img 
                src="./ramesh.jpg" 
                alt="Profile"
                className="relative z-10 w-full h-full object-cover rounded-2xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;