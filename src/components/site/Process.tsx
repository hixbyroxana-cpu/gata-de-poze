const steps = [
  {
    title: "Trimiți poze sau programezi o vizită",
    text:
      "Îmi trimiți câteva poze cu apartamentul sau stabilim o vizită dacă este în Sibiu, Alba Iulia sau apropiere.",
  },
  {
    title: "Stabilim scopul",
    text:
      "Vedem dacă apartamentul este pentru Booking, Airbnb, chirie pe termen lung sau încă nu ai decis.",
  },
  {
    title: "Primești recomandări clare",
    text:
      "Îți spun ce trebuie scos, schimbat, cumpărat sau îmbunătățit, în funcție de buget.",
  },
  {
    title: "Pregătim spațiul",
    text:
      "În funcție de pachet, facem styling, refresh decorativ, pregătire pentru poze sau consultanță online.",
  },
  {
    title: "Primești materialele finale",
    text:
      "Primești fotografii, recomandări pentru anunț, ordine poze și text de listare, dacă este inclus în pachet.",
  },
];

export function Process() {
  return (
    <section id="cum-functioneaza" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl text-foreground sm:text-4xl lg:text-5xl">Cum funcționează</h2>
        </div>
        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="font-serif text-3xl text-terracotta">
                0{i + 1}
              </span>
              <h3 className="mt-3 text-lg text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
