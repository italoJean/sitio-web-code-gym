import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { Droplets, Utensils, Zap, LayoutGrid, Search, SearchX } from 'lucide-react';

type Product = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  stats: { label: string; value: string }[];
  image: string;
};

type Section = {
  id: string;
  title: string;
  subtitle: string;
  icon: ReactNode;
  products: Product[];
};

const sections: Section[] = [
  {
    id: 'Líquidos',
    title: 'Combustible Líquido',
    subtitle: 'Matrices de absorción rápida para recuperación inmediata post-entrenamiento.',
    icon: <Droplets size={32} />,
    products: [
      {
        id: 'p1',
        title: 'La Baya Anabólica',
        subtitle: 'ABSORCIÓN RÁPIDA + RECUPERACIÓN',
        description: 'Mezcla de aislado de suero con frutos rojos y glutamina. Diseñado para elevar ligeramente los niveles de insulina e impulsar nutrientes al tejido muscular inmediatamente.',
        tags: ['POST-WOD', 'GF'],
        stats: [
          { label: 'Proteína', value: '24g' },
          { label: 'BCAAs', value: '5g' },
          { label: 'kcal', value: '180' }
        ],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVVKSj5u6GIItVd7Combbhm8YoNWm0p17GQLhKb4x_MxHUuhhf-daXSFNCjdPt7LLq83xW2r6nUhz3zhBMeEblg2Y_7lz_6IwxJ4JLkqlw2ey_ajlOCnMu8LzVKwySBxgajTwGyRUR5zcnEsYlX05R5hqKoZ84-gd4bQ8MBy_-AVxMXkF8zZdpJkYe7WpL_LC-snL4jhk2VJXqPxtSNUtkgCmqEK0CPTdWRSawQoS_ymSC59U2PaMOpOEURDBLmg2PazriSUjVniA'
      },
      {
        id: 'p2',
        title: 'Máquina Verde',
        subtitle: 'SALUD CELULAR + INMUNIDAD',
        description: 'Mezcla de espirulina, kale y manzana con matcha. Una bomba de micronutrientes diseñada para reducir la inflamación y el estrés oxidativo después de levantar peso.',
        tags: ['DETOX', 'VEGANO'],
        stats: [
          { label: 'Prot. Vegetal', value: '10g' },
          { label: 'Hierro', value: 'Rico en' },
          { label: 'kcal', value: '140' }
        ],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNAiwCDnIBqHlAZ6d4HXQXoPqLl90sXhhrraPrwLhajvjrSgCvibuRbw-T_uma5OUgTzw378npFg2mopog6wy957TLdx0ZylJfpa4N0IZZjBJCmR7ZrDGqFmvtNxLpGMj9r356_LbVJRpF4aeucmpezy73zYDSMLkCxYGdxnY5nuWzuJ3R6nMMqys47M5plfaumNmEN6hDnJ7Nx6GxZx44ISHeJYrtY5tCNt2R4E3wVfb29rFo9e-qUK_grWQ9ANofB0LeBAqywkg'
      },
      {
        id: 'p3',
        title: 'Masa de Medianoche',
        subtitle: 'LIBERACIÓN LENTA + AYUDA AL SUEÑO',
        description: 'Pudín de caseína de chocolate oscuro intenso. Proteínas de digestión lenta alimentan tus músculos durante la noche mientras el magnesio ayuda a los ciclos de sueño profundo.',
        tags: ['HIPERTROFIA'],
        stats: [
          { label: 'Caseína', value: '30g' },
          { label: 'Azúcar', value: 'Bajo' },
          { label: 'kcal', value: '220' }
        ],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrbTgc59xRHarLTIsmHCf15M_kHXLQxra6IngFv5K7FSimETrbGxEOG8WpCTHvJtNSPojuHOxnfkAekgA4O5eUWtcVK_yA4nIl6xDhPOZ6h7P3Cd7aTeQJfRapVmpTqGfQLwaeEHh1ncd-DBKZs66i_iK2dAWbMOalgpLAXuQjryEsI43pDVYRZWuZzojfKLyFvKQNX31vMS91C7ZWN--LV9QCKYd1H7vZEaYs-9aXkaKw73FbUIdEDWpNsIvOAEoc3Xzj37bdjU4'
      }
    ]
  },
  {
    id: 'Sólidos',
    title: 'Estado Sólido',
    subtitle: 'Comidas densas en nutrientes para liberación de energía sostenida.',
    icon: <Utensils size={32} />,
    products: [
      {
        id: 'p4',
        title: 'Stack de Proteína',
        subtitle: 'CARBOHIDRATOS COMPLEJOS + SACIEDAD',
        description: 'Masa a base de avena infusionada con aislado de suero, cubierta con jarabe de arce sin azúcar y rodajas de plátano fresco. La recarga definitiva post-día de pierna.',
        tags: ['GANANCIA MASA'],
        stats: [
          { label: 'Proteína', value: '35g' },
          { label: 'Carbs', value: '60g' },
          { label: 'kcal', value: '450' }
        ],
        image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=600&auto=format&fit=crop'
      },
      {
        id: 'p5',
        title: 'Bowl de Poder Rio',
        subtitle: 'ANTIOXIDANTES + CAFEÍNA',
        description: 'Pulpa de Acai orgánica pura mezclada con guaraná para un golpe de cafeína natural. Cubierto con semillas de cáñamo y granola casera.',
        tags: ['ENERGÍA', 'CRUDO'],
        stats: [
          { label: 'Proteína', value: '8g' },
          { label: 'Cafeína', value: 'Natural' },
          { label: 'kcal', value: '320' }
        ],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwex-BPXr1JzrCsAKAqgFMK6ofTQu-sF1FAtECKAbk8R9TIlIcrAbGfAut2dTzdv69HwglM8BywRPNJpv6XXqeciEXD0Ih_JbLLEDv8ETtSncOztUZ1GzAaJAKs_IyG1gbOiJZjcNr0g_C6oNb-fwQnL1qXNZPNJeIX3ol0kgi9LcxiFNrQMk9ywXufTMThdAHCb6pNrUjvbIS0i96x2KzW315ps6GAytligEFfe94jeNPP97Vj6q7OTlAOdAzLrtyLKzIHwIU0do'
      },
      {
        id: 'p6',
        title: 'Plato Shredder',
        subtitle: 'BAJO CARB + ALTA PROTEÍNA',
        description: 'Pechuga de pollo a la parrilla. Servida con brócoli al vapor y aceite de aguacate. Puro combustible, cero relleno.',
        tags: ['DEFINICIÓN', 'KETO'],
        stats: [
          { label: 'Proteína', value: '40g' },
          { label: 'Carbs Netos', value: '5g' },
          { label: 'kcal', value: '300' }
        ],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBELa4BJrJd3FRWWXd4CX_GPc6XH_OafhbcKs0rSjrdIc-C21iO1nkqoQ_OOHAuQHRnbEHiLsMOMyB_vLg8Se4mK5ef7kFNiRV4Lt9tNX-_Hl9Z2ds-He_rx-x-xqseMMqrgglma4EzwQEMnMoWKtP5r84m2xpk8XF6UYq4phzKZ9_mkX7W1SY3BdmvgQHUF4DqPhXemCO_tz31gosd56lw7eCeqryd58FkHi0LKu3A-Ff9dBSjrZYpRI466nlLhtUNQgZlFDIqca8'
      }
    ]
  },
  {
    id: 'Mejoras',
    title: 'Mejoras del Sistema',
    subtitle: 'Suplementos de dosis clínica para mejorar las métricas de rendimiento.',
    icon: <Zap size={32} />,
    products: [
      {
        id: 'p7',
        title: 'Monohidrato de Creatina',
        subtitle: '5G MICRONIZADA + RENDIMIENTO',
        description: 'Aumenta la producción de ATP para una salida de potencia explosiva durante levantamientos pesados.',
        tags: ['FUERZA'],
        stats: [],
        image: '/public/creatine.webp'
      },
      {
        id: 'p8',
        title: 'BCAA 2:1:1',
        subtitle: '7G FERMENTADO + RECUPERACIÓN',
        description: 'Previene el catabolismo muscular durante sesiones largas de cardio o HIIT.',
        tags: ['RESISTENCIA'],
        stats: [],
        image: '/public/bcaa.webp'
      },
      {
        id: 'p9',
        title: 'Stack Nootrópico',
        subtitle: 'ALPHA GPC + MELENA DE LEÓN',
        description: 'Mejora la conexión mente-músculo y la claridad mental sin nerviosismo.',
        tags: ['ENFOQUE'],
        stats: [],
        image: '/public/stack.webp'
      },
      {
        id: 'p10',
        title: 'L-Citrulina',
        subtitle: '6G PURA + VASCULARIDAD',
        description: 'Aumenta la producción de óxido nítrico para mejorar el flujo sanguíneo y la vascularidad.',
        tags: ['BOMBEO'],
        stats: [],
        image: '/public/citrulina.webp'
      }
    ]
  }
];

