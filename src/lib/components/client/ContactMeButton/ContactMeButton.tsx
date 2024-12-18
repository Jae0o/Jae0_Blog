"use client";

import { ContactMeButtonProps } from "./ContactMeButton.type";

import { motion } from "motion/react";

const ContactMeButton = ({ url, Icon }: ContactMeButtonProps) => {
  return (
    <motion.a
      className="w-[5rem] h-[5rem] flex items-center justify-center bg-white_500 rounded-circle shadow-medium transition-opacity duration-[0.3s]"
      href={url}
      rel="noreferrer noopener"
      aria-label={`link move ${url}`}
      whileHover={{
        filter: "brightness(80%)",
      }}
      whileTap={{
        scale: 0.9,
      }}
    >
      {Icon}
    </motion.a>
  );
};

export default ContactMeButton;
