"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import {
  Scale,
  Briefcase,
  Shield,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Menu,
  X,
  Award,
  CheckCircle,
} from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const getYear = new Date().getFullYear();

  const areas = [
    {
      icon: Scale,
      title: "Direito Civil",
      description:
        "Contratos, indenizações, responsabilidade civil e disputas familiares com expertise e dedicação.",
    },
    {
      icon: Briefcase,
      title: "Direito Trabalhista",
      description:
        "Defesa completa de empregados e empregadores em todas as questões trabalhistas.",
    },
    {
      icon: Shield,
      title: "Direito Previdenciário",
      description:
        "Aposentadorias, pensões, benefícios e revisões previdenciárias com máxima eficiência.",
    },
  ];

  const diferenciais = [
    {
      numero: "01",
      titulo: "Atendimento Personalizado",
      descricao:
        "Cada caso é único. Oferecemos atenção individual e estratégias jurídicas sob medida para suas necessidades.",
    },
    {
      numero: "02",
      titulo: "Experiência Comprovada",
      descricao:
        "Mais de duas décadas de atuação com resultados consistentes e clientes satisfeitos.",
    },
    {
      numero: "03",
      titulo: "Transparência Total",
      descricao:
        "Comunicação clara sobre andamento processual, honorários e expectativas realistas.",
    },
    {
      numero: "04",
      titulo: "Compromisso com Resultados",
      descricao:
        "Nossa prioridade é a resolução eficiente do seu caso, buscando sempre o melhor desfecho.",
    },
  ];

  const estatisticas = [
    { valor: "20+", label: "Anos de Experiência" },
    { valor: "5.000+", label: "Casos Atendidos" },
    { valor: "98%", label: "Clientes Satisfeitos" },
  ];

  const createLogo = () => {
    return (
      <>
        <div className="w-14 h-14 bg-logo rounded-sm flex items-center justify-center">
          <Image src="/logo.png" alt="Logo" width={48} height={48} />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl font-serif font-bold text-primary-foreground tracking-wide">
            RKirsten Neto
          </h1>
          <p className="text-xs text-primary-foreground/70 tracking-widest uppercase">
            Sociedade de Advogados
          </p>
        </div>
      </>
    );
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Navbar */}
      <header className="bg-primary shadow-lg py-4 sticky top-0 z-50 w-full">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="flex items-center gap-4">{createLogo()}</div>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden text-primary-foreground hover:text-accent transition p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Navigation */}
          <nav
            className={`absolute md:static top-full left-0 w-full md:w-auto bg-primary md:bg-transparent transition-all duration-300 ${
              menuOpen
                ? "block border-t border-primary-foreground/10"
                : "hidden md:block"
            }`}
          >
            <ul className="flex flex-col md:flex-row md:items-center md:gap-8 text-primary-foreground font-medium p-6 md:p-0">
              {[
                { href: "#sobre", label: "Sobre" },
                { href: "#atuacao", label: "Áreas" },
                { href: "#diferenciais", label: "Diferenciais" },
                { href: "#contato", label: "Contato" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block py-3 md:py-0 hover:text-accent transition-colors duration-200 text-sm tracking-wide"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-4 md:mt-0">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold hover:bg-accent/90 transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  Agende uma Consulta
                  <ChevronRight className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/elegant-dark-marble-texture.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative container mx-auto px-6 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-6">
              Excelência Jurídica desde 2004
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
              Advocacia com compromisso e dedicação
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed">
              Soluções jurídicas personalizadas para proteger seus direitos e
              interesses com a seriedade e competência que você merece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 font-semibold hover:bg-accent/90 transition-all duration-200"
              >
                Fale Conosco
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="#atuacao"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 font-semibold hover:bg-primary-foreground/10 transition-all duration-200"
              >
                Áreas de Atuação
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="bg-secondary py-12 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {estatisticas.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.valor}
                </p>
                <p className="text-muted-foreground text-sm tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 md:py-28 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
                Sobre o Escritório
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Tradição e inovação a serviço da Justiça
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Com mais de 20 anos de experiência, o escritório RKirsten Neto
                Advogados consolidou-se como referência em advocacia de
                excelência em São Paulo. Nossa equipe combina conhecimento
                técnico aprofundado com um atendimento humanizado e
                personalizado.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Acreditamos que cada cliente merece atenção individual e
                estratégias jurídicas desenvolvidas especificamente para suas
                necessidades. Nosso compromisso é com resultados concretos e a
                satisfação de quem confia em nosso trabalho.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.instagram.com/r.kirstennetoadvogados?igsh=MXVjbHVkcjhlbjMwMw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-logo text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors duration-200"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                  Siga-nos no Instagram
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                <Image
                  src="/elegant-law-office-interior-with-bookshelves-and-l.jpg"
                  alt="Escritório RKirsten Neto Advogados"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent p-6 hidden md:block">
                <Award className="w-8 h-8 text-accent-foreground mb-2" />
                <p className="text-accent-foreground font-bold text-2xl">20+</p>
                <p className="text-accent-foreground/80 text-sm">
                  Anos de Excelência
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section
        id="atuacao"
        className="bg-secondary py-20 md:py-28 scroll-mt-20"
      >
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Especialidades
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Áreas de Atuação
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Oferecemos assessoria jurídica completa em diversas áreas do
              Direito, sempre com foco na excelência e nos melhores resultados
              para nossos clientes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-8 border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-20 md:py-28 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
                Por que nos escolher
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Nossos Diferenciais
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Construímos nossa reputação com base em valores sólidos e
                compromisso inabalável com a excelência jurídica. Conheça o que
                nos diferencia.
              </p>
              <div className="flex items-center gap-4 p-4 bg-secondary border border-border">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <p className="text-foreground font-medium">
                  Primeira consulta sem compromisso
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {diferenciais.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 p-6 border border-border hover:border-accent/50 transition-colors duration-300"
                >
                  <span className="font-serif text-4xl font-bold text-accent/30">
                    {item.numero}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                      {item.titulo}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.descricao}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6 text-balance">
            Precisa de assistência jurídica?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Entre em contato conosco para uma avaliação do seu caso. Estamos
            prontos para defender seus direitos com dedicação e competência.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-10 py-4 font-semibold hover:bg-accent/90 transition-all duration-200"
          >
            Agende sua Consulta
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 md:py-28 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Fale Conosco
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Entre em Contato
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Estamos à disposição para atender às suas necessidades jurídicas.
              Agende uma consulta ou tire suas dúvidas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: MapPin,
                    title: "Endereço",
                    content:
                      "R. Tuiuti, 1897\nCidade Mãe do Céu\nSão Paulo - SP\n03307-005",
                  },
                  {
                    icon: Phone,
                    title: "Telefone",
                    content: "(11) 98224-0004\n(11) 95917-8000",
                  },
                  {
                    icon: Mail,
                    title: "E-mail",
                    content:
                      "mariana.rossi.adv@gmail.com\nparecerjuridico@gmail.com",
                  },
                  {
                    icon: Clock,
                    title: "Horário",
                    content: "Segunda à Sexta\n9h às 18h",
                  },
                ].map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="p-6 bg-secondary border border-border"
                    >
                      <Icon className="w-6 h-6 text-accent mb-4" />
                      <h3 className="font-semibold text-foreground mb-2">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground text-sm whitespace-pre-line">
                        {info.content}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/5511982240004"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-logo text-primary-foreground p-4 font-semibold hover:bg-primary/90 transition-colors duration-200 w-full"
              >
                <Phone className="w-5 h-5" />
                Fale pelo WhatsApp
              </a>
            </div>

            {/* Mapa */}
            <div className="h-[400px] lg:h-full min-h-[400px]">
              <iframe
                className="w-full h-full border border-border"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2112.987780716502!2d-46.5755556151009!3d-23.541973180904154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5ec18b3b7e39%3A0xe447f6cc0bdb7a99!2sR.%20Tuiuti%2C%201896%20-%20Cidade%20M%C3%A3e%20do%20C%C3%A9u%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003307-005!5e0!3m2!1spt-BR!2sbr!4v1743223831005!5m2!1spt-BR!2sbr"
                allowFullScreen
                loading="lazy"
                title="Localização do escritório"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">{createLogo()}</div>
            <p className="text-primary-foreground/70 text-sm text-center">
              &copy; {getYear} RKirsten Neto Advogados. Todos os direitos
              reservados.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/r.kirstennetoadvogados?igsh=MXVjbHVkcjhlbjMwMw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
