import { motion } from 'framer-motion';
import { Database, KeyRound, Layout, MessagesSquare, Server, Terminal } from 'lucide-react';

const skillCategories = [
  {
    name: 'Frontend Development',
    icon: <Layout className="w-6 h-6" color='#2a9d8f'/>,
    backgroundImage: 'https://img.freepik.com/free-vector/abstract-background-gradient-design-style_698780-823.jpg',
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
    icon: <Server className="w-6 h-6" color='#e63946'/>,
    backgroundImage: 'https://img.freepik.com/free-vector/abstract-background-gradient-design-style_698780-823.jpg',
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
    icon: <Database className="w-6 h-6" color='#a7c957'/>,
    backgroundImage: 'https://img.freepik.com/free-vector/abstract-background-gradient-design-style_698780-823.jpg',
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
    icon: <Terminal className="w-6 h-6" color='#f72585'/>,
    backgroundImage: 'https://img.freepik.com/free-vector/abstract-background-gradient-design-style_698780-823.jpg',
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
    icon: <KeyRound className="w-6 h-6" color='#679436'/>,
    backgroundImage: 'https://img.freepik.com/free-vector/abstract-background-gradient-design-style_698780-823.jpg',
    skills: [
      { name: 'OAuth 2.0', level: 80 },
      { name: 'JWT', level: 90 },
      { name: 'LDAP', level: 75 }
    ]
  },
  {
    name: 'Message Borkers',
    icon: <MessagesSquare className="w-6 h-6" color='#2ec4b6'/>,
    backgroundImage: 'https://img.freepik.com/free-vector/abstract-background-gradient-design-style_698780-823.jpg',
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
    <section id="skills" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-dark-50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-dark-800/50 backdrop-blur-none rounded-xl p-6 border border-dark-700 shadow-lg bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${category.backgroundImage})`}}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent-green/5 text-accent-green rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-50">{category.name}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-dark-100 font-medium">{skill.name}</span>
                      <span className="text-accent-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-dark-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills