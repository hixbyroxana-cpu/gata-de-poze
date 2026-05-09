import { useState, type FormEvent } from "react";

const propertyTypes = ["garsonieră", "apartament", "casă", "pensiune mică"];
const rentalTypes = ["Booking/Airbnb", "termen lung", "încă nu știu"];
const serviceWanted = [
  "consultanță online",
  "vizită diagnostic",
  "styling + poze",
  "refresh complet",
  "nu știu încă",
];

const fieldClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/10";
const labelClass = "block text-sm font-medium text-foreground";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:px-8">
        <div>
          <h2 className="text-3xl text-foreground sm:text-4xl lg:text-5xl">Cere o evaluare</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Trimite câteva detalii despre apartament și îți răspund cu următorul pas potrivit: consultanță online, vizită diagnostic, styling sau refresh complet.
          </p>
          <div className="mt-8 space-y-4 rounded-2xl border border-border bg-background/60 p-6">
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Zona de servicii</p>
              <p className="mt-1 text-foreground">Sibiu • Alba Iulia • împrejurimi</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Online</p>
              <p className="mt-1 text-foreground">Toată România</p>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-10">
          {submitted ? (
            <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sage/30">
                <svg className="h-8 w-8 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl text-foreground">Mulțumesc!</h3>
              <p className="mt-3 max-w-sm text-muted-foreground">
                Te contactez în curând pentru detalii.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className={labelClass} htmlFor="nume">Nume</label>
                  <input id="nume" required className={fieldClass} placeholder="Numele tău" />
                </div>
                <div className="space-y-2">
                  <label className={labelClass} htmlFor="telefon">Telefon</label>
                  <input id="telefon" type="tel" required className={fieldClass} placeholder="07xx xxx xxx" />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className={labelClass} htmlFor="email">Email</label>
                  <input id="email" type="email" required className={fieldClass} placeholder="email@exemplu.ro" />
                </div>
                <div className="space-y-2">
                  <label className={labelClass} htmlFor="oras">Oraș</label>
                  <input id="oras" required className={fieldClass} placeholder="Sibiu, Alba Iulia, ..." />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className={labelClass} htmlFor="tipProprietate">Tip proprietate</label>
                  <select id="tipProprietate" className={fieldClass} defaultValue="">
                    <option value="" disabled>Alege...</option>
                    {propertyTypes.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className={labelClass} htmlFor="tipInchiriere">Tip închiriere</label>
                  <select id="tipInchiriere" className={fieldClass} defaultValue="">
                    <option value="" disabled>Alege...</option>
                    {rentalTypes.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className={labelClass} htmlFor="serviciu">Serviciu dorit</label>
                <select id="serviciu" className={fieldClass} defaultValue="">
                  <option value="" disabled>Alege...</option>
                  {serviceWanted.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <span className={labelClass}>Ai poze cu apartamentul?</span>
                  <div className="flex gap-3 pt-1">
                    {["Da", "Nu"].map((v) => (
                      <label key={v} className="inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-sm has-[:checked]:border-foreground has-[:checked]:bg-foreground has-[:checked]:text-primary-foreground">
                        <input type="radio" name="poze" value={v} className="sr-only" />
                        {v}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className={labelClass} htmlFor="buget">Buget estimativ pentru schimbări</label>
                  <input id="buget" className={fieldClass} placeholder="ex: 2.000 lei" />
                </div>
              </div>
              <div className="space-y-2">
                <label className={labelClass} htmlFor="mesaj">Mesaj</label>
                <textarea id="mesaj" rows={4} className={fieldClass} placeholder="Spune-mi câteva detalii despre apartament..." />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:shadow-card"
              >
                Trimite cererea
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
