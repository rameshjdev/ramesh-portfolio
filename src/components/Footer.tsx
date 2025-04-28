import { Github, Heart} from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * The footer component, which contains the social links and the copyright information.
 *
 * The component will animate when it comes into view.
 *
 * @returns {JSX.Element} The footer component.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/rameshjdev', Target: '_blank', rel: 'noopener noreferrer', label: 'GitHub' },
    // { icon: Linkedin, href: 'https://www.linkedin.com/in/ramesh-k-a95b55279/', Target: '_blank', rel: 'noopener noreferrer', label: 'LinkedIn',},
  ];

  return (
    <footer className="relative bg-dark-900/50 backdrop-blur-sm border-t border-dark-700">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div 
            className="flex items-center gap-2 text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>by <span className="text-primary font-semibold">Ramesh Kolukuluri</span></span>
          </motion.div>

          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.Target}
                rel={social.rel}
                className="text-gray-400 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                title={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div 
            className="text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {currentYear} All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;