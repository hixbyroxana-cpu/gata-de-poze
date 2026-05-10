import logoImg from "@/assets/gata-de-inchiriat-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <img
            src={logoImg}
            alt="Gata de Închiriat by HomeFix Roxana"
            className="h-20 w-80 object-cover object-center mix-blend-multiply"
          />
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Styling, refresh decorativ, poze și consultanță pentru apartamente de închiriat.
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Pentru transformări, proiecte before/after și idei practice pentru casă, urmărește{" "}
            <a
              href="https://www.instagram.com/homefix_by_roxana"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-foreground underline decoration-sage/50 underline-offset-4 transition-colors hover:text-primary"
            >
              @homefix_by_roxana
            </a>{" "}
            pe Instagram sau{" "}
            <a
              href="https://www.youtube.com/@Homefixbyroxana"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-foreground underline decoration-sage/50 underline-offset-4 transition-colors hover:text-primary"
            >
              Homefix By Roxana
            </a>{" "}
            pe YouTube.
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Local</p>
          <p className="mt-3 text-sm text-foreground">Sibiu &amp; Alba Iulia</p>
          <p className="mt-1 text-sm text-muted-foreground">Vizite, styling, poze, refresh</p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Online</p>
          <p className="mt-3 text-sm text-foreground">Toată România</p>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-border px-5 pt-6 text-xs text-muted-foreground lg:px-8">
        © {new Date().getFullYear()} Gata de Închiriat. Toate drepturile rezervate.
      </div>
    </footer>
  );
}
