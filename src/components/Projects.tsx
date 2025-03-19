import { useState } from 'react';
import {  X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'Vendor Insurance Portal',
    description: 'The Vendor Insurance Portal aims to enhance efficiency, compliance, and transparency for both vendors and businesses in managing insurance-related documentation.',
    longDescription: 'The Vendor Insurance Portal is an online platform designed to manage and streamline the process of purchasing, verifying, and tracking insurance coverage for vendors working with businesses, contractors, or organizations. This portal serves as a centralized hub where vendors can upload their insurance documents, manage their coverage, and ensure compliance with organizational requirements. Businesses and clients can also review, approve, and maintain records of these insurance policies, ensuring that all vendors meet the necessary legal and operational requirements.',
    image: './vendor.jpg',
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
    image: './shopping.jpg',
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
    image: './supplychain.jpg',
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
      <section id="projects" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="bg-dark-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-dark-700 shadow-lg cursor-pointer bg-image-./chain.jpg"
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
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
            className="fixed inset-0 bg-dark-900/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dark-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-dark-700"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <motion.img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  className="absolute top-4 right-4 p-2 bg-dark-800/80 backdrop-blur-sm rounded-full border border-dark-700"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-6 h-6 text-primary" />
                </button>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-primary">{selectedProject.title}</h3>
                <p className="text-gray-300 mb-6">{selectedProject.longDescription}</p>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3 text-primary">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3 text-primary">Key Features</h4>
                  <ul className="list-disc list-inside space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="text-gray-300">{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* <div className="flex gap-4">
                  <motion.a 
                    href={selectedProject.github}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-secondary rounded-lg hover:bg-primary/90 transition shadow-lg shadow-primary/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </motion.a>
                  <motion.a 
                    href={selectedProject.live}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-secondary rounded-lg hover:bg-primary/90 transition shadow-lg shadow-primary/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </motion.a>
                </div> */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;