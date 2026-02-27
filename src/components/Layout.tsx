import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, ReactNode, useRef } from 'react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { Dumbbell, Menu, X, MapPin, Phone, Mail, Globe, AtSign, Instagram, MessageCircle } from 'lucide-react';

export default function Layout({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const prevPathname = useRef(location.pathname);
   const WHATSAPP_NUMBER = "955161572"; // Podrías mover esto a un config
  const message = encodeURIComponent("Hola, me gustaría recibir información sobre los servicios especializados.");

  useEffect(() => {
    if (location.pathname !== prevPathname.current) {
      // Cambio de página: ir directo arriba sin scroll suave
      window.scrollTo(0, 0);
    } else {
      // Misma página: scroll suave hacia arriba
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    prevPathname.current = location.pathname;
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background-dark text-white font-display selection:bg-primary selection:text-white">
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled ? "bg-background-dark/90 backdrop-blur-md border-white/10 py-3" : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="text-primary group-hover:text-white transition-colors duration-300">
              <Dumbbell size={32} />
            </div>
            <h2 className="text-white text-2xl font-bold tracking-tight uppercase">CodeGym</h2>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <NavLink to="/arsenal">Entrenamiento</NavLink>
            <NavLink to="/protein-bar">Bar de Proteínas</NavLink>
            <NavLink to="/lounge">Lounge</NavLink>
            <NavLink to="/team">Nosotros</NavLink>
            <NavLink to="/faq">Ayuda</NavLink>
          </div>

          <div className="hidden lg:block">
            <Link 
              to="/team#join-form"
              className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(128,0,32,0.4)] hover:shadow-[0_0_30px_rgba(128,0,32,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 uppercase inline-block"
            >
              Unirse Ahora
            </Link>
          </div>

          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background-dark pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6 text-xl">
              <NavLink to="/arsenal">Entrenamiento</NavLink>
              <NavLink to="/protein-bar">Bar de Proteínas</NavLink>
              <NavLink to="/lounge">Lounge</NavLink>
              <NavLink to="/team">Nosotros</NavLink>
              <NavLink to="/faq">Ayuda</NavLink>
              <Link 
                to="/team#join-form"
                className="bg-primary text-white px-6 py-4 rounded font-bold tracking-wide uppercase mt-4 text-center"
              >
                Unirse Ahora
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {children}
      </main>

      {/* Floating WhatsApp Button */}
      
     
      
      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
        
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 transform hover:scale-110 active:scale-95 group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={28} className="group-hover:animate-pulse" />
        <span className="absolute right-full mr-4 bg-white text-background-dark px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          ¿Necesitas ayuda?
        </span>
      </a>

      <Footer />
    </div>
  );
}

function NavLink({ to, children }: { to: string; children: ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={cn(
        "text-sm font-medium uppercase tracking-wide transition-colors",
        isActive ? "text-primary" : "text-slate-300 hover:text-primary"
      )}
    >
      {children}
    </Link>
  );
}

function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Dumbbell className="text-primary" size={24} />
              <span className="text-white text-xl font-bold uppercase">CodeGym</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Redefiniendo el estándar del fitness y la recuperación. Un santuario industrial para el atleta moderno.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Globe size={20} />} />
              <SocialIcon icon={<AtSign size={20} />} />
              <SocialIcon icon={<Instagram size={20} />} />
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">Explorar</h4>
            <ul className="flex flex-col gap-3 text-slate-400 text-sm">
              <li><Link to="/arsenal" className="hover:text-primary transition-colors">Clases de Entrenamiento</Link></li>
              <li><Link to="/protein-bar" className="hover:text-primary transition-colors">El Bar de Proteínas</Link></li>
              <li><Link to="/lounge" className="hover:text-primary transition-colors">Lounge de Recuperación</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Membresía</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">Contacto</h4>
            <ul className="flex flex-col gap-3 text-slate-400 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="text-primary mt-0.5" size={16} />
                <span>Parque Bosque Huanca,<br />El Agustino</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="text-primary" size={16} />
                <span> (01) 987 5475</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="text-primary" size={16} />
                <span>consultas@codegym.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">© 2024 CodeGym. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Política de Privacidad</a>
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: ReactNode }) {
  return (
    <a href="#" className="text-slate-400 hover:text-primary transition-colors">
      {icon}
    </a>
  );
}
