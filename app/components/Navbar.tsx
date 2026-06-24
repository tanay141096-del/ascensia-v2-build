"use client";

import { useState } from "react";
import { basePath } from "../lib/basePath";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = (
    <>
      <a href="#what-we-do" className="nav-link" onClick={() => setOpen(false)}>
        What We Do
      </a>
      <a href="#proof" className="nav-link" onClick={() => setOpen(false)}>
        Proof
      </a>
      <a href="/calculator.html" className="nav-link" onClick={() => setOpen(false)}>
        Calculator
      </a>
      <a href={`${basePath}/audit`} className="btn btn-filled nav-cta">
        Book Free Audit
      </a>
    </>
  );

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a href={`${basePath}/`} className="nav-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${basePath}/logo.webp`} alt="Ascensia" className="brand-logo" />
        </a>
        <div className="nav-links">{links}</div>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`nav-mobile-panel ${open ? "open" : ""}`}>{links}</div>
    </nav>
  );
}
