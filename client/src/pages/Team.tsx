import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ChevronLeft, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const teamMembers = [
  {
    name: 'Alex Chen',
    role: 'CEO & Co-founder',
    initials: 'AC',
    bio: 'Serial entrepreneur with 15+ years in tech. Previously founded two successful startups.',
    linkedin: '#',
    twitter: '#',
    email: 'alex@pioneers.com'
  },
  {
    name: 'Sarah Williams',
    role: 'CTO & Co-founder',
    initials: 'SW',
    bio: 'Former tech lead at major cloud companies. Expert in distributed systems and AI.',
    linkedin: '#',
    twitter: '#',
    email: 'sarah@pioneers.com'
  },
  {
    name: 'Marcus Johnson',
    role: 'Head of Design',
    initials: 'MJ',
    bio: 'Award-winning designer passionate about creating intuitive user experiences.',
    linkedin: '#',
    twitter: '#',
    email: 'marcus@pioneers.com'
  },
  {
    name: 'Elena Rodriguez',
    role: 'VP Engineering',
    initials: 'ER',
    bio: 'Tech innovator specializing in scalable architectures and team leadership.',
    linkedin: '#',
    twitter: '#',
    email: 'elena@pioneers.com'
  }
];

export default function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Link href="/">
            <Button variant="ghost" className="mb-6 text-cyan-400 hover:text-cyan-300">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-cyan-400 font-mono text-sm mb-4">OUR TEAM</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
              Meet the Pioneers
            </h1>
            <p className="text-xl text-gray-400">
              A diverse team of engineers, designers, and visionaries united by the mission to transform technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Avatar */}
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <span className="text-4xl font-bold text-white">{member.initials}</span>
                  </div>

                  {/* Info */}
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-400 mb-6">{member.bio}</p>

                  {/* Social Links */}
                  <div className="flex space-x-4">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 bg-slate-800 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-cyan-400" />
                    </a>
                    <a
                      href={member.twitter}
                      className="w-10 h-10 bg-slate-800 hover:bg-purple-500/20 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Twitter className="w-5 h-5 text-purple-400" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-slate-800 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-4xl mx-auto text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-slate-800 rounded-2xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Join Our Team</h2>
            <p className="text-xl text-gray-400 mb-8">
              We're always looking for talented individuals who share our passion for innovation.
            </p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-8 py-6 text-lg">
                View Open Positions
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}