"use client";

import Script from "next/script";

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
    };
  }
}

// Persistent floating "Schedule time with me" tab, available on every page.
export default function CalendlyBadge() {
  return (
    <Script
      src="https://assets.calendly.com/assets/external/widget.js"
      strategy="afterInteractive"
      onLoad={() => {
        window.Calendly?.initBadgeWidget({
          url: "https://calendly.com/tanay141096/audit",
          text: "Schedule time with me",
          color: "#3AABDC",
          textColor: "#ffffff",
          branding: true,
        });
      }}
    />
  );
}
