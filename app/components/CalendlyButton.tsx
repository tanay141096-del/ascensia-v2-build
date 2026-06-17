"use client";

const CALENDLY_URL =
  "https://calendly.com/tanay141096/audit?background_color=151922&text_color=ffffff&primary_color=3aabdc";

type Props = {
  className?: string;
  children: React.ReactNode;
};

// Opens the Calendly scheduler in a popup overlay instead of leaving the
// page. Relies on widget.js/widget.css already being loaded sitewide
// (see app/layout.tsx + CalendlyBadge).
export default function CalendlyButton({ className, children }: Props) {
  return (
    <a
      href={CALENDLY_URL}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        if (window.Calendly) {
          window.Calendly.initPopupWidget({ url: CALENDLY_URL });
        } else {
          window.open(CALENDLY_URL, "_blank");
        }
      }}
    >
      {children}
    </a>
  );
}
