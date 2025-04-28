import { Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

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
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Experience & <span className="text-primary">Education</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My professional journey and academic background that have shaped my career
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline center line with gradient */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/20 rounded-full"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative mb-16 ${index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'} md:w-1/2`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline node */}
              <motion.div
                className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-10 h-10 rounded-full flex items-center justify-center z-10`}
                style={{ 
                  background: `linear-gradient(135deg, ${exp.type === 'education' ? '#a7c957' : '#e63946'}, ${exp.type === 'education' ? '#679436' : '#9d0208'})` 
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.2,
                  boxShadow: `0 0 20px 2px ${exp.type === 'education' ? '#a7c95780' : '#e6394680'}`
                }}
              >
                {exp.type === 'education' ? (
                  <GraduationCap className="w-5 h-5 text-white" />
                ) : (
                  <Briefcase className="w-5 h-5 text-white" />
                )}
              </motion.div>

              {/* Content card */}
              <motion.div
                className="bg-dark-800/80 backdrop-blur-md p-8 rounded-2xl border border-dark-700/50 shadow-xl relative z-0 overflow-hidden"
                whileHover={{ 
                  y: -5,
                  boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 15px 1px ${exp.type === 'education' ? '#a7c95730' : '#e6394630'}`
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative accent */}
                <div 
                  className="absolute top-0 left-0 w-full h-1 rounded-t-2xl"
                  style={{ 
                    background: `linear-gradient(to right, ${exp.type === 'education' ? '#a7c957' : '#e63946'}, transparent)` 
                  }}
                ></div>
                
                {/* Year badge */}
                <motion.span 
                  className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4"
                  style={{ 
                    background: `linear-gradient(135deg, ${exp.type === 'education' ? '#a7c95720' : '#e6394620'}, transparent)`,
                    color: exp.type === 'education' ? '#a7c957' : '#e63946',
                    border: `1px solid ${exp.type === 'education' ? '#a7c95740' : '#e6394640'}`
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {exp.year}
                </motion.span>
                
                <h3 className="text-2xl font-bold mt-2 text-white mb-2">{exp.title}</h3>
                <p className="text-gray-300 font-medium">{exp.company}</p>
                
                {/* Company description paragraph */}
                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                  {exp.companyDescription}
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