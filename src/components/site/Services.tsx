type Service = {
  title: string;
  price: string;
  badge: string;
  description: string;
  items: string[];
  highlight?: boolean;
};

const services: Service[] = [
  {
    title: "Consultanță Online pentru Apartamente",
    price: "de la 700 lei",
    badge: "Disponibilă în toată România",
    description:
      "Pentru proprietarii din orice oraș care vor recomandări clare pe baza pozelor, înainte să investească în decor, mobilier sau fotografii.",
    items: [
      "analiză poze apartament",
      "ce trebuie scos",
      "ce trebuie schimbat",
      "ce lipsește",
      "recomandări de culori, textile, lumină și decor",
      "priorități de buget",
      "sugestii pentru poze mai bune",
      "recomandări pentru anunț",
    ],
  },
  {
    title: "Vizită Diagnostic",
    price: "de la 400 lei",
    badge: "Sibiu & Alba",
    description:
      "Pentru proprietarii care vor să știe ce trebuie schimbat înainte să investească.",
    items: [
      "vizită la apartament",
      "recomandări clare",
      "ce trebuie scos",
      "ce trebuie reparat",
      "ce merită cumpărat",
      "priorități de buget",
      "sumar cu recomandări principale",
    ],
  },
  {
    title: "Styling + Poze pentru Anunț",
    price: "de la 1.500 lei",
    badge: "Cel mai practic",
    description:
      "Pentru apartamente care sunt aproape gata, dar au nevoie să arate mai bine în poze.",
    items: [
      "aranjarea apartamentului pentru fotografiere",
      "eliminarea obiectelor care încarcă spațiul",
      "styling cu ce există deja",
      "fotografii luminoase pentru anunț",
      "editare de bază",
      "ordine recomandată a pozelor",
      "titlu și descriere scurtă pentru anunț",
    ],
    highlight: true,
  },
  {
    title: "Refresh Complet",
    price: "de la 2.500 lei + buget produse",
    badge: "Pentru schimbări vizibile",
    description:
      "Pentru apartamente care au nevoie de schimbări mai clare înainte de listare.",
    items: [
      "plan de refresh decorativ",
      "listă de cumpărături",
      "recomandări de culori, textile, lumină și decor",
      "styling final",
      "fotografii pentru anunț",
      "text pentru Booking, Airbnb, OLX sau Imobiliare",
      "checklist de pregătire pentru oaspeți sau vizionări",
    ],
  },
];

export function Services() {
  return (
    <section id="servicii" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl text-foreground sm:text-4xl lg:text-5xl">Servicii</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Alege varianta potrivită în funcție de stadiul apartamentului: consultanță online, vizită diagnostic, styling pentru poze sau refresh complet.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className={`group flex flex-col rounded-3xl border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card lg:p-8 ${
                s.highlight ? "border-sage/60 ring-1 ring-sage/40" : "border-border"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                    s.highlight
                      ? "bg-sage/20 text-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {s.badge}
                </span>
                <span className="text-sm font-medium text-terracotta">{s.price}</span>
              </div>
              <h3 className="mt-5 text-2xl text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm text-foreground">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-sage"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="leading-relaxed">{it}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-7 inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Solicită acest pachet
              </a>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
          Prețurile nu includ produsele, mobilierul, materialele, transportul sau manopera altor furnizori. Acestea se stabilesc separat, în funcție de apartament și buget.
        </p>
      </div>
    </section>
  );
}
