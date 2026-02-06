import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Server, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
        >
          <div className="md:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">About Me</h2>
            <div className="text-secondary space-y-4 text-base leading-relaxed">
              <p>
                I am a software engineer driven by the challenge of building scalable backends and the creativity of designing intuitive products. My journey began with a curiosity for how data moves across the globe, which evolved into a passion for distributed systems and API design.
              </p>
              <p>
                Currently, I'm pursuing my Master's in Computer Science at <span className="text-white font-medium">CSULB</span>, diving deep into advanced algorithms and system architecture.
              </p>
              <p>
                When I'm not coding, I'm analyzing product trends or exploring the local tech scene in California. I believe the best engineering solutions come from understanding the 'why' behind the 'what'.
              </p>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 hover:border-accent/50 transition-colors duration-300">
              <h3 className="text-white font-semibold text-lg mb-6">Quick Overview</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-background rounded-lg text-accent">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">MS Computer Science</p>
                    <p className="text-secondary text-xs">CSULB (Exp. 2026)</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-background rounded-lg text-accent">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Ex-Software Engineer Intern</p>
                    <p className="text-secondary text-xs">Hewlett Packard Enterprise</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-background rounded-lg text-accent">
                    <Server size={18} />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Focus Areas</p>
                    <p className="text-secondary text-xs">Backend • APIs • Distributed Systems</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-background rounded-lg text-accent">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Location</p>
                    <p className="text-secondary text-xs">Long Beach, CA</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;