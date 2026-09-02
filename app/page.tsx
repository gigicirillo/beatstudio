"use client";

import { useEffect, useState } from "react";

const C = {
  it: {
    nav: ["Temporary Studio", "Visione", "Esperienze", "Metodo", "Dove siamo"],
    cta: "Vieni a conoscerci",
    k: "Fitness studio · Gubbio",
    ha: "Diamo ritmo",
    hb: "al tuo benessere.",
    tempPartner: "Ospiti di Suprema Sport Village",
    tempTitleA: "Temporary",
    tempTitleB: "Fitness Studio",
    tempMonth: "Tutto settembre",
    tempBody:
      "Mentre diamo gli ultimi ritocchi alla nuova casa di Beat Studio, per tutto settembre iniziamo a muoverci insieme ospiti degli amici di Suprema Sport Village, con le nostre classi di Group Cycling e Striding.",
    tempClaim: "Il Beat è già partito. La nuova casa sta arrivando.",
    tempPlanning: "Planning",
    tempPlanTitle: "Essential a Suprema",
    tempDirections: "Indicazioni",
    schedule: [
      {
        day: "lun.",
        classes: [
          { time: "19:00", name: "indoor cycling", tone: "violet" },
          { time: "20:00", name: "striding", tone: "gray" },
        ],
      },
      {
        day: "mer.",
        classes: [
          { time: "19:00", name: "indoor cycling", tone: "violet" },
          { time: "20:00", name: "striding", tone: "gray" },
        ],
      },
      {
        day: "ven.",
        classes: [
          { time: "18:00", name: "striding", tone: "gray" },
          { time: "19:00", name: "indoor cycling", tone: "violet" },
        ],
      },
    ],
    intro: "Il benessere non ha un solo ritmo.",
    introB:
      "Beat Studio mette energia, equilibrio e salute nello stesso spazio. Percorsi diversi, una sola regia: la tua.",
    ex: "Quattro modi di stare bene",
    items: [
      [
        "Indoor Cycling",
        "Non solo pedalare. Immersione sonora e visiva, guida tecnica, obiettivi progressivi ed energia condivisa.",
      ],
      [
        "Striding Original",
        "Non solo camminare. Un gesto naturale, accessibile e modulabile, spinto dalla musica e dalla forza del gruppo.",
      ],
      [
        "Olistic Workout",
        "Mobilità, postura, respiro e controllo. Il ritmo che rimette corpo e mente in sintonia.",
      ],
      [
        "Rijenera",
        "Movimento adattato, sicuro e supervisionato per ritrovare capacità, fiducia e autonomia.",
      ],
    ],
    energy: "La sala si accende.\nTu trovi il tuo ritmo.",
    health: "Il movimento,\ndove serve di più.",
    healthB:
      "Per persone con fragilità, patologie stabilizzate o necessità specifiche. Qui la prestazione lascia spazio a salute, autonomia e qualità della vita.",
    method: "Ogni persona ha il suo ritmo.\nNoi costruiamo il percorso.",
    pillars: [
      ["Ascolto", "Partiamo dalla persona, non dal corso da riempire."],
      ["Guida", "Il coach accompagna, corregge e motiva."],
      ["Ritmo", "Intensità e proposta cambiano con obiettivi e momento di vita."],
      ["Connessione", "Performance, equilibrio e salute dialogano tra loro."],
      ["Community", "Piccoli gruppi, relazione e appartenenza."],
    ],
    visit: "Vieni a sentire\nil tuo ritmo.",
    addr: "Via della Piaggiola 152\n06024 Gubbio PG",
    map: "Carica la mappa Google",
    mapN: "La mappa esterna viene caricata solo con il tuo consenso.",
    dir: "Apri in Google Maps",
    form: "Inizia da qui.",
    fields: [
      "Nome e cognome",
      "Email",
      "Telefono (facoltativo)",
      "Come possiamo aiutarti?",
    ],
    consent: "Confermo di aver preso visione dell’informativa sulla",
    send: "Invia richiesta",
    note: "I dati saranno utilizzati esclusivamente per rispondere alla richiesta.",
  },
  en: {
    nav: ["Temporary Studio", "Vision", "Experiences", "Method", "Find us"],
    cta: "Come meet us",
    k: "Fitness studio · Gubbio",
    ha: "Give rhythm",
    hb: "to your wellbeing.",
    tempPartner: "Hosted by Suprema Sport Village",
    tempTitleA: "Temporary",
    tempTitleB: "Fitness Studio",
    tempMonth: "All September",
    tempBody:
      "While we add the finishing touches to Beat Studio’s new home, throughout September we start moving together as guests of our friends at Suprema Sport Village, with our Group Cycling and Striding classes.",
    tempClaim: "The Beat has already started. Our new home is on its way.",
    tempPlanning: "Schedule",
    tempPlanTitle: "Essential at Suprema",
    tempDirections: "Directions",
    schedule: [
      {
        day: "Mon.",
        classes: [
          { time: "19:00", name: "indoor cycling", tone: "violet" },
          { time: "20:00", name: "striding", tone: "gray" },
        ],
      },
      {
        day: "Wed.",
        classes: [
          { time: "19:00", name: "indoor cycling", tone: "violet" },
          { time: "20:00", name: "striding", tone: "gray" },
        ],
      },
      {
        day: "Fri.",
        classes: [
          { time: "18:00", name: "striding", tone: "gray" },
          { time: "19:00", name: "indoor cycling", tone: "violet" },
        ],
      },
    ],
    intro: "Wellbeing has more than one rhythm.",
    introB:
      "Beat Studio brings energy, balance and health into one space. Different journeys, one direction: yours.",
    ex: "Four ways to feel good",
    items: [
      [
        "Indoor Cycling",
        "More than pedalling. Sound and visual immersion, expert coaching, progressive goals and shared energy.",
      ],
      [
        "Striding Original",
        "More than walking. A natural, accessible movement powered by music and the group.",
      ],
      [
        "Olistic Workout",
        "Mobility, posture, breathing and control. Bringing body and mind back in tune.",
      ],
      [
        "Rijenera",
        "Safe, supervised adaptive movement to regain ability, confidence and independence.",
      ],
    ],
    energy: "The room lights up.\nYou find your rhythm.",
    health: "Movement,\nwhere it matters most.",
    healthB:
      "For people with frailty, stable conditions or specific needs. Here, performance makes room for health, independence and quality of life.",
    method: "Everyone has their own rhythm.\nWe build the journey.",
    pillars: [
      ["Listening", "We start with the person, not a class to fill."],
      ["Guidance", "Your coach supports, corrects and motivates."],
      ["Rhythm", "Intensity evolves with your goals and stage of life."],
      ["Connection", "Performance, balance and health work together."],
      ["Community", "Small groups, relationships and belonging."],
    ],
    visit: "Come and feel\nyour rhythm.",
    addr: "Via della Piaggiola 152\n06024 Gubbio PG, Italy",
    map: "Load Google Map",
    mapN: "The external map loads only with your consent.",
    dir: "Open in Google Maps",
    form: "Start here.",
    fields: ["Full name", "Email", "Phone (optional)", "How can we help?"],
    consent: "I confirm that I have read the",
    send: "Send request",
    note: "Data will be used exclusively to reply to this request.",
  },
};

