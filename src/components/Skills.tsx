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
    <section id="skills" className="py-20 bg-gradient-to-b from-dark-900 to-secondary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-primary/5 blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
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
              className="bg-dark-800/40 backdrop-blur-lg rounded-3xl overflow-hidden border border-dark-700/30 shadow-xl group hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: `0 25px 50px -12px ${category.color}20`,
                borderColor: `${category.color}40`,
                transition: { duration: 0.3 }
              }}
            >
              <div className="h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-70"></div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <motion.div 
                    className="p-4 rounded-2xl relative"
                    style={{ backgroundColor: `${category.color}15` }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: `${category.color}25`,
                    }}
                  >
                    <div className="relative z-10" style={{ color: category.color }}>
                      {category.icon}
                    </div>
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-40"
                      style={{ 
                        background: `radial-gradient(circle at center, ${category.color}30 0%, transparent 70%)` 
                      }}
                    ></div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="relative"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + (skillIndex * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between mb-3">
                        <span className="text-gray-200 font-medium">{skill.name}</span>
                        <motion.span 
                          className="text-white font-semibold px-3 py-1 rounded-full text-sm"
                          style={{ 
                            background: `linear-gradient(90deg, ${category.color}90, ${category.color})`,
                            boxShadow: `0 2px 10px ${category.color}50`
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 + (skillIndex * 0.1) }}
                          viewport={{ once: true }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="h-3 bg-dark-700/40 rounded-full overflow-hidden backdrop-blur-sm">
                        <motion.div
                          className="h-full rounded-full relative"
                          style={{ 
                            background: `linear-gradient(90deg, ${category.color}80, ${category.color})`,
                            boxShadow: `0 0 10px ${category.color}70`
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.2, 
                            ease: "easeOut",
                            delay: 0.3 + (skillIndex * 0.1)
                          }}
                          viewport={{ once: true }}
                        >
                          <div className="absolute top-0 left-0 w-full h-full opacity-50"
                            style={{
                              background: `linear-gradient(90deg, transparent, ${category.color}60, transparent)`,
                              backgroundSize: '200% 100%',
                              animation: 'shimmer 2s infinite'
                            }}
                          ></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="mt-8 w-full h-px bg-gradient-to-r from-transparent via-dark-600 to-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                ></motion.div>
                
                <motion.div
                  className="mt-6 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Add shimmer animation */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  );
};

export default Skills;