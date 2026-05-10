import { createFileRoute } from "@tanstack/react-router";

type ContactPayload = {
  nume?: string;
  telefon?: string;
  email?: string;
  oras?: string;
  tipProprietate?: string;
  tipInchiriere?: string;
  serviciu?: string;
  poze?: string;
  buget?: string;
  mesaj?: string;
  website?: string;
};

const contactToEmail = "homefixbyroxana@gmail.com";

function clean(value: unknown, maxLength = 1000) {
  return String(value || "").trim().slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 10px 14px; border-bottom: 1px solid #eee; color: #7a6d63; width: 180px;">${escapeHtml(label)}</td>
      <td style="padding: 10px 14px; border-bottom: 1px solid #eee; color: #2c231d;">${escapeHtml(value || "-")}</td>
    </tr>
  `;
}

function buildEmailHtml(data: Required<Omit<ContactPayload, "website">>) {
  return `
    <div style="font-family: Inter, Arial, sans-serif; background: #faf7f2; padding: 32px;">
      <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border: 1px solid #e9dfd2; border-radius: 18px; overflow: hidden;">
        <div style="padding: 26px 30px; background: #efe7dc;">
          <p style="margin: 0; color: #7a6d63; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em;">Cerere nouă</p>
          <h1 style="margin: 8px 0 0; color: #2c231d; font-size: 26px; font-weight: 500;">Gata de Închiriat</h1>
        </div>
        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          ${row("Nume", data.nume)}
          ${row("Telefon", data.telefon)}
          ${row("Email", data.email)}
          ${row("Oraș", data.oras)}
          ${row("Tip proprietate", data.tipProprietate)}
          ${row("Tip închiriere", data.tipInchiriere)}
          ${row("Serviciu dorit", data.serviciu)}
          ${row("Are poze?", data.poze)}
          ${row("Buget estimativ", data.buget)}
        </table>
        <div style="padding: 22px 30px 30px;">
          <p style="margin: 0 0 8px; color: #7a6d63; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em;">Mesaj</p>
          <p style="margin: 0; color: #2c231d; line-height: 1.65; white-space: pre-wrap;">${escapeHtml(data.mesaj || "-")}</p>
        </div>
      </div>
    </div>
  `;
}

function buildEmailText(data: Required<Omit<ContactPayload, "website">>) {
  return [
    "Cerere nouă - Gata de Închiriat",
    "",
    `Nume: ${data.nume}`,
    `Telefon: ${data.telefon}`,
    `Email: ${data.email}`,
    `Oraș: ${data.oras}`,
    `Tip proprietate: ${data.tipProprietate}`,
    `Tip închiriere: ${data.tipInchiriere}`,
    `Serviciu dorit: ${data.serviciu}`,
    `Are poze?: ${data.poze}`,
    `Buget estimativ: ${data.buget}`,
    "",
    "Mesaj:",
    data.mesaj || "-",
  ].join("\n");
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const resendApiKey = process.env.RESEND_API_KEY;
        if (!resendApiKey) {
          return Response.json(
            { error: "Email service is not configured yet." },
            { status: 500 },
          );
        }

        let payload: ContactPayload;
        try {
          payload = await request.json();
        } catch {
          return Response.json({ error: "Invalid request." }, { status: 400 });
        }

        if (clean(payload.website)) {
          return Response.json({ ok: true });
        }

        const data = {
          nume: clean(payload.nume, 120),
          telefon: clean(payload.telefon, 80),
          email: clean(payload.email, 160),
          oras: clean(payload.oras, 120),
          tipProprietate: clean(payload.tipProprietate, 120),
          tipInchiriere: clean(payload.tipInchiriere, 120),
          serviciu: clean(payload.serviciu, 180),
          poze: clean(payload.poze, 20),
          buget: clean(payload.buget, 120),
          mesaj: clean(payload.mesaj, 3000),
        };

        if (!data.nume || !data.telefon || !data.email || !data.oras) {
          return Response.json(
            { error: "Te rog completează numele, telefonul, emailul și orașul." },
            { status: 400 },
          );
        }

        const fromEmail =
          process.env.CONTACT_FROM_EMAIL ||
          "Gata de Inchiriat <onboarding@resend.dev>";

        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: fromEmail,
            to: [contactToEmail],
            reply_to: data.email,
            subject: `Cerere nouă de la ${data.nume} - Gata de Închiriat`,
            html: buildEmailHtml(data),
            text: buildEmailText(data),
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error("Resend contact email failed", errorText);
          return Response.json(
            { error: "Nu am putut trimite mesajul. Te rog încearcă din nou." },
            { status: 502 },
          );
        }

        return Response.json({ ok: true });
      },
    },
  },
});
