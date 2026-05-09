const cols = [
  {
    title: "Pentru Booking și Airbnb",
    text:
      "Punem accent pe atmosferă, detalii memorabile, poze atractive și o experiență plăcută pentru oaspeți.",
    items: [
      "decor mai fotogenic",
      "pat și baie pregătite ca pentru oaspeți",
      "colțuri frumoase pentru poze",
      "recomandări pentru descrierea anunțului",
      "checklist pentru primirea oaspeților",
      "senzație de curat, cald și primitor",
    ],
    accent: "bg-terracotta/10 text-terracotta",
    label: "Regim hotelier",
  },
  {
    title: "Pentru chirie pe termen lung",
    text:
      "Punem accent pe curățenie vizuală, spațiu aerisit, funcționalitate și o prezentare care atrage chiriași serioși.",
    items: [
      "apartament mai luminos și aerisit",
      "eliminarea obiectelor vechi sau personale",
      "recomandări practice de mobilier și depozitare",
      "poze clare pentru anunț",
      "pregătire pentru vizionări",
      "aspect neutru, modern și ușor de locuit",
    ],
    accent: "bg-sage/20 text-foreground",
    label: "Termen lung",
  },
];

export function Rentals() {
  return (
    <section id="pentru-cine" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl text-foreground sm:text-4xl lg:text-5xl">
            Pentru regim hotelier sau chirie pe termen lung
          </h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {cols.map((c) => (
            <div
              key={c.title}
              className="rounded-3xl border border-border bg-cream/50 p-8 transition-shadow hover:shadow-soft lg:p-10"
            >
              <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${c.accent}`}>
                {c.label}
              </span>
              <h3 className="mt-5 text-2xl text-foreground sm:text-3xl">{c.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{c.text}</p>
              <ul className="mt-6 space-y-2.5">
                {c.items.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                    <span className="leading-relaxed">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
