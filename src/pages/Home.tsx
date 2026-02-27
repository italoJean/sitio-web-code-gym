import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Armchair, Flame, ChevronDown, Dumbbell, Thermometer, GlassWater, BicepsFlexed, Trophy, Activity, Scale } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-transparent to-transparent z-10"></div>
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDVSCiOvPquNcSVDIX7S1Oi7l8xoGdy-vKnsbaYbkagt-e2PRYUQVBVO4NNtHVwqgp6u1bNkiy5sfSX_R-17mENc68RTlwT1oKmfsIDBV6lumCA-u4gncW7vyAaMeBADxZFfUdoGO2kas1yK5I0plpMYtSkIYGg_4PyKXBe7yYm2jnnHQmkXs0QMiif_FNf_MqFGrMJpjyz1SW0V6AWcTTVdT15jEnozetUDmIMhrLhebvS9uJ1aLLCBQRDubLMdqoBAfaAsP9K8Og')" }}
          ></div>
        </div>

        <div className="relative z-20 max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-10">
          <div className="lg:col-span-8 flex flex-col justify-center gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-primary uppercase font-bold tracking-[0.2em] text-sm"
            >
              <span className="w-8 h-[2px] bg-primary"></span>
              Fitness Premium & Recuperación
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-white uppercase"
            >
              Entrena con <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Intensidad</span>.<br />
              Recupera con <span className="text-primary italic">Estilo</span>.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-300 text-lg md:text-xl max-w-2xl font-light leading-relaxed border-l-2 border-primary pl-6 py-2"
            >
              Donde la ingeniería de alto rendimiento se encuentra con la recuperación de lujo. Experimenta la dualidad de la potencia bruta y el confort refinado.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 mt-6"
            >
              <Link to="/arsenal" className="bg-primary hover:bg-primary-hover text-white min-w-[160px] h-14 px-8 rounded font-bold text-base tracking-wide shadow-[0_0_20px_rgba(128,0,32,0.4)] hover:shadow-[0_0_30px_rgba(128,0,32,0.6)] transition-all duration-300 flex items-center justify-center gap-2 group uppercase">
                <span>Explorar Clases</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link to="/lounge" className="bg-transparent border border-white/20 hover:border-primary text-white hover:text-primary min-w-[160px] h-14 px-8 rounded font-bold text-base tracking-wide backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 uppercase">
                <span>Conocer el Lounge</span>
                <Armchair size={20} />
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex lg:col-span-4 items-center justify-center"
          >
            <div className="relative w-full aspect-[3/4] max-w-sm rounded-xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCu3oy-fDP8HHqQ-YKPXRAuoWdDytBsZGW_TUB-rLy_kLG294afAikLIIROAgc7i7VRye1r1jb6rhD2XN2rYuJGGrPrjUHwIQjARXf8hSqiCSEkyuH51JUwDmBr35BYweS_2_T-fXwzROui-RQT0_wU6hNixRzi18dPG2RgJDDd8WMM_YH2z6ikhNihWYmcHfzg4HPrHiqwythEF-33AGv5JbWn47ecxQBG2bhVEOUPAGqHjB6J67p3BShtmVSShTHhhZtIt_Za5F4')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <Flame size={14} />
                  <span className="text-xs font-bold uppercase tracking-widest">Capacidad en Vivo</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Lounge de Recuperación</h3>
                <p className="text-slate-400 text-sm mb-4">Aforo Actual: Bajo</p>
                <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-1/3"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-60"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white">Bajar</span>
          <ChevronDown className="text-white" size={20} />
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-background-dark relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-white/10 pb-8">
            <div>
              <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-2">La Filosofía</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">El Método CodeGym</h3>
            </div>
            <p className="text-slate-400 max-w-md text-base leading-relaxed text-right md:text-left">
              Experimenta el equilibrio perfecto entre esfuerzo y restauración. Nuestras instalaciones están diseñadas para optimizar cada etapa de tu jornada de entrenamiento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              title="El Rack"
              description="Equipamiento de fuerza industrial forjado para máximas ganancias. Pesas calibradas con precisión para el atleta serio."
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuDPWmd-NxRfyc2gLq5yjyZtMJ4hbfZUobnC7sYBbkAaFmGQpoVT4ED1eANEAWXypQyXmeTmjeIQOHEWNm7dMY4xZOOxX2KwTXKmPnnRQXfiEpi6OoqN4YAs30nWC5ubFNY7LsMk_KEk636apiE0_ea1yrNv5m0P8mEYjF5zfiucvt5aGyz0ZT1T6aqitP1sFEELZW9LVTv7-aRmCZnZNCR9gc2RcW40xZqVAPnHS8zQix-wwSSoYm15qR7lL2t87-fHuzQnqiObV3g"
              icon={<Dumbbell size={24} />}
              link="/arsenal"
              linkText="Ver Equipo"
            />
            <FeatureCard 
              title="La Sauna"
              description="Zonas de recuperación infrarroja diseñadas para sanar y recargar. Relajación de tejido profundo en un ambiente de cedro premium."
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuBkQz12uum5amn2lWNkPyMdH6KBIc6SzdMWmBnqGGYfOU7XqW5Dxi_oXRUANSLtLf0IwT9undVzetEMZQzvqR0LAgkCcXT9yUAlebwjODBb56wbp4eIcaRB_CZALLR1xzXGd4btYyQ_PhNWDOh-VbvuH8DxHhrxwVEGCCpNCKwXuDbRPDkcfsLK0ntFCQbFGuyMUI2IbKxdEY7SXutUmY45q_kPD54kVvDfiFsAZiWi2-jAoOoBMTcOHuuRATm4Cqv8p-dwIhPnN8g"
              icon={<Thermometer size={24} />}
              link="/lounge"
              linkText="Ver Recuperación"
            />
            <FeatureCard 
              title="El Bar de Batidos"
              description="Combustible orgánico premium para tu ventana post-entrenamiento. Mezclas personalizadas creadas por expertos en nutrición."
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuDDn68Bz2mrUBJaUyZReaMKJl2iP3sqzglVkmo0P57PvBmZUavT0PmLVDrs_USvwtjmVdHKWoeMVY-rsrjgbVLMq0fxTbax451hL322E6m3fQ1M8CubgABrZBBmEN4LOEnEXcVux3KBSG78p9M7Nx0vlQggGLranAWbFNNU8ag0NH2C4mEUUJrtyW4R3WjIRCXu0Mlm2hiLZUegubu4uKdZK6Nu5jZKudDGR8Gfwoq40aCLfG6GHtwMzq0p6tU-7htm86xFZSMIMIw"
              icon={<GlassWater size={24} />}
              link="/protein-bar"
              linkText="Ver Menú"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-2">Nuestros Pilares</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-6">Servicios Especializados</h3>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
              Cuatro disciplinas fundamentales diseñadas para esculpir el atleta completo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              title="Hipertrofia"
              description="Maximiza el crecimiento muscular mediante protocolos basados en tensión mecánica y estrés metabólico. Diseñado para estética y volumen."
              icon={<BicepsFlexed size={32} />}
              color="text-blue-500"
              borderColor="group-hover:border-blue-500/50"
              bgGradient="from-blue-500/10"
            />
            <ServiceCard 
              title="Fuerza"
              description="Incrementa tu capacidad de generar fuerza bruta. Enfoque en levantamientos compuestos y sobrecarga progresiva para potencia real."
              icon={<Dumbbell size={32} />}
              color="text-red-500"
              borderColor="group-hover:border-red-500/50"
              bgGradient="from-red-500/10"
            />
            <ServiceCard 
              title="Pérdida de Grasa"
              description="Optimización metabólica para reducir porcentaje graso manteniendo masa magra. Entrenamientos de alta intensidad y control calórico."
              icon={<Flame size={32} />}
              color="text-orange-500"
              borderColor="group-hover:border-orange-500/50"
              bgGradient="from-orange-500/10"
            />
            <ServiceCard 
              title="Rendimiento"
              description="Mejora atlética integral: velocidad, agilidad y resistencia. Transferencia directa a tu disciplina deportiva específica."
              icon={<Trophy size={32} />}
              color="text-emerald-500"
              borderColor="group-hover:border-emerald-500/50"
              bgGradient="from-emerald-500/10"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
            <StatItem value="24/7" label="Acceso" />
            <StatItem value="15+" label="Coaches Expertos" />
            <StatItem value="3" label="Estudios" />
            <StatItem value="100%" label="Dedicación" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-background-dark relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight mb-6">¿Listo para Subir de Nivel?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Únete a la comunidad de élite de quienes marcan la diferencia. Tu viaje hacia el máximo rendimiento comienza con una sola decisión.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="w-full md:w-auto bg-white text-background-dark hover:bg-slate-200 px-8 py-4 rounded font-bold text-lg uppercase tracking-wide transition-colors">
              Ver Servicios
            </button>
            <button className="w-full md:w-auto border border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded font-bold text-lg uppercase tracking-wide transition-colors shadow-[0_0_20px_rgba(128,0,32,0.4)]">
              Reservar un Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ title, description, image, icon, link, linkText }: any) {
  return (
    <div className="group relative bg-surface-dark rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-colors duration-300">
      <div className="aspect-video w-full overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
          style={{ backgroundImage: `url('${image}')` }}
        ></div>
      </div>
      <div className="p-6 relative">
        <div className="absolute -top-6 right-6 bg-primary text-white p-3 rounded-lg shadow-lg">
          {icon}
        </div>
        <h4 className="text-xl font-bold text-white mb-2 uppercase">{title}</h4>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
        <Link to={link} className="inline-flex items-center gap-2 text-primary text-sm font-bold mt-4 uppercase tracking-wider group-hover:text-white transition-colors">
          {linkText} <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}

function StatItem({ value, label }: any) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-4xl md:text-5xl font-bold text-white">{value}</span>
      <span className="text-xs uppercase tracking-widest text-white/80">{label}</span>
    </div>
  );
}

function ServiceCard({ title, description, icon, color, borderColor, bgGradient }: any) {
  return (
    <div className={`group relative bg-surface-dark p-8 rounded-2xl border border-white/5 ${borderColor} transition-all duration-300 hover:-translate-y-2`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 ${color} group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <h4 className="text-xl font-bold text-white uppercase mb-3 tracking-wide">{title}</h4>
        <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
          {description}
        </p>
      </div>
    </div>
  );
}
