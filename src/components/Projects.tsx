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
              className="bg-dark-800 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden border border-dark-700/50 shadow-2xl flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              {/* Header with close button */}
              <div className="relative flex items-center justify-between p-6 border-b border-dark-700/50">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <span className="text-primary text-xl font-bold">#</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{(selectedProject as typeof projects[0]).title}</h3>
                </motion.div>
                
                <motion.button
                  className="p-2 rounded-full bg-dark-700/50 hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center"
                  onClick={() => setSelectedProject(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5 text-white" />
                </motion.button>
              </div>
              
              {/* Content area with custom scrollbar */}
              <div className="overflow-y-auto custom-scrollbar flex-grow">
                {/* Hero image section */}
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <motion.img 
                    src={(selectedProject as typeof projects[0]).image}
                    alt={(selectedProject as typeof projects[0]).title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2, opacity: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-dark-800/70 to-transparent"></div>
                </div>
                
                {/* Project details */}
                <div className="p-8">
                  {/* Overview section */}
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                        <span className="text-primary font-bold">01</span>
                      </div>
                      <h4 className="text-xl font-semibold text-white">Overview</h4>
                    </div>
                    <div className="pl-11">
                      <p className="text-gray-300 leading-relaxed bg-dark-700/30 p-6 rounded-xl border border-dark-600/50">
                        {(selectedProject as typeof projects[0])?.longDescription}
                      </p>
                    </div>
                  </motion.div>
                  
                  {/* Technologies section */}
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                        <span className="text-primary font-bold">02</span>
                      </div>
                      <h4 className="text-xl font-semibold text-white">Technologies</h4>
                    </div>
                    <div className="pl-11">
                      <div className="flex flex-wrap gap-3">
                        {(selectedProject as typeof projects[0]).technologies.map((tech, index) => (
                          <motion.span 
                            key={index}
                            className="px-4 py-2 bg-dark-700/50 text-white border border-dark-600/50 rounded-lg text-sm font-medium hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-colors duration-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + (index * 0.03) }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Features section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                        <span className="text-primary font-bold">03</span>
                      </div>
                      <h4 className="text-xl font-semibold text-white">Key Features</h4>
                    </div>
                    <div className="pl-11">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {(selectedProject as typeof projects[0]).features.map((feature, index) => (
                          <motion.div 
                            key={index} 
                            className="flex items-center text-gray-300 bg-dark-700/30 p-4 rounded-xl border border-dark-600/50 hover:border-primary/30 hover:bg-dark-700/50 transition-all duration-300"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + (index * 0.05) }}
                          >
                            <div className="w-2 h-8 rounded-full bg-primary mr-4 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Footer with action buttons */}
              <div className="border-t border-dark-700/50 p-6 bg-dark-700/30">
                <div className="flex flex-wrap justify-end gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-xl bg-dark-700/50 text-white hover:bg-dark-600 transition-colors duration-300"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </motion.button>
                  
                  {(selectedProject as typeof projects[0]).github && (
                    <motion.a
                      href={(selectedProject as typeof projects[0]).github as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 rounded-xl bg-primary/80 text-dark-900 hover:bg-primary transition-colors duration-300 font-medium"
                    >
                      View Code
                    </motion.a>
                  )}
                  
                  {(selectedProject as typeof projects[0]).live && (
                    <motion.a
                      href={(selectedProject as typeof projects[0]).live as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent-primary text-dark-900 hover:opacity-90 transition-opacity duration-300 font-medium"
                    >
                      Live Demo
                    </motion.a>
                  )}
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