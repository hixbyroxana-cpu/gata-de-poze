import heroImg from "@/assets/hero-living.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className="space-y-7">
          <span className="inline-flex items-center rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
            Styling • Poze • Consultanță
          </span>
          <h1 className="font-serif text-3xl leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
            Apartamentul tău, pregătit pentru poze și închiriere
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Styling, poze, refresh decorativ și consultanță pentru proprietari care vor să își prezinte apartamentul mai bine — local în Sibiu și Alba Iulia, online în toată România.
          </p>
          <p className="max-w-xl border-l-2 border-sage pl-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
            Fiecare apartament este diferit, așa că recomandările se adaptează bugetului disponibil. Începem cu schimbările care au cel mai mare impact în poze și în prima impresie.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:shadow-card"
            >
              Cere o evaluare
            </a>
            <a
              href="#servicii"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Vezi serviciile
            </a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 pt-4 text-sm text-muted-foreground">
            {["Sibiu & Alba Iulia", "Online în toată România", "Pentru Booking, Airbnb și chirii pe termen lung"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                {t}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-secondary/60 blur-2xl" />
          <img
            src={heroImg}
            alt="Apartament luminos și pregătit pentru închiriere"
            width={1536}
            height={1024}
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card"
          />
        </div>
      </div>
    </section>
  );
}
