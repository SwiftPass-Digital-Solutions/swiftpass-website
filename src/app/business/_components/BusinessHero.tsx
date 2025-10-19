export default function BusinessHero() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Business Solutions
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Enterprise-grade security and access management for your organization
        </p>
        <div className="space-x-4">
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Request Demo
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition">
            View Pricing
          </button>
        </div>
      </div>
    </section>
  );
}
