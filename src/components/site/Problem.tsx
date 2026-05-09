const issues = [
  "poze întunecate sau neclare",
  "mobilă veche care încarcă spațiul",
  "prea multe obiecte personale",
  "textile, culori sau decor care nu se potrivesc",
  "lipsă de atmosferă",
  "anunț care nu scoate în evidență avantajele apartamentului",
  "apartament care pare mai mic sau mai obosit decât este în realitate",
];

export function Problem() {
  return (
    <section className="border-t border-border bg-background py-14 lg:py-20">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl text-foreground sm:text-4xl lg:text-5xl">
            De ce unele apartamente nu se închiriază ușor?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Multe apartamente bune nu se închiriază la adevăratul lor potențial pentru că pozele sunt întunecate, spațiul pare încărcat sau decorul nu transmite încredere. Uneori nu este nevoie de renovare completă, ci de alegeri vizuale mai bune, ordine, lumină și prezentare corectă.
          </p>
        </div>
        <ul className="mt-8 grid gap-2 sm:grid-cols-2">
          {issues.map((i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-xl border border-border bg-cream/50 px-4 py-2.5 text-foreground"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
              <span className="text-sm leading-snug">{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
