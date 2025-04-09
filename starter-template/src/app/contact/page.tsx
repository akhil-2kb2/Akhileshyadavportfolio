// app/contact/page.tsx
import grainImage from "@/assets/images/grain.jpg"; // Optional: for background texture

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center py-16">
      <div className="container max-w-md mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-serif text-center mb-6 bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent tracking-tight">
          Let’s Connect
        </h1>
        <p className="text-center text-gray-300 mb-12 max-w-sm mx-auto text-lg">
          I’m excited to collaborate on your next project. Reach out via any of the methods below.
        </p>
        <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700/50 relative overflow-hidden">
          {/* Optional: Add grain texture to the background */}
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="space-y-8">
            {/* Email */}
            <div className="flex flex-col items-center sm:flex-row sm:items-start gap-4 sm:gap-6">
              <h2 className="text-lg font-semibold text-gray-200 w-24 shrink-0">Email</h2>
              <a
                href="mailto:bajpaiayush12345@gmail.com"
                className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent hover:opacity-80 transition-colors text-base sm:text-lg break-all"
              >
                bajpaiayush12345@gmail.com
              </a>
            </div>
            {/* Phone */}
            <div className="flex flex-col items-center sm:flex-row sm:items-start gap-4 sm:gap-6">
              <h2 className="text-lg font-semibold text-gray-200 w-24 shrink-0">Phone</h2>
              <a
                href="tel:+916394484961"
                className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent hover:opacity-80 transition-colors text-base sm:text-lg"
              >
                +91 6394484961
              </a>
            </div>
            {/* LinkedIn */}
            <div className="flex flex-col items-center sm:flex-row sm:items-start gap-4 sm:gap-6">
              <h2 className="text-lg font-semibold text-gray-200 w-24 shrink-0">LinkedIn</h2>
              <a
                href="https://www.linkedin.com/in/ayushbajpaiab/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent hover:opacity-80 transition-colors text-base sm:text-lg"
              >
                linkedin.com/in/ayushbajpai
              </a>
            </div>
            {/* GitHub */}
            <div className="flex flex-col items-center sm:flex-row sm:items-start gap-4 sm:gap-6">
              <h2 className="text-lg font-semibold text-gray-200 w-24 shrink-0">GitHub</h2>
              <a
                href="https://github.com/Ayush-Bajpaii"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent hover:opacity-80 transition-colors text-base sm:text-lg"
              >
                github.com/Ayush-Bajpaii
              </a>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a
              href="/"
            className="inline-flex items-center px-8 py-3 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors text-lg font-semibold shadow-md hover:shadow-lg"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
