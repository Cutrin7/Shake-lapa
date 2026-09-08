import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Leaf,
  Menu,
  X,
  Ticket,
  Snowflake,
  Zap,
  HeartPulse,
  Star,
  MapPin,
  Clock,
  MessageCircle,
  Navigation,
  Instagram,
} from "lucide-react";

import heroShake from "@/assets/hero-shake.jpg";
import shakesPremium from "@/assets/shakes-premium.jpg";
import chasDetox from "@/assets/chas-detox.jpg";
import waffles from "@/assets/waffles.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shake Lapa — Almoço Saudável e Shakes Nutricionais na Lapa" },
      {
        name: "description",
        content:
          "O point mais saudável da Lapa: shakes cremosos que valem por uma refeição, chás termogênicos e ambiente climatizado. Garanta 20% OFF no seu 1º shake!",
      },
      { property: "og:title", content: "Shake Lapa — Almoço Saudável e Shakes Nutricionais na Lapa" },
      {
        property: "og:description",
        content:
          "Troque o fast-food pesado por um almoço saudável, delicioso e sem culpa. 20% OFF no seu 1º shake!",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/5511999999999?text=Oi!%20Quero%20meu%20cupom%20de%2020%25%20OFF%20no%20meu%201%C2%BA%20shake!%20%F0%9F%A5%A4";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Rua+do+Shake+123+Lapa+Sao+Paulo";

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <a href="#" className="flex items-center gap-2 text-xl font-extrabold text-primary">
            <Leaf className="h-6 w-6" />
            Shake Lapa
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#espaco" className="transition-colors hover:text-primary">O Espaço</a>
            <a href="#cardapio" className="transition-colors hover:text-primary">Cardápio</a>
            <a href="#onde" className="transition-colors hover:text-primary">Onde Estamos</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-cta px-5 py-2 text-sm font-bold text-cta-foreground shadow-md transition-transform duration-200 hover:scale-105 sm:inline-block"
            >
              Garantir Desconto
            </a>
            <button
              className="rounded-md p-2 text-foreground md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menu"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="flex flex-col gap-1 border-t border-border bg-background px-4 py-3 md:hidden">
            {[
              ["O Espaço", "#espaco"],
              ["Cardápio", "#cardapio"],
              ["Onde Estamos", "#onde"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent"
              >
                {label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full bg-cta px-5 py-2.5 text-center text-sm font-bold text-cta-foreground"
            >
              Garantir Desconto
            </a>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
              <MapPin className="h-4 w-4" /> O point mais saudável da Lapa
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Seu Almoço Saudável,{" "}
              <span className="text-primary">Delicioso</span> e{" "}
              <span className="text-primary">Sem Culpa.</span>
            </h1>
            <p className="mt-4 max-w-lg text-lg text-muted-foreground">
              Troque o fast-food pesado por um ambiente climatizado, energia lá
              em cima e shakes incrivelmente cremosos que valem por uma refeição
              completa.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-cta px-8 py-4 text-lg font-bold text-cta-foreground shadow-lg transition-transform duration-200 hover:scale-105"
            >
              <Ticket className="h-5 w-5" />
              Quero 20% OFF no meu 1º Shake
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              Válido apenas para novos clientes. Resgate e use hoje!
            </p>
          </div>
          <div className="relative">
            <img
              src={heroShake}
              alt="Shake cremoso de morango com frutas frescas do Shake Lapa"
              className="w-full rounded-3xl object-cover shadow-2xl"
              width={1024}
              height={1024}
            />
            <div className="absolute -bottom-4 left-4 rounded-2xl bg-card px-5 py-3 shadow-xl">
              <p className="text-sm font-bold text-foreground">Refeição completa no copo</p>
              <p className="text-xs text-muted-foreground">Baixa caloria · Alta proteína</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section id="espaco" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="text-center text-3xl font-extrabold md:text-4xl">
          Por que escolher o <span className="text-primary">Shake Lapa?</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
          Muito mais do que um shake: uma pausa gostosa e saudável no seu dia.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Snowflake,
              title: "Ambiente Climatizado",
              desc: "Perfeito para relaxar no horário de almoço, com ar fresquinho e um espaço acolhedor.",
            },
            {
              icon: Zap,
              title: "Energia e Disposição",
              desc: "Chás termogênicos que aceleram o metabolismo e dão foco para o resto do seu dia.",
            },
            {
              icon: HeartPulse,
              title: "Nutrição Completa",
              desc: "Baixa caloria, alta proteína e sabor surreal. Saúde de verdade em cada copo.",
            },
          ].map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-shadow duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                <b.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{b.title}</h3>
              <p className="mt-2 text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* O QUE SERVIMOS */}
      <section id="cardapio" className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-extrabold md:text-4xl">O que servimos</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            Opções para matar a fome, dar energia e adoçar o dia — tudo dentro da dieta.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                img: shakesPremium,
                title: "Shakes Premium",
                desc: "O almoço no copo, com cremosidade extrema.",
              },
              {
                img: chasDetox,
                title: "Chás Detox & Energia",
                desc: "Para acompanhar e secar.",
              },
              {
                img: waffles,
                title: "Waffles & Bolinhos Proteicos",
                desc: "Opções mastigáveis para a sobremesa sem sair da dieta.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-2xl bg-card shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    width={1024}
                    height={800}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-1 text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="text-center text-3xl font-extrabold md:text-4xl">
          Quem conhece, <span className="text-primary">volta todos os dias!</span>
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Camila R.",
              text: "Nem parece que é saudável de tão gostoso! Virei cliente fiel do shake de morango.",
            },
            {
              name: "Diego M.",
              text: "Almoço aqui quase todo dia. O atendimento é impecável e o ambiente é super agradável.",
            },
            {
              name: "Fernanda L.",
              text: "O chá termogênico me dá uma energia incrível pra tarde de trabalho. Recomendo demais!",
            },
          ].map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="flex gap-1 text-cta">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-foreground">“{t.text}”</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {t.name[0]}
                </div>
                <p className="font-semibold">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section id="onde" className="bg-accent py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-extrabold md:text-4xl">
            Vem pro nosso espaço! Estamos te esperando.
          </h2>
          <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <p className="text-lg font-bold">Rua do Shake, 123 — Lapa</p>
                  <p className="text-muted-foreground">São Paulo/SP · A 2 min do metrô</p>
                </div>
              </div>
              <div className="mt-6 flex items-start gap-3">
                <Clock className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <p className="text-lg font-bold">Seg a Sex: 11h às 15h</p>
                  <p className="text-muted-foreground">Sábado: 10h às 14h</p>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-primary-foreground shadow-lg transition-transform duration-200 hover:scale-105"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chamar no WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary bg-card px-6 py-3.5 font-bold text-primary transition-transform duration-200 hover:scale-105"
                >
                  <Navigation className="h-5 w-5" />
                  Traçar Rota no GPS
                </a>
              </div>
            </div>
            <div className="flex aspect-square flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-primary/40 bg-card p-8 text-center shadow-inner">
              <MapPin className="h-14 w-14 text-primary" />
              <p className="text-lg font-bold">Estamos bem no coração da Lapa</p>
              <p className="text-sm text-muted-foreground">
                Toque em “Traçar Rota no GPS” para abrir o mapa no seu celular.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center">
          <a href="#" className="flex items-center gap-2 text-lg font-extrabold text-primary">
            <Leaf className="h-5 w-5" />
            Shake Lapa
          </a>
          <a
            href="https://instagram.com/shake.lapa"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <Instagram className="h-4 w-4" /> @shake.lapa
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Fale com a gente
          </a>
          <p className="text-xs text-muted-foreground">
            © 2026 Shake Lapa. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
