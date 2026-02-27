import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X, BicepsFlexed, Dumbbell, Flame, Trophy, ArrowRight } from 'lucide-react';

type Spec = {
  label: string;
  value: string;
};

type CategorySpecs = {
  title: string;
  specs: Spec[];
};

const CATEGORY_SPECS: Record<string, CategorySpecs> = {
  '01': {
    title: 'Peso Libre & Plataformas',
    specs: [
      { label: 'Marcas Principales', value: 'Eleiko, Hammer Strength, Rogue' },
      { label: 'Certificación', value: 'IWF & IPF Approved' },
      { label: 'Material Discos', value: 'Caucho virgen de alta densidad & Acero calibrado' },
      { label: 'Plataformas', value: 'Madera de abedul con amortiguación acústica' },
      { label: 'Barras', value: 'Acero sueco de 215,000 PSI' },
      { label: 'Mancuernas', value: 'Uretano sólido con moleteado de precisión' }
    ]
  },
  '02': {
    title: 'Máquinas de Aislamiento',
    specs: [
      { label: 'Marcas Principales', value: 'Panatta, Prime Fitness, Arsenal Strength' },
      { label: 'Tecnología', value: 'Smart Strength (Perfiles de resistencia variables)' },
      { label: 'Transmisión', value: 'Cables de acero aeronáutico de 7x19' },
      { label: 'Tapicería', value: 'Cuero sintético de grado médico con costura reforzada' },
      { label: 'Ajustes', value: 'Sistemas neumáticos y de rodamiento lineal' },
      { label: 'Pintura', value: 'Recubrimiento en polvo electrostático anti-corrosión' }
    ]
  },
  '03': {
    title: 'Cardio, Spinning & CrossFit',
    specs: [
      { label: 'Marcas Principales', value: 'Concept2, Assault Fitness, Keiser, Rogue' },
      { label: 'Tecnología', value: 'Resistencia magnética silenciosa & Turbinas de aire' },
      { label: 'Monitorización', value: 'Consolas con telemetría y conectividad ANT+/Bluetooth' },
      { label: 'CrossFit Rig', value: 'Estructura modular Rogue Monster Lite' },
      { label: 'Spinning', value: 'Bicicletas Keiser M3i con ajuste micrométrico' },
      { label: 'Remo & Ski', value: 'Concept2 Model D & PM5 Performance Monitors' }
    ]
  }
};

