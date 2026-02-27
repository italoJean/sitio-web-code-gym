import { useState, FC, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { 
  LayoutGrid, 
  Utensils, 
  CreditCard, 
  Dumbbell, 
  Star, 
  GlassWater, 
  ShieldCheck, 
  RefreshCw, 
  Clock, 
  ChevronRight, 
  Search, 
  Mail, 
  MessageSquare, 
  ChevronDown 
} from 'lucide-react';

export default function FAQ() {
  const [activeTab, setActiveTab] = useState('General');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'General', icon: <LayoutGrid size={18} /> },
    { id: 'Nutrición', icon: <Utensils size={18} /> },
    { id: 'Membresías', icon: <CreditCard size={18} /> },
    { id: 'Coaching', icon: <Dumbbell size={18} /> },
  ];

  const faqs = [
    {
      category: 'General',
      question: '¿Cómo funciona el acceso a la Zona Star?',
      answer: 'La Zona Star es nuestro espacio exclusivo de alto rendimiento. El acceso se gestiona mediante escaneo biométrico (huella dactilar o reconocimiento facial) registrado en tu perfil. Incluye equipamiento de última generación, hidratación premium ilimitada y acceso a las salas de recuperación criogénica.',
      icon: <Star size={20} />
    },
    {
      category: 'Nutrición',
      question: '¿Qué tipo de asesoría nutricional ofrecen en el Bar?',
      answer: 'Nuestro Protein Bar no es solo un café; es un centro de asesoría rápida. Al presentar tu membresía, nuestros nutricionistas de guardia pueden recomendarte el batido post-entrenamiento ideal según tus objetivos del día. También puedes solicitar ajustes rápidos a tu plan de comidas semanal directamente con el personal certificado.',
      icon: <GlassWater size={20} />
    },
    {
      category: 'Coaching',
      question: '¿Cuáles son las credenciales de los entrenadores?',
      answer: 'En CodeGym, todos nuestros coaches cuentan con certificaciones internacionales (NSCA, NASM o equivalentes) y un mínimo de 5 años de experiencia en entrenamiento de fuerza y acondicionamiento. Cada trimestre, nuestro equipo recibe formación adicional en biomecánica y prevención de lesiones para garantizar el máximo estándar de seguridad.',
      icon: <ShieldCheck size={20} />
    },
    {
      category: 'Membresías',
      question: '¿Qué tan flexible es mi membresía?',
      answer: 'Entendemos que la vida sucede. Nuestras membresías "Pro" y "Star" permiten congelar tu cuenta hasta por 30 días al año sin costo adicional. Además, puedes transferir pases de invitado mensuales desde nuestra App y cancelar en cualquier momento con un aviso previo de 15 días, sin penalizaciones por permanencia.',
      icon: <RefreshCw size={20} />
    },
    {
      category: 'General',
      question: '¿Cuáles son los horarios de apertura?',
      answer: 'Operamos de lunes a viernes de 5:00 AM a 11:00 PM. Sábados de 7:00 AM a 8:00 PM y domingos/festivos de 8:00 AM a 4:00 PM. La Zona Star mantiene los mismos horarios, aunque algunas clases grupales requieren reserva previa vía App con 24 horas de antelación.',
      icon: <Clock size={20} />
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    (activeTab === 'General' || faq.category === activeTab) &&
    (faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="max-w-5xl mx-auto w-full px-6 py-12 pt-28">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 mb-8 text-sm text-slate-500">
        <a href="/" className="hover:text-primary">Inicio</a>
        <ChevronRight size={14} />
        <span className="text-primary font-medium">Preguntas Frecuentes</span>
      </nav>

      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Preguntas Frecuentes</h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          Todo lo que necesitas saber sobre la experiencia premium en CodeGym. Encuentra respuestas sobre accesos, nutrición y coaching.
        </p>
      </div>

      {/* Search Large */}
      <div className="mb-12">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={24} />
          <input 
            type="text" 
            placeholder="¿Cómo podemos ayudarte hoy?" 
            className="w-full bg-primary/5 border border-primary/20 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-lg text-white placeholder-slate-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex overflow-x-auto gap-4 mb-10 pb-2 no-scrollbar">
        {tabs.map(tab => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-full whitespace-nowrap transition-colors",
              activeTab === tab.id 
                ? "bg-primary text-white" 
                : "bg-primary/10 border border-primary/20 text-slate-300 hover:bg-primary/20"
            )}
          >
            {tab.icon} {tab.id}
          </button>
        ))}
      </div>

      {/* Accordion FAQ Content */}
      <div className="space-y-4">
        {filteredFaqs.map((faq, index) => (
          <AccordionItem key={index} faq={faq} />
        ))}
      </div>

      {/* Footer Support Section */}
      <div className="mt-16 p-8 bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 rounded-2xl text-center">
        <h3 className="text-2xl font-bold mb-4 text-white">¿Aún tienes dudas?</h3>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">
          Nuestro equipo de soporte está disponible 24/7 para ayudarte con cualquier consulta técnica o administrativa.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:brightness-110 transition-all flex items-center gap-2">
            <Mail size={20} /> Contactar Soporte
          </button>
          <button className="px-8 py-3 border border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-all flex items-center gap-2">
            <MessageSquare size={20} /> Chat en Vivo
          </button>
        </div>
      </div>
    </div>
  );
}

interface AccordionItemProps {
  faq: {
    category: string;
    question: string;
    answer: string;
    icon: ReactNode;
  };
}

const AccordionItem: FC<AccordionItemProps> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/10 transition-colors group"
      >
        <span className="text-lg font-semibold flex items-center gap-3 text-white">
          <span className="text-primary">{faq.icon}</span>
          {faq.question}
        </span>
        <ChevronDown className={cn("text-primary transition-transform duration-300", isOpen && "rotate-180")} size={24} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-slate-400 leading-relaxed pl-14">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
