import { motion } from 'motion/react';

export default function Team() {
  const coaches = [
    {
      name: "Alex 'The Architect' Rivera",
      role: "Head Coach / Biomecánica",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbKkRZF1Y0g1brtQf50qpowyuTP1ZaRqOUNOLitcxWMccBBbW-obtlF8-sFA2d-G9f5KCXdKNb9419JqHFKjn9XeReRX2I1xkbFgZTXvom0oFZrnrQxwxcnQpbGvxqRZUE-WOfzkaFFe7XcV46T4at-zSv8MXZ_6nRzKSUEED756n63WZ8bkgVjZJUy-5MvBFmVfXd32MmuSu0erKKA6AYZCXiA_iqbvwksHzhnSvFIhWyUYL65aSOGBwsNEJuuGwdTSejO5bLKv8",
      specialty: "Hipertrofia Funcional"
    },
    {
      name: "Sarah 'Iron' Connor",
      role: "Senior Coach / Powerlifting",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqFOJ9IUEnblmVyE94Gp6LdlRMUbClMcNudCPbYCc3vYSHPeSWJgJvxvgOiLr6aPj2XqgMnk99WUqNlNTScrdQ2WM5kt1PB-ouQ54P6qG1a2H8R9gKoy6L9Y34ZIBHUxnpgUBEg_ISnfKZKJdJUpuzCtS9187gPaEvGTxhSvv3fHeXDlMMYMgjkhZWF7py-t7hcy8U8hh40BbeL3EPabG7XMt44eKT5UyggOPSx05VCgN3FIjal5P9aqPJtKUTGxsRU21AGedPaLw",
      specialty: "Fuerza Máxima"
    },
    {
      name: "Marcus 'Zen' Chen",
      role: "Recovery Specialist / Mobility",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVKRGynQdxh_o5bp14oq8U6VXKimnjWhiRW63p-6ZH-R0iHQ_avfitNBlHewd1d69K7D-4d_xi2GoCbaGvJRUwvaE690wOn_vM0s8hgKbXjiE94BgxFs9DdDRTmphBjZ7tTHNd5BFjLDYMIU6L5XyfU7BBQ_-ItdyNuAEiTXEbIaNrJaQ3lfKcF-26IA-m7s-oGKGGA-zALq4eIAON2bxY1sKSoskTr6dapiIH_yB__jOGuFfikX-OtVBw1hg-jga4gXtOrnubrj4",
      specialty: "Prevención de Lesiones"
    },
    {
      name: "Elena 'Valkyrie' Petrov",
      role: "Performance Coach / Conditioning",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPTSK60FFq2EiHB6pRm-51GPb6w36GEMQtqZ2B9-v0cMdiQ5graM_vR9moXa8tjiQ1o25vSPtKbdMvTgASgMz0i8tgWsP9W82_lMm90yzUoj1A6G3RSojrSVStZa8uKXfPBC5OF-3DoZbLzrS8K57745oIJx1XoAgZcHWzmDXPJFlnGFRA5b0BZ157hU9iKFU3-Yw6vgpnqcDpDnHY8l-lMyJyWaInNSLYbpFF7L_bC8bq6ctT4PCzweEKS78sy6ELkFF12jir1II",
      specialty: "Metabolic Conditioning"
    }
  ];

  return (
    <div className="pt-20">
      {/* Manifesto Section */}
      <section className="py-24 px-6 bg-background-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-white uppercase leading-[0.9] mb-8"
            >
              El Hombre<br />
              <span className="text-slate-600">se encuentra con</span><br />
              <span className="text-primary">La Máquina</span>
            </motion.h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 border-l-2 border-primary pl-6">
              En CodeGym, no solo entrenamos cuerpos; forjamos mentalidades. Creemos en la simbiosis perfecta entre la biología humana y la ingeniería mecánica. Nuestro equipo no son solo entrenadores; son arquitectos del rendimiento humano.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">50+</span>
                <span className="text-xs uppercase tracking-widest text-slate-500">Años de Exp. Combinada</span>
              </div>
              <div className="w-px bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">12</span>
                <span className="text-xs uppercase tracking-widest text-slate-500">Especialidades</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPZgLAXP33B8Pm2PBrbrGetoI0IoBglYZIoxnC6Ox6P8SoXyVb3vn5zEATB_oYU-I0L2EiRyUSn3BsYtFnJg2hFs4zpWxsV_X2rWYYPDwqkKDQF9Sp_jipfZMjPz_vQkdnIPgQLFKaOqyM93qopW3ToGW8H4vhRozGQL7rWCaNMlZRlvRkwiuyf9GkZ3K1ok__8ob6UMCbib9iQXM7vmVuUEXetsbVciTGYnJpW0q9cjXEPm_zi6UrCKIYisStLb5vGGssgSKRoJc" 
                alt="CodeGym Philosophy" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-dark p-6 border border-white/10 rounded-xl shadow-xl max-w-xs hidden md:block">
              <p className="text-primary text-sm font-bold uppercase mb-2">Manifiesto #1</p>
              <p className="text-white text-sm italic">"La excelencia no es un acto, es un hábito forjado en hierro."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-6 bg-surface-dark border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-2">El Equipo</h2>
              <h3 className="text-4xl font-bold text-white uppercase">Arquitectos del Rendimiento</h3>
            </div>
            <button className="hidden md:flex items-center gap-2 text-white hover:text-primary transition-colors uppercase text-sm font-bold tracking-wider">
              Ver Todos 
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coaches.map((coach, index) => (
              <div key={index} className="group relative">
                <div className="aspect-[3/4] overflow-hidden rounded-xl mb-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  <img 
                    src={coach.image} 
                    alt={coach.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <p className="text-white font-bold text-lg uppercase leading-none mb-1">{coach.name}</p>
                    <p className="text-primary text-xs uppercase tracking-wider">{coach.role}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center border-t border-white/10 pt-4">
                  <span className="text-slate-400 text-xs uppercase tracking-wider">{coach.specialty}</span>
                  <button className="text-white hover:text-primary transition-colors">
                   
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="join-form" className="py-24 px-6 bg-background-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-white uppercase mb-8">Inicia tu Transformación</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-500">Nombre</label>
                  <input type="text" className="w-full bg-surface-dark border border-white/10 rounded p-3 text-white focus:border-primary outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-500">Apellido</label>
                  <input type="text" className="w-full bg-surface-dark border border-white/10 rounded p-3 text-white focus:border-primary outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500">Email</label>
                <input type="email" className="w-full bg-surface-dark border border-white/10 rounded p-3 text-white focus:border-primary outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500">Objetivo Principal</label>
                <select className="w-full bg-surface-dark border border-white/10 rounded p-3 text-white focus:border-primary outline-none transition-colors appearance-none">
                  <option>Hipertrofia</option>
                  <option>Fuerza</option>
                  <option>Pérdida de Grasa</option>
                  <option>Rendimiento Deportivo</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500">Mensaje</label>
                <textarea rows={4} className="w-full bg-surface-dark border border-white/10 rounded p-3 text-white focus:border-primary outline-none transition-colors"></textarea>
              </div>
              <button className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded font-bold uppercase tracking-wide w-full transition-colors shadow-[0_0_20px_rgba(128,0,32,0.4)]">
                Enviar Solicitud
              </button>
            </form>
          </div>
          
          <div className="h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10 relative">
        
            <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.1356996900927!2d-77.0018159851974!3d-12.03417754379239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5e4a9088eed%3A0xf5b0d96de97222b!2sAv.%20Bosque%20Huanca%2C%20El%20Agustino!5e0!3m2!1ses-419!2spe!4v1772155913193!5m2!1ses-419!2spe"
    title="Map Location"
    className="w-full h-full border-0 opacity-60 hover:opacity-80 transition-opacity"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
             <div className="absolute bottom-8 left-8 bg-background-dark/90 p-6 rounded-xl backdrop-blur-md border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary">GIMNASIO</span>
                <span className="text-white font-bold uppercase">CodeGym</span>
              </div>
              <p className="text-slate-400 text-sm">Parque Bosque Huanca,
El Agustino</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
