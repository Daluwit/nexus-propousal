import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import { 
  Shield,
  AlertTriangle,
  TrendingUp,
  Zap,
  Clock,
  CheckCircle2,
  Database,
  FileCheck,
  Bot,
  DollarSign,
  Calendar,
  Target,
  Activity,
  ServerCog,
  Wrench,
  HeadphonesIcon
} from "lucide-react";

export default function SIAPPropuesta() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const navItems = [
    { id: "resumen", label: "Resumen" },
    { id: "diagnostico", label: "Diagnóstico" },
    { id: "solucion", label: "Solución" },
    { id: "roi", label: "ROI" },
    { id: "oferta", label: "Oferta" },
    { id: "cronograma", label: "Cronograma" }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".fade-in-section");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -20;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const problemasCriticos = [
    {
      icon: AlertTriangle,
      title: "Glosas por Inconsistencia de Datos",
      description: "Errores de lateralidad (Izquierda vs. Derecha), tiempos quirúrgicos imposibles y duplicidad de textos (Copy-Paste) detectados automáticamente por el SOAT."
    },
    {
      icon: Clock,
      title: "Ineficiencia Operativa",
      description: "Uso de herramientas manuales de escritorio (PDF24, Cliente de Correo) que fragmentan la información y dependen 100% de la atención del operario."
    }
  ];

  const impactoFinanciero = [
    { label: "Facturación Promedio", valor: "~$1.500 Millones COP/mes", color: "#306ab0" },
    { label: "Dinero Retenido (Glosas)", valor: "~$400 Millones COP/mes", color: "#dc2626" },
    { label: "Costo de Oportunidad", descripcion: "El flujo de caja se detiene y los costos administrativos de 're-procesar' esas glosas duplican el trabajo del equipo." }
  ];

  const componentesSolucion = [
    {
      icon: Shield,
      title: "Motor de Validación Preventiva",
      description: "Un algoritmo que revisa el 100% de las historias clínicas en tiempo real buscando 15 tipos de errores críticos (duplicidad, incoherencia de insumos, tiempos, etc.)."
    },
    {
      icon: Activity,
      title: "Dashboard de Semaforización",
      description: "Una interfaz para el equipo de facturación que muestra qué historias están listas (Verde) y cuáles deben corregirse (Rojo) antes de intentar cobrar."
    },
    {
      icon: Bot,
      title: "Ensamblador Automático (RPA)",
      description: "Eliminación del uso de PDF24. El sistema descargará automáticamente los soportes del correo, generará el PDF de la historia y unirá la factura en un solo paquete digital estandarizado."
    }
  ];

  const implementacionIncluye = [
    "Ingeniería inversa y conexión segura a Base de Datos (PostgreSQL/SaludSystem)",
    "Desarrollo y parametrización de las 15 reglas de validación del SOAT",
    "Construcción del Dashboard de Control para Facturación",
    "Configuración del servidor y despliegue del RPA (Robot de ensamblaje)",
    "Capacitación al personal"
  ];

  const suscripcionIncluye = [
    {
      icon: Wrench,
      title: "Actualización de Reglas",
      description: "Si el SOAT saca una nueva norma de auditoría, actualizamos el algoritmo sin costo adicional"
    },
    {
      icon: ServerCog,
      title: "Monitoreo de Infraestructura",
      description: "Mantenimiento del servidor y base de datos intermedia"
    },
    {
      icon: HeadphonesIcon,
      title: "Soporte Técnico",
      description: "Atención prioritaria a fallos en el ensamblaje o validación"
    },
    {
      icon: Database,
      title: "Hosting",
      description: "Costos de nube y procesamiento incluidos"
    }
  ];

  const cronograma = [
    {
      semanas: "Semanas 1-2",
      titulo: "Conexión a datos y diagnóstico",
      descripcion: "Ya empieza a reportar errores"
    },
    {
      semanas: "Semanas 3-4",
      titulo: "Desarrollo del Dashboard y validadores",
      descripcion: "Sistema de semaforización operativo"
    },
    {
      semanas: "Semanas 5-6",
      titulo: "Automatización del ensamblaje",
      descripcion: "Adiós PDF24 - Puesta en marcha completa"
    }
  ];

  return (
    <div className="min-h-screen" style={{ 
      background: "linear-gradient(135deg, #faf6f1 0%, #f3f9ff 50%, #faf6f1 100%)"
    }}>
      <Navbar 
        scrollToSection={scrollToSection}
        navItems={navItems}
      />
      
      {/* PORTADA */}
      <section 
        className="min-h-screen flex flex-col px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative pt-20 sm:pt-24 md:pt-28 overflow-hidden"
        style={{ 
          background: "linear-gradient(135deg, #082053 0%, #306ab0 50%, #082053 100%)"
        }}
      >
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
          <div className="text-center space-y-6 md:space-y-8 fade-in-section">
            <div className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full mb-6 mx-auto"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
            >
              <Shield className="w-12 h-12 md:w-16 md:h-16" style={{ color: "#ffffff" }} />
            </div>
            
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              style={{ color: "#ffffff", fontWeight: 800 }}
            >
              PROPUESTA COMERCIAL Y TÉCNICA
            </h1>
            
            <h2 
              className="text-2xl md:text-4xl lg:text-5xl font-semibold"
              style={{ color: "#dee9f6", fontWeight: 600 }}
            >
              Sistema Inteligente de Auditoría Preventiva<br />
              y Orquestación de Facturación
            </h2>
            
            <div 
              className="text-xl md:text-2xl lg:text-3xl font-semibold"
              style={{ color: "#ffffff", fontWeight: 700 }}
            >
              SIAP - "SENTINEL"
            </div>
            
            <p 
              className="text-base md:text-lg lg:text-xl"
              style={{ color: "#dee9f6", fontWeight: 500 }}
            >
              Fecha: 24 de Noviembre de 2024
            </p>
          </div>
        </div>
        
        <div 
          className="absolute bottom-4 md:bottom-12 left-0 right-0 px-4 md:px-6 lg:px-12 max-w-6xl mx-auto z-10"
        >
          <p 
            className="text-xs sm:text-sm md:text-base leading-relaxed text-center"
            style={{ color: "#ffffff", fontWeight: 400, opacity: 0.7 }}
          >
            Documento confidencial. Propuesta exclusiva para optimización del ciclo de ingresos hospitalarios.
          </p>
        </div>
      </section>

      {/* TABLA DE CONTENIDO */}
      <section 
        id="tabla-contenido"
        className="py-20 px-6"
        style={{ 
          background: "linear-gradient(180deg, #f3f9ff 0%, #ffffff 100%)"
        }}
      >
        <div className="max-w-4xl mx-auto fade-in-section">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center"
            style={{ color: "#082053", fontWeight: 700 }}
          >
            Tabla de contenido
          </h2>
          <div className="space-y-3">
            {[
              { id: "resumen", text: "RESUMEN EJECUTIVO" },
              { id: "diagnostico", text: "DIAGNÓSTICO Y DOLOR FINANCIERO" },
              { id: "solucion", text: "SOLUCIÓN PROPUESTA: ARQUITECTURA SENTINEL" },
              { id: "roi", text: "ANÁLISIS DE RETORNO DE INVERSIÓN (ROI)" },
              { id: "oferta", text: "OFERTA ECONÓMICA" },
              { id: "cronograma", text: "CRONOGRAMA DE EJECUCIÓN" }
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left px-8 py-5 rounded-lg transition-all duration-300 hover-elevate active-elevate-2 border"
                style={{ 
                  backgroundColor: "#ffffff",
                  borderColor: "#ded6cb",
                  color: "#082053",
                  fontWeight: 500
                }}
              >
                <span className="text-lg">{index + 1}. {item.text}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 1. RESUMEN EJECUTIVO */}
      <section 
        id="resumen"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6"
        style={{ 
          background: "linear-gradient(180deg, #ffffff 0%, #faf6f1 50%, #f3f9ff 100%)"
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center fade-in-section"
            style={{ color: "#082053", fontWeight: 700 }}
          >
            Resumen Ejecutivo
          </h2>
          
          <Card 
            className="fade-in-section border"
            style={{ 
              borderColor: "#ded6cb",
              backgroundColor: "#ffffff"
            }}
          >
            <CardContent className="p-6 md:p-10">
              <div className="space-y-6">
                <div 
                  className="p-6 rounded-lg border-l-4"
                  style={{ 
                    backgroundColor: "#fff5f5",
                    borderLeftColor: "#dc2626"
                  }}
                >
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-8 h-8 flex-shrink-0" style={{ color: "#dc2626" }} />
                    <div>
                      <h3 
                        className="text-xl md:text-2xl font-semibold mb-3"
                        style={{ color: "#dc2626", fontWeight: 600 }}
                      >
                        El Desafío Crítico
                      </h3>
                      <p 
                        className="text-base md:text-lg leading-relaxed"
                        style={{ color: "#082053", fontWeight: 400 }}
                      >
                        La clínica enfrenta actualmente un desafío crítico en su ciclo de ingresos: <strong>un porcentaje de devoluciones (glosas) del SOAT cercano al 20%-40%</strong> de la facturación mensual, lo que representa aproximadamente <strong style={{ color: "#dc2626" }}>$400.000.000 COP retenidos cada mes</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                <p 
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: "#082053", fontWeight: 400 }}
                >
                  La causa raíz <strong>no es médica, sino operativa y tecnológica</strong>: la aseguradora utiliza <strong>Inteligencia Artificial</strong> para auditar, mientras que la clínica utiliza <strong>procesos manuales</strong> (unión de PDFs, correos, revisión visual) propensos al error humano.
                </p>

                <div 
                  className="p-6 rounded-lg border-l-4"
                  style={{ 
                    backgroundColor: "#f0f9ff",
                    borderLeftColor: "#306ab0"
                  }}
                >
                  <div className="flex items-start gap-4">
                    <Zap className="w-8 h-8 flex-shrink-0" style={{ color: "#306ab0" }} />
                    <div>
                      <h3 
                        className="text-xl md:text-2xl font-semibold mb-3"
                        style={{ color: "#306ab0", fontWeight: 600 }}
                      >
                        La Solución
                      </h3>
                      <p 
                        className="text-base md:text-lg leading-relaxed"
                        style={{ color: "#082053", fontWeight: 400 }}
                      >
                        Esta propuesta presenta la implementación de <strong>"Sentinel"</strong>, una arquitectura de software intermedia que <strong>valida, corrige y ensambla la facturación automáticamente</strong> antes de ser enviada, garantizando el cumplimiento de las reglas algorítmicas del SOAT.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 2. DIAGNÓSTICO Y DOLOR FINANCIERO */}
      <section 
        id="diagnostico"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6"
        style={{ 
          background: "linear-gradient(180deg, #f3f9ff 0%, #faf6f1 50%, #ffffff 100%)"
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center fade-in-section"
            style={{ color: "#082053", fontWeight: 700 }}
          >
            Diagnóstico y Dolor Financiero
          </h2>
          
          <p 
            className="text-lg md:text-xl text-center mb-12 fade-in-section"
            style={{ color: "#082053", fontWeight: 500 }}
          >
            Hemos identificado que el proceso actual de facturación presenta las siguientes vulnerabilidades críticas:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {problemasCriticos.map((problema, index) => {
              const Icon = problema.icon;
              return (
                <Card
                  key={index}
                  className="fade-in-section border"
                  style={{
                    borderColor: "#ded6cb",
                    backgroundColor: "#ffffff",
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "#fff5f5" }}
                      >
                        <Icon className="w-6 h-6" style={{ color: "#dc2626" }} />
                      </div>
                      <h3 
                        className="text-xl font-semibold leading-tight pt-2"
                        style={{ color: "#082053", fontWeight: 600 }}
                      >
                        {problema.title}
                      </h3>
                    </div>
                    <p 
                      className="text-base leading-relaxed"
                      style={{ color: "#082053", fontWeight: 400, opacity: 0.85 }}
                    >
                      {problema.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Impacto Financiero */}
          <Card 
            className="fade-in-section border"
            style={{ 
              borderColor: "#ded6cb",
              backgroundColor: "#ffffff"
            }}
          >
            <CardContent className="p-6 md:p-10">
              <h3 
                className="text-2xl md:text-3xl font-bold mb-6 text-center"
                style={{ color: "#082053", fontWeight: 700 }}
              >
                Impacto Financiero
              </h3>
              
              <div className="space-y-6">
                {impactoFinanciero.map((item, index) => (
                  <div 
                    key={index}
                    className="p-5 rounded-lg border"
                    style={{ 
                      backgroundColor: item.color ? "#f9fafb" : "#fafafa",
                      borderColor: "#ded6cb"
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                      <span 
                        className="text-lg font-semibold"
                        style={{ color: "#082053", fontWeight: 600 }}
                      >
                        {item.label}
                      </span>
                      {item.valor && (
                        <span 
                          className="text-xl md:text-2xl font-bold"
                          style={{ color: item.color || "#082053", fontWeight: 700 }}
                        >
                          {item.valor}
                        </span>
                      )}
                    </div>
                    {item.descripcion && (
                      <p 
                        className="mt-3 text-base leading-relaxed"
                        style={{ color: "#082053", fontWeight: 400, opacity: 0.85 }}
                      >
                        {item.descripcion}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 3. SOLUCIÓN PROPUESTA */}
      <section 
        id="solucion"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6"
        style={{ 
          background: "linear-gradient(135deg, #dee9f6 0%, #f3f9ff 50%, #dee9f6 100%)"
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center fade-in-section"
            style={{ color: "#082053", fontWeight: 700 }}
          >
            Solución Propuesta: Arquitectura "Sentinel"
          </h2>
          
          <p 
            className="text-lg md:text-xl text-center mb-12 fade-in-section"
            style={{ color: "#082053", fontWeight: 500 }}
          >
            Implementaremos una solución de <strong>Auditoría Continua y Orquestación</strong> que se conecta directamente a su base de datos actual (SaludSystem) <strong>sin interrumpir la operación médica</strong>.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {componentesSolucion.map((componente, index) => {
              const Icon = componente.icon;
              return (
                <Card
                  key={index}
                  className="fade-in-section border"
                  style={{
                    borderColor: "#ded6cb",
                    backgroundColor: "#ffffff",
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <CardContent className="p-6 md:p-8 text-center">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: "#f0f9ff" }}
                    >
                      <Icon className="w-8 h-8" style={{ color: "#306ab0" }} />
                    </div>
                    <h3 
                      className="text-xl font-semibold mb-3"
                      style={{ color: "#082053", fontWeight: 600 }}
                    >
                      {componente.title}
                    </h3>
                    <p 
                      className="text-base leading-relaxed"
                      style={{ color: "#082053", fontWeight: 400, opacity: 0.85 }}
                    >
                      {componente.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. ANÁLISIS DE ROI */}
      <section 
        id="roi"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6"
        style={{ 
          background: "linear-gradient(180deg, #ffffff 0%, #faf6f1 100%)"
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center fade-in-section"
            style={{ color: "#082053", fontWeight: 700 }}
          >
            Análisis de Retorno de Inversión (ROI)
          </h2>
          
          <p 
            className="text-lg md:text-xl text-center mb-12 fade-in-section"
            style={{ color: "#082053", fontWeight: 500 }}
          >
            La implementación de este sistema <strong>no es un gasto, es una recuperación de activos</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card 
              className="fade-in-section border"
              style={{ 
                borderColor: "#ded6cb",
                backgroundColor: "#ffffff"
              }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Target className="w-10 h-10" style={{ color: "#306ab0" }} />
                  <h3 
                    className="text-xl font-semibold"
                    style={{ color: "#082053", fontWeight: 600 }}
                  >
                    Meta de Recuperación
                  </h3>
                </div>
                <p 
                  className="text-base leading-relaxed"
                  style={{ color: "#082053", fontWeight: 400 }}
                >
                  Reducir la tasa de devoluciones del <strong style={{ color: "#dc2626" }}>20%</strong> al <strong style={{ color: "#16a34a" }}>5%</strong> en los primeros 3 meses.
                </p>
              </CardContent>
            </Card>

            <Card 
              className="fade-in-section border"
              style={{ 
                borderColor: "#ded6cb",
                backgroundColor: "#ffffff",
                animationDelay: "100ms"
              }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <TrendingUp className="w-10 h-10" style={{ color: "#16a34a" }} />
                  <h3 
                    className="text-xl font-semibold"
                    style={{ color: "#082053", fontWeight: 600 }}
                  >
                    Impacto Estimado
                  </h3>
                </div>
                <p 
                  className="text-base leading-relaxed"
                  style={{ color: "#082053", fontWeight: 400 }}
                >
                  Recuperación de flujo de caja de <strong style={{ color: "#16a34a" }}>$300.000.000 COP mensuales</strong> que hoy se quedan atrapados en glosas.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Tabla Comparativa */}
          <Card 
            className="fade-in-section border overflow-x-auto"
            style={{ 
              borderColor: "#ded6cb",
              backgroundColor: "#ffffff"
            }}
          >
            <CardContent className="p-6 md:p-10">
              <h3 
                className="text-2xl font-bold mb-6 text-center"
                style={{ color: "#082053", fontWeight: 700 }}
              >
                Comparativa de Resultados
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ backgroundColor: "#f3f9ff" }}>
                      <th 
                        className="text-left p-4 border-b-2"
                        style={{ color: "#082053", fontWeight: 600, borderColor: "#306ab0" }}
                      >
                        Concepto
                      </th>
                      <th 
                        className="text-center p-4 border-b-2"
                        style={{ color: "#082053", fontWeight: 600, borderColor: "#306ab0" }}
                      >
                        Situación Actual
                      </th>
                      <th 
                        className="text-center p-4 border-b-2"
                        style={{ color: "#082053", fontWeight: 600, borderColor: "#306ab0" }}
                      >
                        Con Solución "Sentinel"
                      </th>
                      <th 
                        className="text-center p-4 border-b-2"
                        style={{ color: "#082053", fontWeight: 600, borderColor: "#306ab0" }}
                      >
                        Beneficio Mensual
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b" style={{ borderColor: "#ded6cb" }}>
                      <td 
                        className="p-4 font-semibold"
                        style={{ color: "#082053", fontWeight: 500 }}
                      >
                        Devoluciones (Glosas)
                      </td>
                      <td 
                        className="p-4 text-center font-bold"
                        style={{ color: "#dc2626" }}
                      >
                        $400.000.000
                      </td>
                      <td 
                        className="p-4 text-center font-bold"
                        style={{ color: "#16a34a" }}
                      >
                        $80.000.000<br />
                        <span className="text-sm font-normal">(Est. 4%)</span>
                      </td>
                      <td 
                        className="p-4 text-center font-bold text-xl"
                        style={{ color: "#16a34a" }}
                      >
                        +$320.000.000
                      </td>
                    </tr>
                    <tr>
                      <td 
                        className="p-4 font-semibold"
                        style={{ color: "#082053", fontWeight: 500 }}
                      >
                        Tiempo de Ensamble
                      </td>
                      <td 
                        className="p-4 text-center"
                        style={{ color: "#082053" }}
                      >
                        Manual (Lento)
                      </td>
                      <td 
                        className="p-4 text-center font-semibold"
                        style={{ color: "#16a34a" }}
                      >
                        Automático (Inmediato)
                      </td>
                      <td 
                        className="p-4 text-center font-bold"
                        style={{ color: "#306ab0" }}
                      >
                        -80 horas/hombre
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 5. OFERTA ECONÓMICA */}
      <section 
        id="oferta"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6"
        style={{ backgroundColor: "#082053" }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center fade-in-section"
            style={{ color: "#ffffff", fontWeight: 700 }}
          >
            Oferta Económica
          </h2>

          <p 
            className="text-lg md:text-xl text-center mb-12 fade-in-section"
            style={{ color: "#dee9f6", fontWeight: 500 }}
          >
            La propuesta se divide en dos componentes: <strong>Setup (Implementación)</strong> y <strong>SaaS (Servicio Mensual)</strong>
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Implementación */}
            <Card 
              className="fade-in-section border-2"
              style={{ 
                borderColor: "#306ab0",
                backgroundColor: "#ffffff"
              }}
            >
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                    style={{ backgroundColor: "#f0f9ff" }}
                  >
                    <Wrench className="w-8 h-8" style={{ color: "#306ab0" }} />
                  </div>
                  <h3 
                    className="text-2xl font-bold mb-2"
                    style={{ color: "#082053", fontWeight: 700 }}
                  >
                    A. Implementación e Integración
                  </h3>
                  <p 
                    className="text-sm"
                    style={{ color: "#306ab0", fontWeight: 500 }}
                  >
                    Pago Único
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {implementacionIncluye.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#16a34a" }} />
                      <span 
                        className="text-sm leading-relaxed"
                        style={{ color: "#082053", fontWeight: 400 }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div 
                  className="text-center p-6 rounded-lg"
                  style={{ backgroundColor: "#f0f9ff" }}
                >
                  <p 
                    className="text-sm mb-2"
                    style={{ color: "#306ab0", fontWeight: 600 }}
                  >
                    Inversión por Implementación
                  </p>
                  <p 
                    className="text-4xl font-bold mb-2"
                    style={{ color: "#082053", fontWeight: 800 }}
                  >
                    $15.000.000
                  </p>
                  <p 
                    className="text-sm"
                    style={{ color: "#082053", fontWeight: 400 }}
                  >
                    + IVA
                  </p>
                  <p 
                    className="text-xs mt-4"
                    style={{ color: "#306ab0", fontWeight: 500 }}
                  >
                    Forma de pago: 50% anticipo, 50% contra entrega funcional
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Suscripción Mensual */}
            <Card 
              className="fade-in-section border-2"
              style={{ 
                borderColor: "#16a34a",
                backgroundColor: "#ffffff",
                animationDelay: "100ms"
              }}
            >
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                    style={{ backgroundColor: "#f0fdf4" }}
                  >
                    <Calendar className="w-8 h-8" style={{ color: "#16a34a" }} />
                  </div>
                  <h3 
                    className="text-2xl font-bold mb-2"
                    style={{ color: "#082053", fontWeight: 700 }}
                  >
                    B. Suscripción Mensual
                  </h3>
                  <p 
                    className="text-sm"
                    style={{ color: "#16a34a", fontWeight: 500 }}
                  >
                    Soporte y Evolución Continua
                  </p>
                </div>

                <p 
                  className="text-sm mb-6 text-center"
                  style={{ color: "#082053", fontWeight: 400 }}
                >
                  El SOAT cambia sus reglas constantemente. Este servicio garantiza que el sistema no quede obsoleto y opere 24/7.
                </p>

                <div className="space-y-4 mb-6">
                  {suscripcionIncluye.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div 
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: "#f0fdf4" }}
                        >
                          <Icon className="w-4 h-4" style={{ color: "#16a34a" }} />
                        </div>
                        <div>
                          <p 
                            className="text-sm font-semibold mb-1"
                            style={{ color: "#082053", fontWeight: 600 }}
                          >
                            {item.title}
                          </p>
                          <p 
                            className="text-xs leading-relaxed"
                            style={{ color: "#082053", fontWeight: 400, opacity: 0.85 }}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div 
                  className="text-center p-6 rounded-lg"
                  style={{ backgroundColor: "#f0fdf4" }}
                >
                  <p 
                    className="text-sm mb-2"
                    style={{ color: "#16a34a", fontWeight: 600 }}
                  >
                    Fee Mensual
                  </p>
                  <p 
                    className="text-4xl font-bold mb-2"
                    style={{ color: "#082053", fontWeight: 800 }}
                  >
                    $1.600.000
                  </p>
                  <p 
                    className="text-sm"
                    style={{ color: "#082053", fontWeight: 400 }}
                  >
                    + IVA / mes
                  </p>
                  <p 
                    className="text-xs mt-4"
                    style={{ color: "#16a34a", fontWeight: 500 }}
                  >
                    Contrato mínimo a 12 meses
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. CRONOGRAMA DE EJECUCIÓN */}
      <section 
        id="cronograma"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6"
        style={{ 
          background: "linear-gradient(180deg, #ffffff 0%, #faf6f1 100%)"
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center fade-in-section"
            style={{ color: "#082053", fontWeight: 700 }}
          >
            Cronograma de Ejecución
          </h2>
          
          <p 
            className="text-lg md:text-xl text-center mb-12 fade-in-section"
            style={{ color: "#082053", fontWeight: 500 }}
          >
            El proyecto está diseñado para dar <strong>resultados rápidos (Quick Wins)</strong>
          </p>

          <div className="space-y-6">
            {cronograma.map((fase, index) => (
              <Card
                key={index}
                className="fade-in-section border overflow-visible relative"
                style={{
                  borderColor: "#ded6cb",
                  backgroundColor: "#ffffff",
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div 
                  className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10"
                  style={{ backgroundColor: "#306ab0" }}
                >
                  <span 
                    className="text-xl font-bold"
                    style={{ color: "#ffffff", fontWeight: 700 }}
                  >
                    {index + 1}
                  </span>
                </div>
                
                <CardContent className="p-6 md:p-8 pl-12">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <p 
                        className="text-sm font-semibold mb-2"
                        style={{ color: "#306ab0", fontWeight: 600 }}
                      >
                        {fase.semanas}
                      </p>
                      <h3 
                        className="text-xl font-semibold mb-2"
                        style={{ color: "#082053", fontWeight: 600 }}
                      >
                        {fase.titulo}
                      </h3>
                      <p 
                        className="text-base leading-relaxed"
                        style={{ color: "#082053", fontWeight: 400, opacity: 0.85 }}
                      >
                        {fase.descripcion}
                      </p>
                    </div>
                    <Clock className="w-12 h-12 flex-shrink-0" style={{ color: "#dee9f6" }} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div 
            className="mt-12 text-center p-8 rounded-lg fade-in-section"
            style={{ backgroundColor: "#f0f9ff" }}
          >
            <Calendar className="w-16 h-16 mx-auto mb-4" style={{ color: "#306ab0" }} />
            <h3 
              className="text-2xl font-bold mb-4"
              style={{ color: "#082053", fontWeight: 700 }}
            >
              Tiempo Total de Entrega
            </h3>
            <p 
              className="text-4xl font-bold"
              style={{ color: "#306ab0", fontWeight: 800 }}
            >
              6 Semanas
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer 
        className="py-12 px-6"
        style={{ backgroundColor: "#0a1628" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p 
            className="text-sm md:text-base"
            style={{ color: "#fffcf7", fontWeight: 400, opacity: 0.9 }}
          >
            © 2024 – Propuesta SIAP "Sentinel" · Sistema Inteligente de Auditoría Preventiva
          </p>
        </div>
      </footer>

      <style>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .fade-in-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        html {
          scroll-behavior: smooth;
        }

        .hover-elevate:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .active-elevate-2:active {
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}