const Lines = ({ s }: { s: string }) => (
  <>
    {s.split("\n").map((x) => (
      <span key={x}>
        {x}
        <br />
      </span>
    ))}
  </>
);

export default function Home() {
  const [lang, setLang] = useState<"it" | "en">("it");
  const [menu, setMenu] = useState(false);
  const [map, setMap] = useState(false);
  const [cur, setCur] = useState({ x: -500, y: -500 });
  const [cookie, setCookie] = useState<string | null>(null);
  const t = C[lang];

  useEffect(() => {
    const f = (e: MouseEvent) => setCur({ x: e.clientX, y: e.clientY });
    addEventListener("mousemove", f);
    setCookie(localStorage.getItem("beat-cookie-consent"));
    return () => removeEventListener("mousemove", f);
  }, []);

  const chooseCookie = (value: string) => {
    localStorage.setItem("beat-cookie-consent", value);
    setCookie(value);
  };

  const navIds = ["temporary", "vision", "experiences", "method", "location"];

  return (
    <main>
      <div
        className="cursor"
        style={{ transform: `translate(${cur.x}px,${cur.y}px)` }}
      />
      <header>
        <a className="brand" href="#top">
          <img src="/assets/logo.png" alt="Beat Studio" />
        </a>
        <nav className={menu ? "open" : ""}>
          {t.nav.map((n, i) => (
            <a
              key={n}
              href={`#${navIds[i]}`}
              onClick={() => setMenu(false)}
            >
              {n}
            </a>
          ))}
        </nav>
        <div className="actions">
          <button
            className="lang"
            onClick={() => setLang(lang === "it" ? "en" : "it")}
          >
            {lang.toUpperCase()} ↗
          </button>
          <a className="pill" href="#contact">
            {t.cta}
          </a>
          <button
            className="burger"
            onClick={() => setMenu(!menu)}
            aria-label={menu ? "Chiudi menu" : "Apri menu"}
            aria-expanded={menu}
          >
            {menu ? "×" : "≡"}
          </button>
        </div>
      </header>

      <section id="top" className="hero">
        <img src="/assets/hero.jpg" alt="Beat Studio fitness experience" />
        <div className="shade" />
        <div className="orb" />
        <div className="heroCopy">
          <p className="eyebrow">{t.k}</p>
          <h1>
            {t.ha}
            <br />
            <em>{t.hb}</em>
          </h1>
          <a href="#temporary" className="round" aria-label="Temporary Studio">
            ↓
          </a>
        </div>
        <p className="side">BEAT / STUDIO / GUBBIO</p>
      </section>

      <section id="temporary" className="temporary">
        <div className="temporaryPhoto" aria-hidden="true">
          <img src="/assets/temporary-suprema.jpg" alt="" />
        </div>
        <div className="temporaryGrid">
          <div className="temporaryCopy">
            <div className="temporaryTop">
              <p className="index">00 — TEMPORARY STUDIO</p>
              <p className="temporaryHost">@ {t.tempPartner}</p>
              <h2>
                <span>{t.tempTitleA}</span>
                {t.tempTitleB}
              </h2>
            </div>
            <div className="temporaryText">
              <h3>{t.tempMonth}</h3>
              <p>{t.tempBody}</p>
              <strong>{t.tempClaim}</strong>
            </div>
          </div>

          <aside className="temporarySchedule" aria-label={t.tempPlanTitle}>
            <div className="scheduleHeading">
              <span>{t.tempPlanning}</span>
              <h3>{t.tempPlanTitle}</h3>
            </div>
            <div className="scheduleRows">
              {t.schedule.map((row) => (
                <div className="scheduleRow" key={row.day}>
                  <strong>{row.day}</strong>
                  <div>
                    {row.classes.map((item) => (
                      <span
                        className={`classPill ${item.tone}`}
                        key={`${row.day}-${item.time}-${item.name}`}
                      >
                        <b>{item.time}</b>
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <a
              className="temporaryVenue"
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/maps/search/?api=1&query=Via+Carlo+Alberto+Dalla+Chiesa+110+06024+Gubbio+PG"
            >
              <span>SUPREMA SPORT VILLAGE</span>
              <small>
                Via Carlo Alberto Dalla Chiesa 110, 06024 Gubbio PG
              </small>
              <b>{t.tempDirections} ↗</b>
            </a>
          </aside>
        </div>
      </section>

      <section id="vision" className="manifest">
        <p className="index">01 — VISION</p>
        <h2>{t.intro}</h2>
        <p className="lead">{t.introB}</p>
        <div className="marquee">
          <span>ENERGY · BALANCE · HEALTH · COMMUNITY · </span>
          <span>ENERGY · BALANCE · HEALTH · COMMUNITY · </span>
        </div>
      </section>

      <section id="experiences" className="experiences">
        <div className="sectionHead">
          <p className="index">02 — EXPERIENCES</p>
          <h2>{t.ex}</h2>
        </div>
        <div className="cards">
          {t.items.map((x, i) => (
            <article key={x[0]}>
              <img
                src={`/assets/${[
                  "cycling.jpg",
                  "striding.jpg",
                  "olistic.jpg",
                  "rijenera.jpg",
                ][i]}`}
                alt={x[0]}
                loading="lazy"
              />
              <div className="cardShade" />
              <span>0{i + 1}</span>
              <div className="cardCopy">
                <h3>{x[0]}</h3>
                <p>{x[1]}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cinema">
        <img src="/assets/cycling-room.jpg" alt="Indoor cycling room" />
        <div className="cinemaCopy">
          <p className="eyebrow">ENERGIA CONDIVISA</p>
          <h2>
            <Lines s={t.energy} />
          </h2>
        </div>
      </section>

      <section className="split health">
        <div className="splitCopy">
          <p className="index">03 — RIJENERA</p>
          <p className="eyebrow">PALESTRA DELLA SALUTE</p>
          <h2>
            <Lines s={t.health} />
          </h2>
          <p className="bodycopy">{t.healthB}</p>
        </div>
        <div>
          <img
            src="/assets/health.jpg"
            alt="Rijenera palestra della salute"
            loading="lazy"
          />
        </div>
      </section>

      <section id="method" className="method">
        <p className="index">04 — METHOD</p>
        <h2>
          <Lines s={t.method} />
        </h2>
        <div className="pillars">
          {t.pillars.map((p, i) => (
            <article key={p[0]}>
              <span>0{i + 1}</span>
              <h3>{p[0]}</h3>
              <p>{p[1]}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="location" className="split location">
        <div className="map">
          {map ? (
            <iframe
              title="Google map Beat Studio"
              src="https://www.google.com/maps?q=Via+della+Piaggiola+152,+06024+Gubbio+PG&output=embed"
              loading="lazy"
            />
          ) : (
            <button onClick={() => setMap(true)}>
              <strong>{t.map}</strong>
              <small>{t.mapN}</small>
            </button>
          )}
        </div>
        <div className="locationCopy">
          <p className="index">05 — GUBBIO</p>
          <h2>
            <Lines s={t.visit} />
          </h2>
          <p>
            <Lines s={t.addr} />
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/search/?api=1&query=Via+della+Piaggiola+152+06024+Gubbio+PG"
          >
            {t.dir} ↗
          </a>
        </div>
      </section>

      <section id="contact" className="contact">
        <div>
          <p className="index">06 — CONTACT</p>
          <h2>{t.form}</h2>
        </div>
        <form
          action={atob(
            "aHR0cHM6Ly9mb3Jtc3VibWl0LmNvL2dpZ2ljaXJpbGxvQGdtYWlsLmNvbQ==",
          )}
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="Nuova richiesta dal sito Beat Studio"
          />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <label>
            {t.fields[0]}
            <input name="name" required autoComplete="name" />
          </label>
          <div className="formRow">
            <label>
              {t.fields[1]}
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <label>
              {t.fields[2]}
              <input name="phone" type="tel" autoComplete="tel" />
            </label>
          </div>
          <label>
            {t.fields[3]}
            <textarea name="message" rows={4} required />
          </label>
          <label className="check">
            <input
              type="checkbox"
              name="privacy_consent"
              value="accepted"
              required
            />
            <span>
              {t.consent}{" "}
              <a href="/privacy-cookie-policy.html" target="_blank">
                {lang === "it"
                  ? "privacy e cookie policy"
                  : "privacy and cookie policy"}
              </a>
              .
            </span>
          </label>
          <button className="submit" type="submit">
            {t.send}
            <span>↗</span>
          </button>
          <small>{t.note}</small>
        </form>
      </section>

      <footer>
        <img src="/assets/logo.png" alt="Beat Studio" />
        <div>
          <a href="/privacy-cookie-policy.html">Privacy & Cookie Policy</a>
          <p>© 2026 Beat Studio Gubbio</p>
        </div>
        <p>DIAMO RITMO AL TUO BENESSERE.</p>
      </footer>

      {cookie === null && (
        <aside
          className="cookie-banner"
          role="dialog"
          aria-modal="true"
          aria-label={lang === "it" ? "Preferenze cookie" : "Cookie preferences"}
        >
          <button
            className="cookie-x"
            onClick={() => chooseCookie("essential")}
            aria-label={lang === "it" ? "Chiudi" : "Close"}
          >
            ×
          </button>
          <div>
            <strong>
              {lang === "it"
                ? "La tua privacy, al tuo ritmo."
                : "Your privacy, at your pace."}
            </strong>
            <p>
              {lang === "it"
                ? "Utilizziamo cookie tecnici necessari e, solo con il tuo consenso, servizi esterni per migliorare la navigazione. Puoi accettare tutti i servizi oppure continuare con i soli cookie necessari."
                : "We use necessary technical cookies and, only with your consent, external services to improve navigation. You can accept all services or continue with necessary cookies only."}
            </p>
            <a href="/privacy-cookie-policy.html">Privacy & Cookie Policy</a>
          </div>
          <div className="cookie-actions">
            <button onClick={() => chooseCookie("essential")}>
              {lang === "it"
                ? "Continua senza accettare"
                : "Continue without accepting"}
            </button>
            <button
              className="cookie-accept"
              onClick={() => chooseCookie("all")}
            >
              {lang === "it" ? "Accetta tutti" : "Accept all"}
            </button>
          </div>
        </aside>
      )}
    </main>
  );
}
