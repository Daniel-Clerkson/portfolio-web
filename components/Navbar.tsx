"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "WORK", href: "#work" },
    { name: "ABOUT", href: "#about" },
    { name: "STACK", href: "#stacks" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 py-5 md:px-10
        ${isScrolled || mobileMenuOpen ? "bg-white border-b border-gray-100 py-4" : "bg-transparent"}`}
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 items-center">
          <div className="flex justify-start z-[110]">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <h1 className="text-xl font-black tracking-tighter uppercase leading-none hover:opacity-70 transition-opacity">
                Daniel Clerkson
              </h1>
            </Link>
          </div>

          <div className="hidden md:flex justify-center items-center">
            {navLinks.map((link) => (
              <div key={link.name} className="group mr-6">
                <Link
                  href={link.href}
                  className=" font-bold  hover:text-[#ff3c2e] transition-colors"
                >
                  {link.name}
                </Link>
                <div className="h-0.5 w-0 bg-[#ff3c2e] transition-all group-hover:w-full"></div>
              </div>
            ))}
          </div>

          <div className="flex justify-end items-center z-[110]">
            <Link href="#contact" className="hidden md:block">
              <button className="relative border-2 border-black bg-white px-8 py-3 font-black tracking-widest uppercase transition-all duration-200 hover:bg-[#ff3c2e] cursor-pointer hover:text-white active:translate-x-[2px] active:translate-y-[2px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none">
                Get in touch
              </button>
            </Link>

            {/* MOBILE TOGGLE with X */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-black transition-all"
            >
              {mobileMenuOpen ? (
                <X size={28} strokeWidth={3} />
              ) : (
                <Menu size={28} strokeWidth={3} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 bg-white z-[90] flex flex-col items-center justify-center gap-10 transition-transform duration-500 ease-in-out md:hidden
        ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-5xl font-black tracking-tighter hover:text-[#ff3c2e] transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="#contact"
          onClick={() => setMobileMenuOpen(false)}
          className="mt-4"
        >
          <button className="border-2 border-black bg-black text-white px-10 py-5 text-sm font-black tracking-widest uppercase shadow-[6px_6px_0px_0px_rgba(255,60,46,1)] active:shadow-none transition-all">
            CONTACT ME
          </button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
