
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { ArrowRight, Fan, Gauge, Shield, Flame, Battery, Thermometer, AlertTriangle } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import TeamMemberCard from "@/components/TeamMemberCard";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import Carousel from "@/components/Carousel";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const customerLogos = [
  "https://storage.googleapis.com/hostinger-horizons-assets-prod/49e0f8c4-5ba5-4d19-9d94-b238dea397ec/de9b8b37a6b007b861e320fea1dafee6.png",
  "https://storage.googleapis.com/hostinger-horizons-assets-prod/49e0f8c4-5ba5-4d19-9d94-b238dea397ec/659e56cc114e9415831908d033590827.png",
  "https://storage.googleapis.com/hostinger-horizons-assets-prod/49e0f8c4-5ba5-4d19-9d94-b238dea397ec/4a30a77f7ba7f6595bfc0442116ff0c4.png",
  "https://storage.googleapis.com/hostinger-horizons-assets-prod/49e0f8c4-5ba5-4d19-9d94-b238dea397ec/566f443e5303f6c0e3d7d835aac72129.png",
  "https://storage.googleapis.com/hostinger-horizons-assets-prod/49e0f8c4-5ba5-4d19-9d94-b238dea397ec/266e156281c9e4163fb91ea1e13c3b96.png"
];

const teamMembers = [
  {
    name: "Roberto Alvarez",
    role: "Ventilation Specialist",
    description: "15 years of experience in underground mine ventilation, specializing in design, management, and commissioning worldwide. Expert in 3D modeling, dust suppression, and HVAC systems.",
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/49e0f8c4-5ba5-4d19-9d94-b238dea397ec/6c247fcd6cec9597d18e21dc53e9095b.png"
  },
  {
    name: "Jose Llanca",
    role: "Mining Specialist",
    description: "Over 13 years of experience in mine ventilation and environmental control. Pioneer in CFD tools for airflow simulations and expertise in ventilation surveys.",
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/49e0f8c4-5ba5-4d19-9d94-b238dea397ec/4e675dcc2c1e918807698fb9fed5138c.png"
  },
  {
    name: "Gian Scappaticcio",
    role: "Civil Mining Engineer",
    description: "13 years of experience in civil and structural tunnel design. Specialist in large, technically complex international projects and underground works.",
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/49e0f8c4-5ba5-4d19-9d94-b238dea397ec/8a5bb82a04bcb8dd9d7bd65404ba6bfa.png"
  }
];

const services = [
  {
    icon: <Fan className="w-12 h-12 mb-4 text-primary" />,
    title: "Ventilation System Design",
    description: "Specialized design and sizing of main and auxiliary ventilation systems for underground mines."
  },
  {
    icon: <Flame className="w-12 h-12 mb-4 text-primary" />,
    title: "Fire Simulation & Risk Assessment",
    description: "Computational simulations for fire behavior prediction and safety protocol development in underground environments."
  },
  {
    icon: <AlertTriangle className="w-12 h-12 mb-4 text-primary" />,
    title: "Risk Assessment",
    description: "On-site inspections, fire safety protocols, escape routes planning, and comprehensive safety system evaluations."
  },
  {
    icon: <Gauge className="w-12 h-12 mb-4 text-primary" />,
    title: "Ventilation Control Systems",
    description: "Implementation of automated systems and ambient sensors for monitoring and control of ventilation assets."
  },
  {
    icon: <Battery className="w-12 h-12 mb-4 text-primary" />,
    title: "Battery Electric Vehicles",
    description: "Consulting on electric fleet implementation, including ventilation requirements and charging infrastructure."
  },
  {
    icon: <Thermometer className="w-12 h-12 mb-4 text-primary" />,
    title: "Environmental Conditions",
    description: "Comprehensive analysis and control of gases, dust, noise exposure, and thermal conditions in mining environments."
  }
];

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="fixed w-full bg-background/80 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="home" smooth={true} duration={500}>
              <h1 className="text-2xl font-bold gradient-text cursor-pointer">MinCiv</h1>
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="services" smooth={true} duration={500}>
                <Button variant="ghost">Services</Button>
              </Link>
              <Link to="team" smooth={true} duration={500}>
                <Button variant="ghost">Team</Button>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <Button>Contact Us</Button>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Mining Ventilation Experts
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Specialized solutions in ventilation and working conditions for underground mines, 
              focusing on safety, energy efficiency, and regulatory compliance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="contact" smooth={true} duration={500}>
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="services" smooth={true} duration={500}>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Images */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <img 
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/49e0f8c4-5ba5-4d19-9d94-b238dea397ec/13ffdce264c21df80bb84e0011614836.webp"
              alt="Mining ventilation equipment"
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <img 
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/49e0f8c4-5ba5-4d19-9d94-b238dea397ec/31293c1f84a7f702cad64b368c412867.jpg"
              alt="Underground mining operations"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground">Comprehensive mining ventilation solutions</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expert Team</h2>
            <p className="text-muted-foreground">Meet our experienced mining specialists</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Customers Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Customers</h2>
            <p className="text-muted-foreground">Trusted by leading mining companies</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {customerLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Customer logo ${index + 1}`}
                  className="h-16 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Improve Your Mine Ventilation?</h2>
            <p className="text-muted-foreground mb-8">
              Contact us today to discuss your mining ventilation needs and discover how we can help optimize your operations.
            </p>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      <Toaster />
    </div>
  );
}
