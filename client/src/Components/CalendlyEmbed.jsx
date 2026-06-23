import { useEffect } from "react";

export default function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="card bonus">
      <h2>Book a Session (Live Scheduler)</h2>
      <p className="muted">
        This is a live scheduling widget powered by Calendly.
        Bookings made here are not synced with the list above.
      </p>

      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/priyariya1261/30min"
      />
    </section>
  );
}