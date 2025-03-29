"use client";
import Image from "next/image";
import ImageProject from "@/../public/image.png";
import ImageLogo from "@/../public/logo.png";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const getYear = new Date().getFullYear();

  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <header className="bg-black shadow-md py-4 sticky top-0 z-50 w-full">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo e Nome */}
          <div className="flex items-center gap-4">
            <Image
              src={ImageLogo}
              alt="Logo"
              className="rounded-lg shadow-xl"
              width={80}
              height={80}
            />
            <h1 className="text-xl sm:text-2xl font-bold text-gray-400">
              RKirsten Neto Advogados
            </h1>
          </div>

          {/* Ícone do Menu (Mobile) */}
          <button
            className="block md:hidden text-gray-400 hover:text-white transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Menu Navegação */}
          <nav
            className={`absolute md:static top-24 left-0 w-full md:w-auto bg-gray-500 md:bg-transparent md:flex items-center transition-all duration-300 ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-6 text-white font-medium text-lg md:text-base p-6 md:p-0">
              <li>
                <a
                  href="#sobre"
                  className="block py-2 px-4 hover:text-blue-500 transition"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#atuacao"
                  className="block py-2 px-4 hover:text-blue-500 transition"
                >
                  Áreas
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="block py-2 px-4 hover:text-blue-500 transition"
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Introdução */}
      <section className="bg-blue-800 text-white text-center py-20 flex flex-col md:flex-row items-center justify-center px-6">
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Advocacia com excelência e compromisso
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Soluções jurídicas personalizadas para proteger seus direitos e
            interesses com a dedicação que você merece.
          </p>
          <a
            href="#contato"
            className="bg-white text-blue-900 py-3 px-8 rounded-full font-semibold shadow-md hover:bg-gray-100 transition duration-300"
          >
            Fale Conosco
          </a>
        </div>
        <div className="mt-10 md:mt-0 md:ml-10 max-w-xs md:max-w-sm">
          <Image
            src={ImageProject}
            alt="Imagem de uma mesa"
            className="rounded-lg shadow-xl"
          />
        </div>
      </section>

      <span className="w-52"></span>

      {/* Sobre */}
      <section id="sobre" className="container mx-auto py-16 px-6 scroll-mt-24">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
          Sobre Nós
        </h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto leading-relaxed">
          Com mais de 20 anos de experiência, oferecemos um atendimento
          personalizado e estratégico para garantir os melhores resultados para
          nossos clientes.
        </p>
      </section>

      {/* Áreas de Atuação */}
      <section id="atuacao" className="bg-gray-100 py-16 scroll-mt-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
            Áreas de Atuação
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Direito Civil",
                description:
                  "Protegemos seus direitos em contratos, indenizações e disputas familiares.",
              },
              {
                title: "Direito Trabalhista",
                description:
                  "Defesa de empregados e empregadores em questões trabalhistas.",
              },
              {
                title: "Direito Previdenciário",
                description:
                  "Aposentadorias, pensões e benefícios previdenciários",
              },
            ].map((area, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-700">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="bg-white py-20 px-6 scroll-mt-24">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold mb-4 text-blue-900">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Estamos à disposição para atender às suas necessidades jurídicas.
          </p>

          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10">
            {/* Informações de Contato */}
            <div className="text-left max-w-lg">
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">
                Informações de Contato
              </h3>
              <p className="text-gray-600 mb-6">
                Entre em contato conosco por telefone, e-mail ou visite nosso
                escritório.
              </p>

              <div className="space-y-4 text-gray-700">
                {[
                  {
                    icon: "📍",
                    title: "Endereço",
                    content: `R. Tuiuti, 1897, Cidade Mãe do Céu
                              São Paulo - SP, 03307-005`,
                  },
                  {
                    icon: "📞",
                    title: "Telefone",
                    content: "(11) 98224-0004\n(11) 95917-8000",
                  },
                  {
                    icon: "📧",
                    title: "E-mail",
                    content:
                      "mariana.rossi.adv@gmail.com\n parecerjuridico@gmail.com",
                  },
                  {
                    icon: "🕒",
                    title: "Horário de Atendimento",
                    content: "Segunda à Sexta: 9h às 18h",
                  },
                ].map((info, index) => (
                  <div key={index} className="flex items-start">
                    <span className="mr-3 text-2xl">{info.icon}</span>
                    <div>
                      <strong>{info.title}</strong>
                      <p className="whitespace-pre-line">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mapa Google */}
            <div className="w-full md:w-1/2">
              <iframe
                className="w-full h-108 rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2112.987780716502!2d-46.5755556151009!3d-23.541973180904154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5ec18b3b7e39%3A0xe447f6cc0bdb7a99!2sR.%20Tuiuti%2C%201896%20-%20Cidade%20M%C3%A3e%20do%20C%C3%A9u%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003307-005!5e0!3m2!1spt-BR!2sbr!4v1743223831005!5m2!1spt-BR!2sbr"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-blue-900 text-white text-center py-4">
        <p>
          &copy; {getYear} RKirsten Neto Advogados - Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  );
}
