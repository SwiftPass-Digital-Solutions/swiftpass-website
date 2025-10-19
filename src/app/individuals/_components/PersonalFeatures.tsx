export default function PersonalFeatures() {
  const features = [
    {
      title: "Easy Setup",
      description: "Get started in minutes with our simple setup process",
      icon: "⚡"
    },
    {
      title: "Family Sharing",
      description: "Share secure access with family members safely",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Cross-Platform",
      description: "Works on all your devices - phone, tablet, computer",
      icon: "📱"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Personal Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for personal access management
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
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
