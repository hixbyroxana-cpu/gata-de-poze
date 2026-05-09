import bedroom from "@/assets/portfolio-bedroom.jpg";
import living from "@/assets/portfolio-living.jpg";
import bath from "@/assets/portfolio-bath.jpg";
import kitchen from "@/assets/portfolio-kitchen.jpg";
import airbnb from "@/assets/portfolio-airbnb.jpg";
import longterm from "@/assets/portfolio-longterm.jpg";

type Item = {
  image: string;
  title: string;
  city: string;
  rentalType: string;
  description: string;
};

const items: Item[] = [
  { image: bedroom, title: "Înainte / După – Dormitor", city: "Sibiu", rentalType: "Booking", description: "Dormitor luminos pregătit pentru oaspeți, cu textile noi și lumină caldă." },
  { image: living, title: "Înainte / După – Living", city: "Alba Iulia", rentalType: "Termen lung", description: "Living curat și aerisit, gata pentru vizionări și anunț." },
  { image: bath, title: "Înainte / După – Baie", city: "Sibiu", rentalType: "Airbnb", description: "Baie reîmprospătată cu detalii simple care arată îngrijit în poze." },
  { image: kitchen, title: "Înainte / După – Bucătărie", city: "Alba Iulia", rentalType: "Booking", description: "Bucătărie ordonată, cu accente naturale și styling pentru fotografie." },
  { image: airbnb, title: "Apartament pentru Booking", city: "Sibiu", rentalType: "Regim hotelier", description: "Atmosferă caldă, detalii fotogenice și colțuri pregătite pentru oaspeți." },
  { image: longterm, title: "Apartament pentru chirie pe termen lung", city: "Alba Iulia", rentalType: "Termen lung", description: "Aspect neutru și modern, ușor de locuit, atractiv pentru chiriași serioși." },
];

export function Portfolio() {
  return (
    <section id="portofoliu" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl text-foreground sm:text-4xl lg:text-5xl">
            Portofoliu înainte și după
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Exemplele de proiecte vor fi adăugate pe măsură ce apartamentele sunt finalizate. Secțiunea este pregătită pentru imagini înainte/după, oraș, tip de închiriere și descriere scurtă.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.title}
              className="group overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={it.image}
                  alt={it.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                  {it.rentalType}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg text-foreground">{it.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                  {it.city}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {it.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
