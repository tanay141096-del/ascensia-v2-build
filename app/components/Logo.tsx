type LogoProps = {
  size?: number;
  /** Use on dark backgrounds (footer/hero) to render the wordmark in white. */
  light?: boolean;
};

export default function Logo({ size = 32, light = false }: LogoProps) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="64" height="64" rx="12" fill="#1C2333" />
        {/* back leg of the "A", white */}
        <path d="M36 8 L51 50 L41 50 L36 30 L29 50 L19 50 Z" fill="#FFFFFF" />
        {/* front upward-arrow leg, cyan */}
        <path d="M23 16 L34 40 L26 40 L26 50 L17 50 L17 40 L12 40 Z" fill="#3AABDC" />
      </svg>
      <span
        style={{
          fontWeight: 700,
          fontSize: size * 0.5,
          color: light ? "#FFFFFF" : "#1C2333",
          letterSpacing: "0.5px",
        }}
      >
        Acsensia
      </span>
    </span>
  );
}