export default function ProteinBar() {
  const [activeFilter, setActiveFilter] = useState('Todo');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = [
    { id: 'Todo', icon: <LayoutGrid size={18} /> },
    { id: 'Líquidos', icon: <Droplets size={18} />, label: 'Líquidos (Batidos)' },
    { id: 'Sólidos', icon: <Utensils size={18} />, label: 'Sólidos (Comida)' },
    { id: 'Mejoras', icon: <Zap size={18} />, label: 'Mejoras del Sistema' }
  ];

  const filteredSections = sections.map(section => {
    const matchesCategory = activeFilter === 'Todo' || activeFilter === section.id;
    if (!matchesCategory) return null;

    const filteredProducts = section.products.filter(product => 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (filteredProducts.length === 0) return null;

    return { ...section, products: filteredProducts };
  }).filter(Boolean);

  return (
    <div className="min-h-screen bg-background-dark pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/70 via-background-dark/80 to-background-dark z-10"></div>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuABTrTUPgYnH9N_7oDnFB07-VfFCERQSaiOwIwoVu4WlItcndVVdcbScXOpWbzYr1GK-lbx_N9AavpjJ9-uJOnqe-igv-kQ0U6IGhASkusNxA0P-TTEHK7-HAVnCxChXPwXUW7Wsid-jTl4hHZz3sDIK_3Hi8ZIsKH3pgqqrtaHkZF6yOfddgAKZKh7hUMQQCDiGHHrznlbC8iyeIngAQ1Z73CZwlB4VEJIsw0RPtq-vSg8fsM71kFtxAtl8QpBqf9C79l9HxRaNJs" 
            alt="Background" 
            className="w-full h-full object-cover opacity-50 md:opacity-40"
          />
        </div>
        
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 md:mb-4"
          >
            <span className="text-primary text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              Nutrición de Precisión
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter mb-6 leading-tight md:leading-none"
          >
            Combustible y<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/60">Recuperación</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed px-4 md:px-0"
          >
            Nutrición de precisión diseñada para ventanas anabólicas post-entrenamiento. Aislados de alta calidad, sólidos orgánicos y suplementos de rendimiento curados para el atleta de élite.
          </motion.p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-20 z-30 bg-background-dark/95 backdrop-blur-md border-y border-white/5 py-4 mb-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="text" 
              placeholder="Buscar productos..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors placeholder-slate-600"
            />
          </div>
          
          <div className="flex gap-2 md:gap-4 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap",
                  activeFilter === filter.id
                    ? "bg-primary text-white shadow-[0_0_20px_rgba(128,0,32,0.4)]"
                    : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                )}
              >
                {filter.icon}
                {filter.label || filter.id}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24 space-y-24">
        {filteredSections.length > 0 ? (
          filteredSections.map((section) => (
            <motion.section 
              key={section!.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-start gap-4 mb-12 border-b border-white/10 pb-6">
                <div className="text-primary mt-1">{section!.icon}</div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white uppercase mb-2">{section!.title}</h2>
                  <p className="text-slate-400 text-sm md:text-base max-w-2xl">{section!.subtitle}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                  {section!.products.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.section>
          ))
        ) : (
          <div className="text-center py-20">
            <SearchX className="mx-auto text-white/10 mb-4" size={64} />
            <p className="text-slate-500 text-lg">No se encontraron productos que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-surface-dark rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col h-full">
      <div className="relative aspect-[4/5] overflow-hidden bg-black/20">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {product.tags.map((tag, i) => (
            <span key={i} className={cn(
              "text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded",
              i === 0 ? "bg-primary text-white" : "bg-black/80 text-white backdrop-blur-sm"
            )}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-1 leading-tight">{product.title}</h3>
        <p className="text-primary text-[10px] font-bold uppercase tracking-widest mb-4">{product.subtitle}</p>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{product.description}</p>
        
        {product.stats.length > 0 && (
          <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
            {product.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-white font-mono text-sm font-bold">{stat.value}</p>
                <p className="text-slate-600 text-[10px] uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
