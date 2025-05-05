import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

export default function TeamMemberCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-secondary rounded-lg p-8"
    >
      <div className="mb-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-xl font-bold">{member.name}</h3>
        <p className="text-primary mb-4">{member.role}</p>
      </div>
      <p className="text-muted-foreground mb-4">{member.description}</p>

      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
      >
        <Linkedin className="w-4 h-4" /> View LinkedIn
      </a>
    </motion.div>
  );
}
