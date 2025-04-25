import logo from "../assets/iCoderLogo.png";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className="mt-20 mb-8">
      <div className="flex items-center justify-center">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={logo}
          width={150}
          className="my-20"
        />
      </div>
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => {
          return (
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: index * 0.5 }}
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </motion.a>
          );
        })}
      </div>
      <p className="mt-8 text-xl tracking-tighter text-center text-gray-400 ">
        &copy; iCoder. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
