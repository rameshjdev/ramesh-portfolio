import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    year: 'February 2020 - Present',
    title: 'Application Software Engineer',
    company: 'IT KeySource Inc.',
    // description: 'Leading development of enterprise web applications using React and Node.js.',
    type: 'work'
  },
  {
    year: 'April 2019 - January 2020',
    title: 'Software Developer',
    company: 'Infovision Inc.',
    // description: 'Developed and maintained multiple client projects using modern web technologies.',
    type: 'work'
  },
  {
    year: 'June 2018 - January 2019',
    title: 'Software Developer',
    company: 'Advent Global Solutions Inc.',
    // description: 'Specialized in creating responsive and interactive user interfaces.',
    type: 'work'
  },
  {
    year: '2015 - 2017',
    title: 'Masters Degree(Computer Science)',
    company: 'Oklahoma Christian University, Edmond, OK 73013',
    // description: 'Completed Masters degree with focus on advanced computing concepts.',
    type: 'education'
  },
  {
    year: '2008 - 2012',
    title: 'B.Tech Degree(Information Technology)',
    company: 'JNTU-KAKINADA, Andhra Pradesh 533003, India',
    // description: 'Completed Bachelor of Technology degree with strong foundation in computer science.',
    type: 'education'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Experience & Education
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className={`relative mb-12 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'} md:w-1/2`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/20`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {exp.type === 'education' ? (
                  <GraduationCap className="w-4 h-4 text-secondary" />
                ) : (
                  <Briefcase className="w-4 h-4 text-secondary" />
                )}
              </motion.div>
              
              <motion.div 
                className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-lg border border-dark-700 shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-primary font-semibold">
                  {exp.year}
                </span>
                <h3 className="text-xl font-bold mt-2 text-gray-200">{exp.title}</h3>
                <p className="text-gray-400 font-medium">{exp.company}</p>
                <p className="text-gray-500 mt-2">{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;