
import React from "react";
import { motion } from "framer-motion";

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-accent rounded-lg p-8 text-center"
    >
      <div className="flex justify-center">{service.icon}</div>
      <h3 className="text-xl font-bold mb-4">{service.title}</h3>
      <p className="text-muted-foreground">{service.description}</p>
    </motion.div>
  );
}
