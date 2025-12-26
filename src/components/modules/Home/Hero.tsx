import Link from "next/link";

export default async function Hero() {
  return (
    <div className="overflow-hidden">
      <div className="min-h-screen w-full relative bg-gradient-to-b from-white via-blue-50/30 to-cyan-50/20 pt-16">
        {" "}
        {/* Added pt-16 here */}
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-gradient-to-r from-blue-100/40 to-cyan-100/30 blur-3xl" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-gradient-to-l from-sky-100/40 to-blue-100/30 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-white via-transparent to-cyan-50/20" />
        </div>
        {/* Geometric Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #60a5fa 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, #22d3ee 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-screen">
          <div className="relative max-w-6xl">
            {/* Headline with subtle glow */}
            <div className="absolute -inset-x-20 top-1/2 h-32 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent blur-2xl" />

            <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-none">
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                  Read.
                </span>
                <span className="absolute -inset-1 bg-gradient-to-r from-blue-200/50 to-transparent blur-xl opacity-50" />
              </span>{" "}
              <span className="relative inline-block mt-2 md:mt-0">
                <span className="relative z-10 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                  Learn.
                </span>
                <span className="absolute -inset-1 bg-gradient-to-r from-cyan-200/50 to-transparent blur-xl opacity-50" />
              </span>{" "}
              <span className="relative inline-block mt-2 md:mt-0">
                <span className="relative z-10 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                  Share.
                </span>
                <span className="absolute -inset-1 bg-gradient-to-r from-sky-200/50 to-transparent blur-xl opacity-50" />
              </span>
              <br />
              <span className="text-4xl md:text-6xl font-bold mt-6 block bg-gradient-to-r from-slate-700 via-slate-900 to-slate-700 bg-clip-text text-transparent">
                Ideas That Shape the Future
              </span>
            </h1>

            {/* Divider */}
            <div className="mt-12 mb-8 flex justify-center items-center">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
              <div className="mx-4 flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <div className="w-2 h-2 rounded-full bg-sky-400" />
              </div>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
            </div>

            {/* Subheadline */}
            <p className="mt-8 text-xl md:text-2xl max-w-3xl mx-auto text-slate-600 font-light leading-relaxed">
              Discover in-depth articles, tutorials, and thought-provoking
              stories from a global network of creators. Stay updated with fresh
              insights on technology, design, productivity, and personal growth.
            </p>

            {/* CTA Container */}
            <div className="mt-16 relative">
              {/* Button Outer Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200/30 via-cyan-200/20 to-sky-200/30 rounded-2xl blur-xl" />

              <Link
                href="/blogs"
                className="relative inline-flex items-center justify-center px-12 py-5 font-semibold text-lg rounded-2xl 
                         bg-gradient-to-br from-white via-white to-slate-50 
                         border border-slate-200/80
                         hover:border-blue-300
                         transition-all duration-300
                         shadow-xl shadow-blue-100/50 hover:shadow-blue-200/50
                         group"
              >
                <span className="relative z-10 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:via-cyan-700 group-hover:to-blue-700 transition-all">
                  Explore Blogs
                </span>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-200 via-cyan-200 to-sky-200 opacity-0 group-hover:opacity-30 transition-opacity" />

                {/* Arrow Indicator */}
                <svg
                  className="ml-3 w-5 h-5 text-cyan-500 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              {/* Floating Dots around button */}
              <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-cyan-300/60 blur-sm" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-blue-300/60 blur-sm" />
              <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-sky-300/60 blur-sm" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-indigo-300/60 blur-sm" />
            </div>

            {/* Features */}
            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200/70 shadow-lg shadow-blue-50/30 hover:shadow-blue-100/50 transition-shadow duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  Curated Content
                </h3>
                <p className="text-slate-600 text-sm">
                  Handpicked articles from top creators
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200/70 shadow-lg shadow-cyan-50/30 hover:shadow-cyan-100/50 transition-shadow duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-100 to-sky-100 flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  Fresh Insights
                </h3>
                <p className="text-slate-600 text-sm">
                  Daily updates on trending topics
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200/70 shadow-lg shadow-sky-50/30 hover:shadow-sky-100/50 transition-shadow duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  Global Network
                </h3>
                <p className="text-slate-600 text-sm">
                  Connect with creators worldwide
                </p>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 flex flex-col items-center">
              <span className="text-sm text-cyan-500/80 mb-2 tracking-widest font-light">
                EXPLORE MORE
              </span>
              <div className="h-10 w-px bg-gradient-to-b from-cyan-400/60 via-blue-400/40 to-transparent" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
