import { motion } from 'motion/react';
import { ArrowRight, Armchair, Wifi, Coffee, DoorClosed, Star, Quote, Check, Globe, Instagram, AtSign, Dumbbell, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Lounge() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* 1. Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfj1TtNYazycmANK20O4iI4yF5WUD3zM20AjmgYNp-RAIzSy8YhKc09jVCLnmBhQqudjycKQrZnt_O6U2ux9DyPLwPt2-pQGUlBenXBw3Cw3ygfaLs-zp4aKgvUz975_Lmibxhw3RYcptHxGPRWyWt0jA3VZIDlRuWJTbVNZ7Cxae8gpncEcB-KNJvSpXsn5AaI1yzDjktBMwzdepwB8Qr5f-Tvdok4jrYxgoXbZPngU1UMFT_cPinWk5-bhrAPzxgseYk3s6yfR0" 
            alt="Lounge Background" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#D32F2F] text-white text-[10px] font-bold px-3 py-1 rounded mb-6 uppercase tracking-widest flex items-center gap-1"
          >
            <Star size={10} fill="currentColor" /> Acceso Premium
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter mb-6 leading-[0.9]"
          >
            Star Zone:<br />
            Recuperación y<br />
            Coworking
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-300 text-lg md:text-xl max-w-2xl mb-10 font-light"
          >
            Tu segundo hogar. El lugar perfecto para conectar con la comunidad o trabajar después de entrenar.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="bg-[#D32F2F] hover:bg-[#b71c1c] text-white px-8 py-3 rounded font-bold text-sm uppercase tracking-wider flex items-center gap-2 transition-colors">
              Únete a la Comunidad <ArrowRight size={16} />
            </button>
            <button className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded font-bold text-sm uppercase tracking-wider transition-colors">
              Reservar Visita
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Trabaja. Recupérate. Repite. Section */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-2 leading-none">
              Trabaja. Recupérate.<br />
              <span className="text-[#D32F2F]">Repite.</span>
            </h2>
            <div className="w-20 h-1 bg-[#D32F2F] mb-8 mt-4"></div>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-12">
              La Star Zone no es solo una sala de espera: es un espacio de trabajo de alto rendimiento diseñado para el atleta profesional moderno. Equipado con internet de fibra óptica, cápsulas con cancelación de ruido y mobiliario de recuperación ergonómico, cierra la brecha entre tu esfuerzo en el gimnasio y tu trabajo en la oficina.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">1GB</h4>
                <p className="text-xs text-slate-500 uppercase tracking-widest">Fibra de 1GB</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">24/7</h4>
                <p className="text-xs text-slate-500 uppercase tracking-widest">Acceso 24/7</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">50+</h4>
                <p className="text-xs text-slate-500 uppercase tracking-widest">Puestos de Trabajo</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden h-[500px]">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB79NIBf2PxBJQStG1FtAefWi6Fxwc0_Ncc_GcfIte2jxyzxYLLCaksdf7XChlh_o1tfxwXZJIrASw9rNeUK7Cj5-rSAfPCaORayLs1r-0NMNox7CIgxW4dlMobIlUjTXoMdvL8uWg8YR8J-uoe12DP7mexHYW-HqTCqOB2mHFKOr9x8pJGJ2lgkrvmDWzW9aMWM63GKcgTvYwwH7y8ebSEVYqklT6eDpaSYG325pN05WTaCdbG3Jzk7wvS3J6JriKyAPyqlMZ6Pyo" 
              alt="Coworking Space" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* 3. Amenidades Premium Section */}
      <section className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase mb-2">Amenidades Premium</h2>
              <p className="text-slate-400">Todo lo que necesitas para recuperarte, conectar y mantener la productividad.</p>
            </div>
            <a href="#" className="text-[#D32F2F] font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:underline">
              Ver Todas las Amenidades <ArrowRight size={16} />
            </a>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-auto lg:h-[600px]">
            {/* Large Card (Left) */}
            <div className="lg:col-span-2 lg:row-span-2 relative group rounded-2xl overflow-hidden bg-[#1a1a1a]">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5RpoP8RLehPoi1uRCypsHjpb-JFByAt0KeP4HKxRqEsakvzNpLcTHnDC000ui_EwMuf_UgS7IliFJv0ZoJZKsZCDKk3S2UeBDmBVjZwVh7oIYEgZNLqC9YwI16yB786isTuALV8xw0ifz5ULcMLXGtZFMm10gHrhvYdxKowNEs799t1je7jq9YeXFOXkVPMi_oC-Hg9fChZnG9XcuVHsi5FfqKn9uMBG1GJR212M70O9e1N7oXdBt5ZaK-EMqoRuR75a8PbiAc_c" 
                alt="Leather Sofa" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="bg-[#D32F2F] w-10 h-10 rounded flex items-center justify-center mb-4 text-white">
                  <Armchair size={20} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Recuperación Primero el Confort</h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-md">
                  Relájate en sofás de cuero premium diseñados específicamente para el soporte ergonómico post-entrenamiento.
                </p>
              </div>
            </div>

            {/* Small Card 1 (Top Right) */}
            <div className="lg:col-span-1 lg:row-span-1 relative group rounded-2xl overflow-hidden bg-[#1a1a1a] min-h-[280px]">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPkNBC97WPRX8hvW4cW2ZA0hJ8DU_rtfN69MgfImtAQ6cARcf6Q0EBIpeBriXvukNdigF0-ipu_c4G-ZfKKUCK0IiTArputTMf8ZDje8BelZFVzimn-cyqEtB698R3v1tbvf5dZSBmapbcJT0whc0z8PTY8V-upHwYVlzm5vaMwbP3t5xP3f4SNVVT08i0Ju1qXfdE1fUXLmCD6CpblS4DCU1VT7qV4vg8-mBvDzs26AkZrd7jckDpQKqqElKycPWQKdwmNwL9ljk" 
                alt="Laptop Coffee" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="text-[#D32F2F] mb-3">
                  <Wifi size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Wi-Fi de un Gigabit</h3>
                <p className="text-slate-400 text-xs">Internet ultrarrápido para videollamadas sin interrupciones.</p>
              </div>
            </div>

            {/* Small Card 2 (Top Right) */}
            <div className="lg:col-span-1 lg:row-span-1 relative group rounded-2xl overflow-hidden bg-[#1a1a1a] min-h-[280px]">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1_ge55JRQQvNhLOBx10_leLuAdruzpngD8sgJ1M_2w6tTHSG2tlOyO3HMr4Jybe4H8DZKsY03uqspjgFyhEI8P-B_lkndn0O-CD685QwWEOZkRJl4ZDj5MlHhhuN5UPUsUFPfFDcRYGLBqpnDZrijc00tMA0MdcDJv7nFcJGRAch4uu48_AUJg0bA0A0EC-PWfBYva2yLM8qt7dUNs1uw838LwwnPnfPQnTRid1ezdZznFucJ8ce55DXAevZOy6CNa5r0hkqRLz8" 
                alt="Espresso" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="text-[#D32F2F] mb-3">
                  <Coffee size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Bar de Espresso</h3>
                <p className="text-slate-400 text-xs">Café artesanal y batidos de proteínas de cortesía.</p>
              </div>
            </div>

            {/* Wide Card (Bottom Right) */}
            <div className="lg:col-span-2 lg:row-span-1 relative group rounded-2xl overflow-hidden bg-[#1a1a1a] min-h-[280px]">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrNA2dM5pm8B2em7zZU0U3ZsecDuUnT3jKawUQW3XSBVqxnxG1lTHURB8s5VtDkG2vAsWy-Uge9AfdaQ6tuMpQPMuvsJm0bBBiW1sQObJzmz0DpDS2dBUmnUgxAx0O6Hu2ZSzUIFiMYIppvLkV4drbd68L2jB3aDkoZRA1CljrsSht_M-yfbd4C1JjFMTRV7TMrTBBDlsAwmcY9qwQWo1tTMOzAz_1cHHisSUHOGjh9QRuvZZL462UUXFltj8CO_E8i7ZjTsyGwxA" 
                alt="Private Booth" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="text-[#D32F2F] mb-3">
                  <DoorClosed size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Cápsulas de Enfoque</h3>
                <p className="text-slate-400 text-sm max-w-md">Cabinas insonorizadas para trabajo profundo o llamadas privadas sin salir del gimnasio.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Community / Testimonials Section */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[#D32F2F] text-xs font-bold uppercase tracking-widest mb-2 block">Comunidad</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Lo que dicen nuestros miembros</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-[#111] p-8 rounded-2xl border border-white/5 relative">
              <Quote className="absolute top-8 right-8 text-[#D32F2F]/20" size={40} />
              <div className="flex items-center gap-4 mb-6">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Alex R." className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="text-white font-bold">Alex R.</h4>
                  <p className="text-[#D32F2F] text-xs uppercase font-bold">Ingeniero de Software</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4 text-[#D32F2F]">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                "El lounge cambia las reglas del juego. Puedo terminar mi entrenamiento y saltar directamente a una reunión sin salir del edificio. El WiFi es sólido."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#111] p-8 rounded-2xl border border-white/5 relative">
              <Quote className="absolute top-8 right-8 text-[#D32F2F]/20" size={40} />
              <div className="flex items-center gap-4 mb-6">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah M." className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="text-white font-bold">Sarah M.</h4>
                  <p className="text-[#D32F2F] text-xs uppercase font-bold">Diseñadora Freelance</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4 text-[#D32F2F]">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                "Me encanta el ambiente aquí. No es solo un gimnasio, es mi tercer lugar. ¡El café es increíble también! Ya he conocido a dos clientes aquí."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#111] p-8 rounded-2xl border border-white/5 relative">
              <Quote className="absolute top-8 right-8 text-[#D32F2F]/20" size={40} />
              <div className="flex items-center gap-4 mb-6">
                <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="Javier L." className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="text-white font-bold">Javier L.</h4>
                  <p className="text-[#D32F2F] text-xs uppercase font-bold">Emprendedor</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4 text-[#D32F2F]">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                "El equilibrio perfecto entre lo industrial y la comodidad real. Aprecio que es más tranquilo que los espacios de coworking típicos."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo5QlqvLae9QZQA3Ryz2hM3O0JHw3u8t9gHrqkYo-eqkyJn-1YZD7rQwfBLXA9W6BVwFpRHzI3DjU1kxnSvpccTppYT5PFqJr-j8J-wHz7o0KnOt-buGuL4hJgkvsGh0-xoBYIGPAsBmrNI4TJSX00Zi2RmjD_WWfx0Vj9QwInnQZMsJLSF2Y--n85oE_rXQI1QpMJOVWQJasIRNq7sncVB3jZNg8oiyYWazLwvahJBwtt9ODO5FyjbFg7s7fAtx8z-sbEHFHLF3w" 
            alt="Gym Background" 
            className="w-full h-full object-cover opacity-200 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto bg-[#1a1a1a] border border-white/10 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">¿Listo para Elevar tu Rutina?</h2>
          <p className="text-slate-400 mb-10 max-w-lg mx-auto">
            Únete a CodeGym hoy y obtén acceso ilimitado al Lounge Star Zone con cualquier Membresía Premium.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-[#D32F2F] hover:bg-[#b71c1c] text-white px-8 py-4 rounded font-bold uppercase tracking-wider transition-colors">
              Únete Ahora
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-white/20 hover:border-white text-white px-8 py-4 rounded font-bold uppercase tracking-wider transition-colors">
              Explorar Membresías
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
