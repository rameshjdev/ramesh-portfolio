import { motion } from 'framer-motion';
import { Database, KeyRound, Layout, MessagesSquare, Server, Terminal } from 'lucide-react';

const skillCategories = [
  {
    name: 'Frontend Development',
    icon: <Layout className="w-6 h-6" />,
    color: '#2a9d8f',
    skills: [
      { name: 'React.js', level: 70 },
      { name: 'JavaScript/TypeScript', level: 60 },
      { name: 'HTML/CSS', level: 70 },
      { name: 'Tailwind CSS', level: 60 },
      { name: 'Bootstrap', level: 60 },
      { name: 'Redux', level: 60 }
    ]
  },
  {
    name: 'Backend Development',
    icon: <Server className="w-6 h-6" />,
    color: '#e63946',
    skills: [
      { name: 'Spring Boot', level: 100 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'GraphQL', level: 80 },
      { name: 'Spring MVC', level: 90 },
      { name: 'Spring WebFlux', level: 80 },
      { name: 'Node.js', level: 60 }
    ]
  },
  {
    name: 'Database',
    icon: <Database className="w-6 h-6" />,
    color: '#a7c957',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Redis', level: 85 },
      { name: 'MySQL', level: 90 },
      { name: 'Oracle', level: 90 }
    ]
  },
  {
    name: 'DevOps & Tools',
    icon: <Terminal className="w-6 h-6" />,
    color: '#f72585',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Jenkins', level: 75 },
      { name: 'CI/CD', level: 80 },
      { name: 'Maven', level: 100 },
      { name: 'Gradle', level: 80 }
    ]
  },
  {
    name: 'Authentication & Authorization',
    icon: <KeyRound className="w-6 h-6" />,
    color: '#679436',
    skills: [
      { name: 'OAuth 2.0', level: 80 },
      { name: 'JWT', level: 90 },
      { name: 'LDAP', level: 75 }
    ]
  },
  {
    name: 'Message Brokers',
    icon: <MessagesSquare className="w-6 h-6" />,
    color: '#2ec4b6',
    skills: [
      { name: 'RabbitMQ', level: 80 },
      { name: 'Apache Kafka', level: 80 },
      { name: 'ActiveMQ', level: 75 }
    ]
  }
];

/**
 * The `Skills` component renders a section about the technical skills that I have.
 * It features a grid of cards that display the skill category name, icon, and
 * skills with levels. When a card is hovered, the skills will slide in from the
 * left.
 * @returns {React.ReactElement} The skills section.
 */
const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Expertise across various technologies and frameworks that I've mastered throughout my career
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-dark-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-dark-700/50 shadow-xl group hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="h-2" style={{ backgroundColor: category.color }}></div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: `${category.color}20` }}>
                    <div style={{ color: category.color }}>
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="relative"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + (skillIndex * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-200 font-medium">{skill.name}</span>
                        <motion.span 
                          className="text-white font-semibold px-2 py-0.5 rounded-md text-sm"
                          style={{ backgroundColor: category.color }}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 + (skillIndex * 0.1) }}
                          viewport={{ once: true }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="h-2.5 bg-dark-700/70 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: category.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.2, 
                            ease: "easeOut",
                            delay: 0.3 + (skillIndex * 0.1)
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;