"use client";

import { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "projectsection", label: "Projects" },
  { id: "testimonials", label: "Friends"},
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" }
 
];

export const Header = () => {
  const [activeId, setActiveId] = useState("home");

  // Update activeId on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0.2,
      }
    );

    const elements = navItems.map(({ id }) => document.getElementById(id));
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, []);

  // Handle click to update activeId
  const handleNavClick = (id: string) => {
    setActiveId(id);
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => handleNavClick(item.id)} // Update activeId on click
            className={`nav-item px-4 py-2 rounded-full transition-colors ${
              activeId === item.id
                ? "bg-white text-black hover:bg-white/20"
                : "text-white "
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};