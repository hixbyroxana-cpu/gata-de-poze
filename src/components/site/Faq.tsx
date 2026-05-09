import { useState } from "react";

const faqs = [
  { q: "Oferi consultanță online?", a: "Da. Dacă apartamentul este în alt oraș, pot analiza pozele online și pot trimite recomandări clare pentru styling, refresh, decor, poze și anunț." },
  { q: "Faci renovări complete?", a: "Nu ofer proiecte tehnice sau renovări complete. Mă ocup de partea vizuală, styling, refresh decorativ, pregătire pentru poze și recomandări practice." },
  { q: "Produsele sunt incluse în preț?", a: "Nu. Produsele, mobilierul, materialele și manopera altor furnizori se plătesc separat." },
  { q: "Pot lucra cu un buget mic?", a: "Da, dar recomandările vor fi prioritizate. Uneori cele mai bune schimbări sunt decluttering-ul, lumina, textilele și pozele mai bune." },
  { q: "Mă ajuți și cu anunțul?", a: "Da, pot include titlu, descriere scurtă și recomandări pentru ordinea pozelor." },
  { q: "Lucrezi doar local?", a: "Pentru styling, poze și vizite lucrez local în Sibiu, Alba Iulia și împrejurimi. Pentru audit și plan de refresh pot lucra online cu proprietari din toată România." },
  { q: "Pot folosi serviciul și pentru chirie pe termen lung?", a: "Da. Serviciul este potrivit atât pentru Booking și Airbnb, cât și pentru proprietari care vor să atragă chiriași serioși pe termen lung." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <h2 className="text-center text-3xl text-foreground sm:text-4xl lg:text-5xl">
          Întrebări frecvente
        </h2>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-2xl border border-border bg-card transition-all"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium text-foreground">{f.q}</span>
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-transform ${isOpen ? "rotate-45" : ""}`}>
                    <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 2v8M2 6h8" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
