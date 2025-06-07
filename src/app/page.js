// src/app/page.js

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-950 to-black text-white font-sans">
      <header className="text-center py-20 bg-gradient-to-r from-yellow-400 via-pink-500 to-violet-600">
      <div className="flex justify-center py-6">
      <img
  src="/vibeswipe-logo.png"
  alt="VibeSwipe Logo"
  className="h-32 w-auto mx-auto mt-10 transition-transform duration-500 ease-in-out hover:scale-110"
/>
</div>

  <h1 className="text-6xl font-extrabold text-white drop-shadow-lg">VibeSwipe</h1>
  <p className="text-xl mt-4 text-white/90">Thrift smarter. Match by vibe. Swap sustainably.</p>
</header>


      <section className="max-w-4xl mx-auto px-6 py-20 bg-white/5 backdrop-blur-sm rounded-xl shadow-inner">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-6 text-center">
          What is VibeSwipe?
        </h2>
        <p className="text-zinc-300 mb-8 text-lg text-center leading-relaxed">
          A next-gen fashion marketplace where you buy, sell, or swap thrifted clothing using swipe-based matching.
          AI-generated avatars help visualize fit and style. It’s like Tinder meets Depop — smarter, and sustainable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Feature icon="🧍" text="AI-powered avatars to preview fit & style" />
          <Feature icon="🤝" text="Swipe-to-match with people who share your vibe & size" />
          <Feature icon="📦" text="List, auction, or trade with ease" />
          <Feature icon="🛍️" text="Future: Connect with local thrift stores and events" />
        </div>
      </section>

      <section className="bg-yellow-400 text-black py-20 text-center mt-20">
        <h2 className="text-4xl font-bold mb-4">🚀 Coming Soon</h2>
        <p className="text-lg mb-6">
          Be the first to thrift with a vibe. Join our waitlist or co-build the future of fashion.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-zinc-800 transition">
        Email us: Hello@VibeSwipe.app
        </button>
      </section>

      <footer className="text-center py-8 text-zinc-400 text-sm mt-20">
        © 2025 VibeSwipe — Built with ❤️ for thrift & tech.
      </footer>
    </main>
  );
}

function Feature({ icon, text }) {
  return (
    <div className="flex items-start gap-4 bg-zinc-800/50 p-4 rounded-lg shadow hover:shadow-lg transition">
      <div className="text-3xl">{icon}</div>
      <p className="text-zinc-300">{text}</p>
    </div>
  );
}
