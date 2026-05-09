import portrait from "@/assets/about-portrait.jpg";

const points = [
  "abordare practică",
  "recomandări clare",
  "atenție la poze și prezentare",
  "soluții adaptate bugetului",
  "focus pe închiriere, nu pe design complicat",
];

export function About() {
  return (
    <section id="despre" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:px-8">
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-sage/20 blur-2xl" />
          <img
            src={portrait}
            alt="Fondatoare Gata de Închiriat"
            loading="lazy"
            width={800}
            height={1024}
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-card"
          />
        </div>
        <div>
          <h2 className="text-3xl text-foreground sm:text-4xl lg:text-5xl">Despre mine</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Sunt pasionată de spații frumoase, luminoase și bine pregătite pentru oaspeți sau chiriași. Îmi place să transform apartamente obișnuite în locuri care arată îngrijit, primitor și atractiv în poze. Serviciile mele sunt practice, clare și gândite pentru proprietari care vor rezultate vizibile fără renovări complicate.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Nu pornesc de la ideea că trebuie schimbat tot. Mă uit la ce există deja, ce poate fi păstrat, ce trebuie eliminat și unde merită investit pentru cel mai mare impact vizual.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 rounded-2xl bg-background px-4 py-3 text-sm text-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
