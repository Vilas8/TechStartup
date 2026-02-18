import { Link } from 'wouter';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">P</span>
                </div>
                <span className="font-bold tracking-wider text-white">PIONEERS</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400">
              Building the future of technology, one innovation at a time.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Products</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/product/cloudsync">
                  <button className="hover:text-cyan-400 transition-colors">CloudSync</button>
                </Link>
              </li>
              <li>
                <Link href="/product/devflow">
                  <button className="hover:text-cyan-400 transition-colors">DevFlow</button>
                </Link>
              </li>
              <li>
                <Link href="/product/teamhub">
                  <button className="hover:text-cyan-400 transition-colors">TeamHub</button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/team">
                  <button className="hover:text-cyan-400 transition-colors">Our Team</button>
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  <button className="hover:text-cyan-400 transition-colors">Pricing</button>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <button className="hover:text-cyan-400 transition-colors">All Products</button>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <button className="hover:text-cyan-400 transition-colors">Contact Us</button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/privacy-policy">
                  <button className="hover:text-cyan-400 transition-colors">Privacy Policy</button>
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service">
                  <button className="hover:text-cyan-400 transition-colors">Terms of Service</button>
                </Link>
              </li>
            </ul>
            <div className="pt-4">
              <h4 className="font-bold text-white mb-4">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Vilas8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-800 hover:bg-cyan-500/20 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-800 hover:bg-purple-500/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-purple-400" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-800 hover:bg-cyan-500/20 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 text-cyan-400" />
                </a>
                <Link href="/contact">
                  <div className="p-2 rounded-full bg-slate-800 hover:bg-purple-500/20 transition-colors cursor-pointer" aria-label="Email">
                    <Mail className="w-4 h-4 text-purple-400" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} Pioneers. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy">
              <button className="hover:text-cyan-400 transition-colors">Privacy</button>
            </Link>
            <Link href="/terms-of-service">
              <button className="hover:text-cyan-400 transition-colors">Terms</button>
            </Link>
            <Link href="/contact">
              <button className="hover:text-cyan-400 transition-colors">Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}