export default function Arsenal() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const closeSpecs = () => setSelectedCategory(null);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSCsxrQkj8nwzSq0Vs1nlFKcQDxbSC_9mswSeoCAO9zllH0-Wcr2nNYhYLRgNDZ_QYf_Y1kfoTL9SXQvjvqhN2wg2_382cRzys0qFmcxWnf5N-tPR-96Q_QqogtHZr5L_EYxa3cC89wN-YT3ohocStWHerTA0CsBhOhWodFH4jAzMnleNR0Rx812Y4r3omfPHvehKwWKy0NYF5ria4hRw-dSeuksfT4iqMCGgXE_AiGCzc7_I82it_duBYGUzLTLu1hDA_s2KRM48" 
            alt="Gym Equipment" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center max-w-4xl px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-bold text-white uppercase tracking-tighter mb-6"
          >
            Fuerza de <span className="text-primary">Ingeniería</span>
          </motion.h1>
          <p className="text-xl text-slate-300 font-light tracking-wide uppercase">
            Equipamiento de precisión para resultados absolutos
          </p>
        </div>
      </section>

      {/* Methodology Grid */}
      <section className="py-24 px-6 bg-background-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="border-l border-primary/50 pl-6">
            <h3 className="text-2xl font-bold text-white uppercase mb-4">Biomecánica</h3>
            <p className="text-slate-400 leading-relaxed">
              Cada máquina en nuestro arsenal ha sido seleccionada por su curva de resistencia óptima. Aislamos el músculo objetivo con precisión quirúrgica.
            </p>
          </div>
          <div className="border-l border-primary/50 pl-6">
            <h3 className="text-2xl font-bold text-white uppercase mb-4">Capacidad Funcional</h3>
            <p className="text-slate-400 leading-relaxed">
              No solo construimos estética; construimos capacidad. Nuestras zonas de peso libre y funcional están diseñadas para transferir fuerza al mundo real.
            </p>
          </div>
          <div className="border-l border-primary/50 pl-6">
            <h3 className="text-2xl font-bold text-white uppercase mb-4">Metodología Híbrida</h3>
            <p className="text-slate-400 leading-relaxed">
              Combinamos lo mejor del powerlifting, bodybuilding y entrenamiento funcional. Sin dogmas, solo lo que funciona.
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-24 px-6 bg-surface-dark">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-2">El Inventario</h2>
            <h3 className="text-4xl font-bold text-white uppercase">Arsenal de Alto Rendimiento</h3>
          </div>

          <div className="space-y-24">
            {/* Category 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl font-bold text-white/10">01</span>
                  <h4 className="text-3xl font-bold text-white uppercase">Peso Libre & Plataformas</h4>
                </div>
                <ul className="space-y-4 mb-8">
                  <ListItem text="5 Plataformas de Levantamiento Olímpico Eleiko" />
                  <ListItem text="Mancuernas calibradas hasta 150lbs" />
                  <ListItem text="Racks de potencia Hammer Strength con monolift" />
                  <ListItem text="Barras especializadas (Safety, Cambered, Swiss)" />
                </ul>
                <button 
                  onClick={() => setSelectedCategory('01')}
                  className="border border-white/20 hover:border-primary text-white hover:text-primary px-6 py-3 rounded uppercase text-sm font-bold tracking-wider transition-colors"
                >
                  Ver Especificaciones
                </button>
              </div>
              <div className="order-1 lg:order-2 h-[400px] rounded-xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0rOyDUMhJqSgkhHG7Bc2mpvjh-WfhjhL84I7wWdECOx3NyQe659aTDCBC4k0flywLfEZu-gBSgdb5l8e8yiMMc_DjsQaNrGLcSVkHc17r63SnxNzt4Zqx6fpTRgMhFFUes_4EPMNlSTUTJjGueDaz4XX4Ep2bXfaE3QV2LD-iJwsSHJAPdYd4YZaHMEbI9tKWxUte449-LuEkJsjgCws37JXTxgGLDfY-ezCjsRhpqr2EWs4wHPx1pTZtroifyTSpzLUhyVBx3iw" 
                  alt="Free Weights" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Category 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="h-[400px] rounded-xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPWmd-NxRfyc2gLq5yjyZtMJ4hbfZUobnC7sYBbkAaFmGQpoVT4ED1eANEAWXypQyXmeTmjeIQOHEWNm7dMY4xZOOxX2KwTXKmPnnRQXfiEpi6OoqN4YAs30nWC5ubFNY7LsMk_KEk636apiE0_ea1yrNv5m0P8mEYjF5zfiucvt5aGyz0ZT1T6aqitP1sFEELZW9LVTv7-aRmCZnZNCR9gc2RcW40xZqVAPnHS8zQix-wwSSoYm15qR7lL2t87-fHuzQnqiObV3g" 
                  alt="Machines" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl font-bold text-white/10">02</span>
                  <h4 className="text-3xl font-bold text-white uppercase">Máquinas de Aislamiento</h4>
                </div>
                <ul className="space-y-4 mb-8">
                  <ListItem text="Línea completa Panatta & Prime Fitness" />
                  <ListItem text="Prensas de pierna con carga variable" />
                  <ListItem text="Máquinas de polea con resistencia constante" />
                  <ListItem text="Belt Squat Pit Shark" />
                </ul>
                <button 
                  onClick={() => setSelectedCategory('02')}
                  className="border border-white/20 hover:border-primary text-white hover:text-primary px-6 py-3 rounded uppercase text-sm font-bold tracking-wider transition-colors"
                >
                  Ver Especificaciones
                </button>
              </div>
            </div>

            {/* Category 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl font-bold text-white/10">03</span>
                  <h4 className="text-3xl font-bold text-white uppercase">Cardio, Spinning & CrossFit</h4>
                </div>
                <ul className="space-y-4 mb-8">
                  <ListItem text="Bicicletas Keiser M3i de alta gama" />
                  <ListItem text="Remos Concept2 y Assault AirBikes" />
                  <ListItem text="Zona CrossFit con Rigs Rogue y Kettlebells" />
                  <ListItem text="Cintas de correr curvas de alto rendimiento" />
                </ul>
                <button 
                  onClick={() => setSelectedCategory('03')}
                  className="border border-white/20 hover:border-primary text-white hover:text-primary px-6 py-3 rounded uppercase text-sm font-bold tracking-wider transition-colors"
                >
                  Ver Especificaciones
                </button>
              </div>
              <div className="order-1 lg:order-2 h-[400px] rounded-xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1920&auto=format&fit=crop" 
                  alt="Cardio & CrossFit" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Programs Section */}
      <section className="py-24 px-6 bg-background-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-2">Metodología Aplicada</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">Programas Especializados</h3>
            <p className="text-slate-400 max-w-2xl mx-auto mt-6 text-lg font-light">
              Cuatro caminos distintos. Un solo estándar de excelencia. Elige tu disciplina y domina el proceso.
            </p>
          </div>

          <div className="space-y-32">
            {/* 1. Hipertrofia */}
            <ProgramSection 
              id="hipertrofia"
              title="Hipertrofia"
              subtitle="Estética & Volumen"
              description="Un enfoque científico para el crecimiento muscular máximo. Utilizamos la manipulación precisa del volumen, la intensidad y la frecuencia para estimular la síntesis de proteínas y la adaptación estructural."
              benefits={[
                "Aumento significativo de la masa muscular magra",
                "Mejora de la composición corporal y simetría",
                "Incremento en la capacidad de almacenamiento de glucógeno",
                "Fortalecimiento del tejido conectivo"
              ]}
              timeline={[
                { step: "01", title: "Acumulación", desc: "Alto volumen, intensidad moderada para fatiga metabólica." },
                { step: "02", title: "Intensificación", desc: "Cargas más pesadas, menor volumen, mayor tensión mecánica." },
                { step: "03", title: "Pico", desc: "Máxima intensidad y técnicas avanzadas (Drop sets, Rest-pause)." },
                { step: "04", title: "Descarga", desc: "Recuperación activa para supercompensación." }
              ]}
              image="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop"
              icon={<BicepsFlexed size={32} />}
              color="text-blue-500"
              align="left"
            />

            {/* 2. Fuerza */}
            <ProgramSection 
              id="fuerza"
              title="Fuerza Absoluta"
              subtitle="Potencia & Dominio"
              description="El arte de mover grandes cargas. Este programa se centra en la eficiencia neuromuscular, enseñando a tu cuerpo a reclutar el máximo número de unidades motoras simultáneamente."
              benefits={[
                "Incremento de la fuerza máxima en levantamientos compuestos",
                "Mejora de la densidad ósea y salud articular",
                "Mayor eficiencia del sistema nervioso central",
                "Base sólida para cualquier otra capacidad física"
              ]}
              timeline={[
                { step: "01", title: "Base", desc: "Construcción de capacidad de trabajo y técnica perfecta." },
                { step: "02", title: "Desarrollo", desc: "Sobrecarga progresiva lineal en rangos de 3-5 reps." },
                { step: "03", title: "Realización", desc: "Trabajo sub-máximo (90%+) y picos de fuerza." },
                { step: "04", title: "Test", desc: "Prueba de 1RM y reevaluación de métricas." }
              ]}
              image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
              icon={<Dumbbell size={32} />}
              color="text-red-500"
              align="right"
            />

            {/* 3. Pérdida de Grasa */}
            <ProgramSection 
              id="fat-loss"
              title="Metabolic Shred"
              subtitle="Definición & Salud"
              description="Más que solo quemar calorías. Optimizamos tu metabolismo basal a través de EPOC (Exceso de Consumo de Oxígeno Post-Ejercicio) y preservación de masa magra."
              benefits={[
                "Reducción acelerada del porcentaje de grasa corporal",
                "Mejora de la sensibilidad a la insulina",
                "Aumento de la resistencia cardiovascular",
                "Preservación del tejido muscular durante el déficit"
              ]}
              timeline={[
                { step: "01", title: "Adaptación", desc: "Circuitos metabólicos y acondicionamiento general." },
                { step: "02", title: "Ignición", desc: "Intervalos de alta intensidad (HIIT) y fuerza metabólica." },
                { step: "03", title: "Fusión", desc: "Combinación de fuerza pesada y sprints metabólicos." },
                { step: "04", title: "Mantenimiento", desc: "Estrategias sostenibles de estilo de vida." }
              ]}
              image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop"
              icon={<Flame size={32} />}
              color="text-orange-500"
              align="left"
            />

            {/* 4. Rendimiento */}
            <ProgramSection 
              id="performance"
              title="Rendimiento Atlético"
              subtitle="Velocidad & Agilidad"
              description="Diseñado para el atleta híbrido. Transferimos la fuerza del gimnasio al campo de juego, enfocándonos en la potencia, la velocidad de reacción y la durabilidad."
              benefits={[
                "Mejora en la producción de potencia y explosividad",
                "Aumento de la agilidad y coordinación multidireccional",
                "Prevención de lesiones mediante fortalecimiento estructural",
                "Optimización de los sistemas energéticos específicos"
              ]}
              timeline={[
                { step: "01", title: "Fundamentos", desc: "Movilidad, estabilidad y patrones de movimiento básicos." },
                { step: "02", title: "Fuerza-Velocidad", desc: "Levantamientos olímpicos y pliometría básica." },
                { step: "03", title: "Velocidad-Fuerza", desc: "Sprints resistidos, balística y pliometría avanzada." },
                { step: "04", title: "Competición", desc: "Tapering y preparación específica para eventos." }
              ]}
              image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
              icon={<Trophy size={32} />}
              color="text-emerald-500"
              align="right"
            />
          </div>
        </div>
      </section>

      {/* Specifications Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeSpecs}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-surface-dark border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="p-8 border-b border-white/5 flex justify-between items-center">
                <div>
                  <h3 className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-1">Especificaciones Técnicas</h3>
                  <h4 className="text-2xl font-bold text-white uppercase">{CATEGORY_SPECS[selectedCategory].title}</h4>
                </div>
                <button 
                  onClick={closeSpecs}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 gap-6">
                  {CATEGORY_SPECS[selectedCategory].specs.map((spec, index) => (
                    <div key={index} className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                      <span className="text-slate-500 text-sm uppercase font-bold tracking-wider">{spec.label}</span>
                      <span className="text-white font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={closeSpecs}
                  className="w-full mt-10 bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-primary/80 transition-colors"
                >
                  Entendido
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-slate-300">
      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
      {text}
    </li>
  );
}

function ProgramSection({ id, title, subtitle, description, benefits, timeline, image, icon, color, align }: any) {
  const isRight = align === 'right';
  
  return (
    <div className={`flex flex-col lg:flex-row gap-12 items-center ${isRight ? 'lg:flex-row-reverse' : ''}`}>
      {/* Content Side */}
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-3 rounded-xl bg-white/5 ${color}`}>
            {icon}
          </div>
          <div>
            <h4 className={`text-sm font-bold uppercase tracking-widest ${color}`}>{subtitle}</h4>
            <h3 className="text-3xl md:text-4xl font-bold text-white uppercase">{title}</h3>
          </div>
        </div>
        
        <p className="text-slate-400 text-lg leading-relaxed mb-8 border-l-2 border-white/10 pl-6">
          {description}
        </p>

        <div className="mb-10">
          <h5 className="text-white font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-1 h-4 bg-white"></span> Beneficios Clave
          </h5>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {benefits.map((benefit: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2 text-slate-400 text-sm">
                <ArrowRight size={16} className={`mt-0.5 shrink-0 ${color}`} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
            <span className="w-1 h-4 bg-white"></span> El Proceso
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {timeline.map((step: any, idx: number) => (
              <div key={idx} className="bg-surface-dark border border-white/5 p-4 rounded-lg hover:border-white/20 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-xs font-bold ${color} bg-white/5 px-2 py-1 rounded`}>{step.step}</span>
                  <span className="text-white font-bold text-sm uppercase">{step.title}</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Side */}
      <div className="flex-1 w-full">
        <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden group">
          <div className={`absolute inset-0 bg-gradient-to-tr ${color.replace('text-', 'from-')}/20 to-transparent z-10 group-hover:opacity-50 transition-opacity duration-500`}></div>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
          />
          
          {/* Floating Badge */}
          <div className="absolute bottom-6 left-6 right-6 z-20">
            <div className="bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-xl">
              <div className="flex justify-between items-center">
                <span className="text-white text-xs font-bold uppercase tracking-wider">Duración Típica</span>
                <span className={`text-sm font-bold ${color}`}>12 - 16 Semanas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
