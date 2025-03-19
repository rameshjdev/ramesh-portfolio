import { Briefcase, GraduationCap, InfoIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

const experiences = [
  {
    year: 'February 2020 - Present',
    title: 'Application Software Engineer',
    company: 'IT KeySource Inc',
    companyDescription: 'IT KeySource is an digital engineering firm, offering practical and business outcome-based services. It integrates digital engineering, workforce services and consulting into a unified, enterprise-ready solution.',
    type: 'work'
  },
  {
    year: 'April 2019 - January 2020',
    title: 'Software Developer',
    company: 'Infovision Inc',
    companyDescription: 'At InfoVision, we are steadfastly committed to creating a lasting, positive impact on the society we belong to.  Rooted in the core value of ’Respect and support for one and all’, our CSR efforts are diverse, result driven, and ever-evolving. We actively engage in projects spanning digital education, environmental stewardship, women empowerment, and health & hygiene. Each program is designed to create an enduring impact, seeding a brighter and more equitable future.',
    type: 'work'
  },
  {
    year: 'June 2018 - January 2019',
    title: 'Software Developer',
    company: 'Advent Global Solutions Inc',
    companyDescription: 'Since 1997, Advent Global Solutions has been at the forefront of technology, seamlessly blending deep expertise in systems and solutions with a passionate team of over 1,500 professionals. With a mission to drive digital transformation for companies around the globe, we are dedicated to shaping the future with our innovative approach encapsulated in our core values of TECH: Think, Emerge, Connect, and Hustle.',
    type: 'work'
  },
  {
    year: '2015 - 2017',
    title: 'Masters Degree(Computer Science)',
    company: 'Oklahoma Christian University, Oklahoma',
    companyDescription: 'Our holistic approach to education extends beyond academic excellence, fostering spiritual growth and career development, preparing you to lead a life aligned with GODS PURPOSE.',
    type: 'education'
  },
  {
    year: '2008 - 2012',
    title: 'B.Tech Degree(Information Technology)',
    company: 'Jntu-Kakinada, India',
    companyDescription: 'Jawaharlal Nehru Technological University Kakinada is a public university in Kakinada of Andhra Pradesh, India. It is one of Indias largest universities focusing on engineering. The university has been accredited by the National Assessment and Accreditation Council of the University Grants Commission with an "A+" grade.',
    type: 'education'
  }
];

/**
 * A component that renders a section about the developer's experience and education.
 * @returns {React.ReactElement} The experience and education section.
 */
const Experience = () => {
  const [hoveredExperience, setHoveredExperience] = React.useState<null | {companyDescription: string}>(null);
  return (
    <section id="experience" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-dark-50"
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
                <p className="text-gray-400 font-semibold">{exp.company}
                <motion.button
                    className='ml-2 mt-4 text-sm text-primary hover:text-primary/80'
                    whileHover={{ scale: 1.1 }}
                    onMouseOver={() => {
                      setHoveredExperience(exp);
                    }}
                    onMouseOut={() => setHoveredExperience(null)}
                  >
                    <InfoIcon size={16} />
                  </motion.button>
                  {hoveredExperience === exp && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute z-50 bg-primary/100 shadow-md p-4 rounded-lg w-100 text-sm"
                    >
                      <p className="text-gray-600 text-align-justify">{exp.companyDescription}</p>
                    </motion.div>
                  )}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;