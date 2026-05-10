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
    title: "Consultanță Vizuală Online",
    price: "de la 500 lei",
    badge: "Disponibilă în toată România",
    description:
      "Pentru proprietarii din orice oraș care vor idei clare și o direcție vizuală înainte să investească.",
    items: [
      "analiză poze apartament",
      "raport scurt cu recomandări",
      "ce trebuie scos, schimbat sau adăugat",
      "priorități de buget",
      "sugestii pentru poze și anunț",
      "2–4 imagini demonstrative",
    ],
  },
  {
    title: "Plan de Refresh + Listă de Cumpărături",
    price: "de la 1.200 lei",
    badge: "Plan etapizat",
    description:
      "Pentru proprietarii care vor să știe exact ce să cumpere și cum să transforme apartamentul etapizat.",
    items: [
      "analiză completă",
      "raport detaliat",
      "4–8 imagini demonstrative",
      "direcție de stil și paletă de culori",
      "listă de cumpărături",
      "linkuri către produse recomandate",
      "priorități: esențial, opțional, premium",
    ],
  },
  {
    title: "Styling + Poze pentru Anunț",
    price: "de la 1.500 lei",
    badge: "Cel mai practic",
    description:
      "Pentru apartamente aproape gata, care au nevoie de styling, ordine și poze mai bune.",
    items: [
      "vizită la apartament",
      "styling cu ce există deja",
      "eliminarea obiectelor care încarcă spațiul",
      "pregătire pentru fotografiere",
      "fotografii luminoase pentru anunț",
      "editare de bază",
      "ordine recomandată a pozelor",
      "titlu și descriere scurtă pentru anunț",
    ],
    highlight: true,
  },
  {
    title: "Refresh Complet la Fața Locului",
    price: "de la 3.500 lei + buget produse",
    badge: "Pentru schimbări vizibile",
    description:
      "Pentru proprietarii din Sibiu, Alba Iulia și împrejurimi care vor ca apartamentul să fie pregătit complet pentru poze, anunțuri sau vizionări.",
    items: [
      "plan vizual de refresh",
      "listă de cumpărături",
      "ajutor cu selecția produselor",
      "styling și decorare la fața locului",
      "pregătire finală pentru poze",
      "recomandări pentru anunț",
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
            Alege varianta potrivită în funcție de stadiul apartamentului: direcție vizuală, plan de refresh, styling pentru poze sau pregătire completă la fața locului.
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
              <div className="mt-auto pt-7">
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:shadow-card"
                >
                  Solicită acest pachet
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
          Imaginile demonstrative sunt orientative și ilustrează direcția propusă de styling, decor și rearanjare. Produsele, mobilierul, materialele, transportul și manopera altor furnizori se achită separat.
        </p>
        <p className="mx-auto mt-3 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
          La cerere, pot ajuta și cu selecția sau comandarea produselor, pe baza unui buget aprobat în prealabil.
        </p>
      </div>
    </section>
  );
}
