import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Twitter",
    href: "https://x.com/ayushbajpaii",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/aayushbajpaii_/",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/ayushbajpaiab/",
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-0 overflow-x-clip bg-black">
      {/* Background glow */}
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 pointer-events-none" />

      <div className="container">
        <div className="border-t border-white/15 py-8 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40 font-medium">
            © 2025 Ayush Bajpai. All rights reserved.
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-gray-300 hover:text-emerald-400 transition-colors"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
