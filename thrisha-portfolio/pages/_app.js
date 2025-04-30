import '../styles/globals.css'
import Link from 'next/link'
import {
  User, Settings, Code2, GraduationCap, Mail, Github, Linkedin, FileText
} from 'lucide-react'

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-6 hidden md:flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-8 text-green-400 whitespace-nowrap">
              Thrisha Gowda B L
            </h2>

            {/* Resume Link Above About Link */}
            <div className="space-y-3 text-sm mb-6">
              <ExternalLink
                href="https://drive.google.com/file/d/17bJA-uuKBrdtHt0NIRKAZcX-NZ3d_Q0p/view?usp=drivesdk"
                icon={<FileText size={18} />}
                label="Resume"
              />
            </div>

            <nav className="space-y-5 text-sm">
              <NavLink href="/about" icon={<User size={18} />} label="About" />
              <NavLink href="/skills" icon={<Settings size={18} />} label="Skills" />
              <NavLink href="/projects" icon={<Code2 size={18} />} label="Projects" />
              <NavLink href="/education" icon={<GraduationCap size={18} />} label="Education" />
              <NavLink href="/contact" icon={<Mail size={18} />} label="Contact" />
            </nav>
          </div>

          <div className="space-y-3 text-sm">
            <ExternalLink
              href="https://github.com/Thrishagowdabl"
              icon={<Github size={18} />}
              label="GitHub" />
            <ExternalLink
              href="https://linkedin.com/in/thrisha-gowda-b-l-852217267"
              icon={<Linkedin size={18} />}
              label="LinkedIn" />
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 bg-gray-900 text-white px-4 py-8 md:px-8">
          <Component {...pageProps} />
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-center text-sm text-gray-400 py-4 mt-auto">
        <p>&copy; {new Date().getFullYear()} Thrisha Gowda B L. All rights reserved.</p>
      </footer>
    </>
  )
}

function NavLink({ href, icon, label }) {
  return (
    <Link href={href} className="flex items-center hover:text-green-400 transition-colors">
      <span className="mr-2">{icon}</span>
      {label}
    </Link>
  )
}

function ExternalLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-gray-300 hover:text-green-400 transition-colors"
    >
      <span className="mr-2">{icon}</span>
      {label}
    </a>
  )
}
