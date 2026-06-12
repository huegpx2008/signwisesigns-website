"use client";

import Image from "next/image";
import { useState } from "react";
import { Close, Menu } from "./icons";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Clients", href: "#clients" },
  { label: "Gallery", href: "#gallery" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#home" className="header-logo" aria-label="SignWise Signs home">
          <Image
            src="/signwise-logo.avif"
            alt="SignWise Signs"
            width={330}
            height={100}
            priority
          />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="#quote" className="nav-cta">
            Request a quote
          </a>
        </nav>

        <button
          type="button"
          className="menu-button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      {open ? (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#quote" className="nav-cta" onClick={() => setOpen(false)}>
            Request a quote
          </a>
        </nav>
      ) : null}
    </header>
  );
}
