export default function BusinessFeatures() {
  const features = [
    {
      title: "Enterprise Security",
      description: "Advanced encryption and multi-factor authentication",
      icon: "🔐"
    },
    {
      title: "Team Management",
      description: "Centralized user management and role-based access",
      icon: "👥"
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive insights and compliance reporting",
      icon: "📊"
    },
    {
      title: "24/7 Support",
      description: "Dedicated support team for enterprise customers",
      icon: "🛟"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Enterprise Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything your business needs to secure and manage access
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
