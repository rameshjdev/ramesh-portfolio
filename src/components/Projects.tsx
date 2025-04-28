import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'Vendor Insurance Portal',
    description: 'The Vendor Insurance Portal aims to enhance efficiency, compliance, and transparency for both vendors and businesses in managing insurance-related documentation.',
    longDescription: 'The Vendor Insurance Portal is an online platform designed to manage and streamline the process of purchasing, verifying, and tracking insurance coverage for vendors working with businesses, contractors, or organizations. This portal serves as a centralized hub where vendors can upload their insurance documents, manage their coverage, and ensure compliance with organizational requirements. Businesses and clients can also review, approve, and maintain records of these insurance policies, ensuring that all vendors meet the necessary legal and operational requirements.',
    image: './portal.jpg',
    technologies: ['React', 'SpringBoot', 'Micro Services', 'MongoDB', 'Redis', 'Spring WebFlux', 'GraphQL', 'Restful Framework', 'RabbitMQ', 'XML/JSON', 'JWT', 'Spring Cloud', 'Spring Security'],
    features: [
      'User authentication and authorization',
      'HIPPA Comiplation and Validations',
      'BAR File Loading and Processing',
      'Secure payment processing',
      'Payemnt Gateway System',
      'Kafka Borkers Integration'
    ],
    //github: '#',
    //live: '#'
  },
  {
    title: 'E-Commerce Application',
    description: 'The E-Commerce Application is designed to offer a seamless shopping experience for customers while providing businesses and sellers with a powerful platform to manage their products and grow their online presence.',
    longDescription: 'The E-Commerce Application is a web and mobile-based platform designed to facilitate online buying and selling of products and services. The application enables users (both customers and sellers) to engage in seamless transactions, discover products, make payments, track orders, and manage inventory in a user-friendly environment. The system also includes features like personalized recommendations, customer reviews, order management, and secure payment gateways, ensuring an exceptional shopping experience for customers and robust tools for sellers.',
    image: './commerce.jpg',
    technologies: ['React', 'Spring JPA', 'Rest API', 'Oracle Database', 'Kibana', 'CI/CD', 'SQL', 'Stored Procedures', 'Asynchronous Programming'],
    features: [
      'User Registartion & Profiles:',
      'Product Catalog',
      'Shopping Cart & Wishlist',
      'Product Search & Filters',
      'Plans & Device Protection',
      'Secure Payment Gateway',
      'Order Management & Tracking',
      'Order Dashboard for Visualization',
      'Order History & Invoice Management',
      'Discount, Coupons & Loyalty Programs',
      'Shipping & Delivery'
    ],
    // github: '#',
    // live: '#'
  },
  {
    title: 'Digital Supply Chain Transformation',
    description: 'The Digital Supply Chain Transformation project aims to revolutionize the traditional supply chain model by integrating digital technologies and creating a more intelligent, responsive, and sustainable supply chain.',
    longDescription: 'The Digital Supply Chain Transformation project focuses on leveraging cutting-edge digital technologies to enhance the efficiency, visibility, and flexibility of supply chain operations.This transformation empowers organizations to anticipate disruptions, optimize inventory management, improve demand forecasting, and provide end-to-end visibility.',
    image: './chain.jpg',
    technologies: ['High Charts', 'Spring MVC', 'Chart.js', 'Spring Core', 'Rest API', 'JSM', 'Java Streams', 'OOP', 'Core Java'],
    features: [
      'Supply Chain Visibility Platforms',
      'Iot Integration for Smart Monitoring',
      'Blockchain for Supply Chain Transparency',
      'Supply Chain Collbration Tools',
      'Sustainability and Green Logistics',
      'Demand Forcasting and Predictive Analytics'
    ],
    // github: '#',
    // live: '#'
  }
];

/**
 * The `Projects` component renders a section showcasing the developer's featured projects.
 * It displays a grid of project cards, each containing an image, title, description, and 
 * technologies used. When a project is clicked, a detailed view of the project is shown 
 * in a modal, featuring a longer description, key features, and technologies used.
 * 
 * The component uses Framer Motion for animations, including fade-ins and hover effects.
 * It utilizes a state to keep track of the selected project for the modal display.
 *
 * @returns {JSX.Element} The projects section with a modal for project details.
 */

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" className="py-20 bg-gradient-to-b from-secondary to-dark-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore some of my recent work showcasing my technical skills and problem-solving abilities.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="aspect-square bg-dark-800/60 backdrop-blur-md rounded-full overflow-hidden border border-dark-700/50 shadow-xl group cursor-pointer"
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  borderColor: "rgba(var(--color-primary-rgb), 0.5)",
                }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-full w-full overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent"></div>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300 mb-2">
                      {project.title}
                    </h3>
                    
                    <motion.div
                      className="mt-4 bg-primary text-dark-900 rounded-full px-4 py-2 inline-flex items-center font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      View Details
                      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-dark-900/90 backdrop-blur-md flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-dark-800 rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-dark-700/50 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <div className="h-80 overflow-hidden">
                  <motion.img 
                    src={(selectedProject as typeof projects[0]).image}
                    alt={(selectedProject as typeof projects[0]).title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2, opacity: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent"></div>
                </div>
                
                <motion.button
                  className="absolute top-6 right-6 p-3 bg-dark-800/80 backdrop-blur-sm rounded-full border border-dark-700/50 hover:bg-dark-700 transition-colors duration-300"
                  onClick={() => setSelectedProject(null)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <X className="w-6 h-6 text-primary" />
                </motion.button>
                
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <motion.div
                    className="inline-block bg-primary text-dark-900 rounded-lg px-6 py-2 font-bold text-xl mb-4 shadow-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {(selectedProject as typeof projects[0]).title}
                  </motion.div>
                </div>
              </div>
              
              <div className="p-8">
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="text-2xl font-semibold mb-4 text-white">
                    <span className="text-primary">#</span> Overview
                  </h4>
                  <p className="text-gray-300 text-lg leading-relaxed bg-dark-700/30 p-6 rounded-lg border border-dark-600/50">
{(selectedProject as typeof projects[0])?.longDescription}
                  </p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <motion.div 
                    className="bg-dark-700/30 rounded-lg border border-dark-600/50 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="bg-dark-600/50 px-4 py-3 border-b border-dark-500/30">
                      <h4 className="text-xl font-semibold text-white">
                        <span className="text-primary mr-2">#</span> Technologies Used
                      </h4>
                    </div>
                    <div className="p-5">
                      <div className="flex flex-wrap gap-3">
                        {(selectedProject as typeof projects[0]).technologies.map((tech, index) => (
                          <motion.span 
                            key={index}
                            className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + (index * 0.05) }}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--color-primary-rgb), 0.2)" }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="bg-dark-700/30 rounded-lg border border-dark-600/50 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="bg-dark-600/50 px-4 py-3 border-b border-dark-500/30">
                      <h4 className="text-xl font-semibold text-white">
                        <span className="text-primary mr-2">#</span> Key Features
                      </h4>
                    </div>
                    <div className="p-5">
                      <div className="grid grid-cols-1 gap-3">
                        {(selectedProject as typeof projects[0]).features.map((feature, index) => (
                          <motion.div 
                            key={index} 
                            className="flex items-center text-gray-300 bg-dark-700/50 p-3 rounded-lg"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + (index * 0.05) }}
                            whileHover={{ backgroundColor: "rgba(var(--color-primary-rgb), 0.1)" }}
                          >
                            <div className="w-3 h-3 rounded-full bg-primary mr-3 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;