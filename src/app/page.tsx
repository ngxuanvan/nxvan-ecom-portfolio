import {
  ArrowRight,
  ChartLineUp,
  Check,
  EnvelopeSimple,
  Package,
  Pulse,
  ShoppingCart,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "Northline Atelier",
    type: "Luxury apparel migration",
    image: "https://picsum.photos/seed/northline-atelier-commerce/980/720",
    result: "+28.6%",
    label: "checkout completion",
  },
  {
    name: "Fjord Pantry",
    type: "Subscription grocery rebuild",
    image: "https://picsum.photos/seed/fjord-pantry-storefront/980/720",
    result: "-41.3%",
    label: "bundle friction",
  },
  {
    name: "Kanso Supply",
    type: "B2B catalog operating system",
    image: "https://picsum.photos/seed/kanso-supply-b2b/980/720",
    result: "3.7x",
    label: "repeat order speed",
  },
];

const services = [
  "Storefront architecture",
  "Conversion diagnostics",
  "Merchandising systems",
  "Checkout and account flows",
  "Retention experiments",
  "Analytics instrumentation",
];

const metrics = [
  ["47.2%", "average PDP scroll lift"],
  ["18", "markets launched"],
  ["6.4s", "faster repeat ordering"],
];

export default function Home() {
  return (
    <main className="min-h-[100dvh] overflow-hidden bg-[#f7f5f0] text-stone-950">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <a href="#top" className="font-mono text-sm uppercase tracking-normal">
          Nx Van
        </a>
        <nav
          className="hidden items-center gap-6 text-sm text-stone-600 md:flex"
          aria-label="Primary navigation"
        >
          <a className="transition hover:text-stone-950" href="#work">
            Work
          </a>
          <a className="transition hover:text-stone-950" href="#services">
            Services
          </a>
          <a className="transition hover:text-stone-950" href="#contact">
            Contact
          </a>
        </nav>
        <Button asChild size="sm" variant="secondary">
          <a href="mailto:hello@nxvan.com">
            <EnvelopeSimple size={16} weight="bold" />
            hello@nxvan.com
          </a>
        </Button>
      </header>

      <section
        id="top"
        className="mx-auto grid min-h-[calc(100dvh-84px)] w-full max-w-7xl items-center gap-10 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8"
      >
        <div className="max-w-3xl">
          <p className="mb-6 inline-flex items-center gap-2 border-y border-stone-300 py-2 font-mono text-xs uppercase text-stone-600">
            <Pulse size={14} weight="fill" className="text-emerald-700" />
            Commerce design, engineering, and growth systems
          </p>
          <h1 className="text-4xl font-semibold leading-none tracking-tight text-stone-950 md:text-6xl">
            Ecommerce portfolios should prove the store can think.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-stone-600 md:text-lg">
            I build headless storefronts, merchandising tools, and retention
            workflows for brands that need buying paths to feel fast, exact,
            and quietly persuasive.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#work">
                View selected work
                <ArrowRight size={17} weight="bold" />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="#contact">Discuss a build</a>
            </Button>
          </div>
        </div>

        <div className="relative min-h-[520px] w-full">
          <div className="absolute right-0 top-0 h-[68%] w-[86%] overflow-hidden rounded-md border border-stone-300 bg-white shadow-[0_24px_70px_-45px_rgba(28,25,23,0.55)]">
            <Image
              src="https://picsum.photos/seed/nxvan-commerce-hero/960/820"
              alt="Editorial ecommerce product photography used as portfolio cover art"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 86vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-5 left-0 w-[76%] border border-stone-300 bg-[#fbfaf7]/90 p-5 shadow-[0_22px_60px_-45px_rgba(28,25,23,0.7)] backdrop-blur">
            <div className="flex items-center justify-between border-b border-stone-200 pb-4">
              <div>
                <p className="font-mono text-xs uppercase text-stone-500">
                  Live audit
                </p>
                <p className="mt-1 text-lg font-semibold">Cart recovery map</p>
              </div>
              <ShoppingCart size={26} weight="duotone" />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-4">
              {metrics.map(([value, label]) => (
                <div key={label}>
                  <p className="font-mono text-xl font-semibold">{value}</p>
                  <p className="mt-1 text-xs leading-5 text-stone-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="bg-stone-950 py-20 text-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs uppercase text-stone-400">
                Selected work
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Builds with commercial pressure, not portfolio theater.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
              {projects.map((project, index) => (
                <article
                  key={project.name}
                  className={`group overflow-hidden border border-white/10 bg-white/[0.04] ${
                    index === 0 ? "md:row-span-2" : ""
                  }`}
                >
                  <div
                    className={`overflow-hidden ${
                      index === 0 ? "aspect-[4/3]" : "aspect-[16/10]"
                    } relative`}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.name} ecommerce case study visual`}
                      fill
                      sizes={
                        index === 0
                          ? "(min-width: 1024px) 45vw, 100vw"
                          : "(min-width: 1024px) 30vw, 100vw"
                      }
                      className="object-cover opacity-85 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                    />
                  </div>
                  <div className="grid gap-5 p-5 sm:grid-cols-[1fr_auto]">
                    <div>
                      <p className="font-mono text-xs uppercase text-stone-400">
                        {project.type}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold">
                        {project.name}
                      </h3>
                    </div>
                    <div className="sm:text-right">
                      <p className="font-mono text-2xl font-semibold">
                        {project.result}
                      </p>
                      <p className="text-xs text-stone-400">{project.label}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-mono text-xs uppercase text-stone-500">
              Operating range
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              From first impression to second purchase.
            </h2>
          </div>
          <div className="grid gap-3">
            {services.map((service, index) => (
              <div
                key={service}
                className="reveal-row flex items-center justify-between border-t border-stone-300 py-5"
                style={{ "--index": index } as React.CSSProperties}
              >
                <span className="text-lg font-medium">{service}</span>
                <Check size={20} weight="bold" className="text-emerald-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-stone-300 bg-[#ece7dc] py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="min-h-64 border border-stone-300 bg-[#f7f5f0] p-6">
              <Package size={28} weight="duotone" />
              <h3 className="mt-8 text-2xl font-semibold">
                Product detail systems
              </h3>
              <p className="mt-4 leading-7 text-stone-600">
                Modular PDPs for variants, bundles, size logic, review evidence,
                and editorial product stories.
              </p>
            </div>
            <div className="min-h-64 border border-stone-300 bg-stone-950 p-6 text-white">
              <ChartLineUp size={28} weight="duotone" />
              <h3 className="mt-8 text-2xl font-semibold">
                Revenue instrumentation
              </h3>
              <p className="mt-4 leading-7 text-stone-300">
                Events, funnels, cohort reads, and experiment notes that make
                growth decisions traceable.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between border-t border-stone-400 pt-6">
            <Sparkle size={30} weight="duotone" />
            <p className="mt-16 text-2xl font-medium leading-snug">
              The goal is not louder design. It is fewer buying doubts at every
              point where a customer can still leave.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_0.7fr] lg:items-start">
          <div>
            <p className="font-mono text-xs uppercase text-stone-500">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Bring a messy store problem.
            </h2>
            <p className="mt-6 max-w-xl leading-7 text-stone-600">
              I am especially useful when product, design, and revenue questions
              are tangled together and the next build needs to clarify all three.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
