const cards = [
  {
    title: "Servicii locale",
    text: "Sibiu, Alba Iulia și zonele apropiate.",
    items: ["vizite", "styling", "poze", "refresh decorativ"],
  },
  {
    title: "Consultanță online",
    text: "Disponibilă pentru proprietari din orice oraș din România.",
    items: ["analiză poze", "plan de îmbunătățire", "recomandări de decor", "sugestii pentru anunț"],
  },
];

export function Area() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl text-foreground sm:text-4xl lg:text-5xl">
            Local în Sibiu și Alba. Online în toată România.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Pentru proprietarii din Sibiu, Alba Iulia și împrejurimi ofer vizite, styling, refresh decorativ și fotografii pentru anunț. Pentru proprietarii din alte orașe ofer consultanță online pe baza pozelor, cu recomandări clare despre ce trebuie scos, schimbat, cumpărat și îmbunătățit înainte de listare.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {cards.map((c) => (
            <div key={c.title} className="rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-soft">
              <h3 className="text-2xl text-foreground">{c.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{c.text}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {c.items.map((i) => (
                  <span key={i} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
