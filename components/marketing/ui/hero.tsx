export function Hero() {
  return (
    <section className="bg-white flex items-center justify-center pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-6xl sm:text-7xl lg:text-7xl font-black leading-[1.05] tracking-tight bg-gradient-to-b from-[#1a1a1a] to-[#0D47A1] bg-clip-text text-transparent">
          We bring people together
          <br />
          to solve real problems
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
          Zerotone pairs business analysts, finance specialists, and technologists around one
          problem at a time.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-block bg-[#1e40af] text-white px-8 py-4 rounded-full font-semibold text-sm shadow-[0_10px_25px_-5px_rgba(30,64,175,0.6)] hover:opacity-90 transition-opacity"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
