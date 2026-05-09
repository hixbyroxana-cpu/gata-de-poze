import bedroomBefore from "@/assets/portfolio-bedroom-before.jpg";
import bedroomAfter from "@/assets/portfolio-bedroom.jpg";
import livingBefore from "@/assets/portfolio-living-before.jpg";
import livingAfter from "@/assets/portfolio-living-after.jpg";
import bathBefore from "@/assets/portfolio-bath-before.jpg";
import bathAfter from "@/assets/portfolio-bath-after.jpg";
import kitchenBefore from "@/assets/portfolio-kitchen-before.jpg";
import kitchenAfter from "@/assets/portfolio-kitchen-after.jpg";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

type Item = {
  before: string;
  after: string;
  title: string;
  city: string;
  rentalType: string;
  description: string;
};

const items: Item[] = [
  { before: bedroomBefore, after: bedroomAfter, title: "Dormitor înainte / după", city: "Sibiu", rentalType: "Booking", description: "Dormitor luminos pregătit pentru oaspeți, cu textile noi și lumină caldă." },
  { before: livingBefore, after: livingAfter, title: "Living înainte / după", city: "Alba Iulia", rentalType: "Termen lung", description: "Living curat și aerisit, gata pentru vizionări și anunț." },
  { before: bathBefore, after: bathAfter, title: "Baie înainte / după", city: "Sibiu", rentalType: "Airbnb", description: "Baie reîmprospătată cu detalii simple care arată îngrijit în poze." },
  { before: kitchenBefore, after: kitchenAfter, title: "Bucătărie înainte / după", city: "Alba Iulia", rentalType: "Booking", description: "Bucătărie ordonată, cu accente naturale și styling pentru fotografie." },
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
            Glisează slider-ul pe fiecare imagine pentru a compara cum arăta apartamentul înainte și după pregătirea pentru poze și anunț.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.map((it) => (
            <article
              key={it.title}
              className="overflow-hidden rounded-3xl border border-border bg-card transition-all hover:shadow-card"
            >
              <BeforeAfterSlider
                beforeImage={it.before}
                afterImage={it.after}
                beforeAlt={`${it.title} – înainte`}
                afterAlt={`${it.title} – după`}
              />
              <div className="p-6">
                <h3 className="text-lg text-foreground">{it.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                  {it.city} · {it.rentalType}
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
