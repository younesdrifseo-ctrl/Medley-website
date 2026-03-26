"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variants = {
  primary: "bg-olive text-cream hover:bg-forest",
  secondary: "bg-gold2 text-deep hover:bg-gold",
  outline: "border-2 border-olive text-olive hover:bg-olive hover:text-cream",
};

const sizes = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-base",
  lg: "px-9 py-4 text-lg",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 font-body font-medium tracking-wide rounded-sm transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(90,107,58,0.2)" }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(90,107,58,0.2)" }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
