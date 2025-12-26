const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br mt-8 from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Me</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Welcome to my personal space where I share my thoughts, experiences,
            and everything in between.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Column - Image & Basic Info */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative">
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <span className="text-7xl">👨‍💻</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">
                Md. Abu Sufian
              </h2>
              <div className="inline-flex flex-wrap gap-3 justify-center">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Blogger
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  Creator
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Storyteller
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Story */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                My Story
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Hello! I'm the creator behind this blog. What started as a
                  simple hobby of documenting thoughts has grown into a platform
                  where I share my journey, learnings, and passions.
                </p>
                <p>
                  Through this blog, I aim to connect with like-minded
                  individuals, share valuable insights, and create content that
                  inspires, educates, or simply entertains.
                </p>
                <p>
                  When I'm not writing, you can find me exploring new ideas,
                  learning new skills, or enjoying a good book with coffee in
                  hand.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm text-gray-500">Articles Written</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  2+
                </div>
                <div className="text-sm text-gray-500">Years Writing</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-green-600 mb-2">∞</div>
                <div className="text-sm text-gray-500">Ideas to Share</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What I Believe In
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "✨",
                title: "Authenticity",
                description:
                  "Sharing genuine thoughts and experiences without pretense.",
              },
              {
                icon: "💡",
                title: "Growth",
                description:
                  "Constantly learning and evolving through writing and reflection.",
              },
              {
                icon: "🤝",
                title: "Connection",
                description:
                  "Building meaningful relationships through shared stories.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Touch Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 mb-20 border border-blue-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Beyond the Blog
            </h2>
            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-700">
                  Current Obsessions
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Learning new technologies</li>
                  <li>• Morning journaling</li>
                  <li>• Trying new coffee recipes</li>
                  <li>• Digital photography</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-700">Daily Rituals</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Reading for 30 minutes</li>
                  <li>• Writing morning pages</li>
                  <li>• Walking in nature</li>
                  <li>• Planning the day ahead</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Let's Connect
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'd love to hear from you! Whether you have feedback, ideas to
            share, or just want to say hello, feel free to reach out.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            Get in Touch
          </button>
        </div>
      </section>

      {/* Decorative elements */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="fixed bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    </div>
  );
};

export default AboutPage;
