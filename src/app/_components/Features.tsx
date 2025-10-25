import Link from 'next/link';
import Button from '../components/ui/Button';

export default function Features() {
  const features = [
    {
      title: "One Secure Vault",
      description: "Consolidate documents like BVN, NIN, passports, managed by you, shared securely with partners.",
      buttonText: "Get Started",
      image: "vault.png",
      imageAlt: "Vault"
    },
    {
      title: "SwiftPass PIN",
      description: "Single reusable PIN that’s recognized by partner companies",
      buttonText: "Get my pin now",
      image: "pin.png",
      imageAlt: "SwiftPass PIN"
    },
    {
      title: "Transparent Control",
      description: "Know what platform accessed your data and when",
      buttonText: "Take control",
      image: "control.png",
      imageAlt: "Transparent Control"
    },
    {
      title: "For Businesses Too",
      description: "Fast, compliant onboarding integrations",
      buttonText: "Start onboarding",
      image: "business.png",
      imageAlt: "Businesses Too"
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-16 py-20 bg-white">
      <h3 className="font-medisum text-[32px] text-centers">
        Feature{' '}
        <span className="text-primary-500 relative">
          Highlights
          <svg 
            className="absolute left-0 -bottom-3 w-full h-2" 
            viewBox="0 0 144 8" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <rect x="6" y="3" width="138" height="5" rx="2" fill="#6D88F4"/>
            <rect width="138" height="5" rx="2" fill="#CED7FB"/>
          </svg>
        </span>
      </h3>
      <div className="flex flex-col px-4 sm:px-6 lg:px-8 gap-16">
        {features.map((feature, index) => (
          <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 max-w-6xl ${index % 2 === 1 ? 'flex-col lg:flex-row-reverse' : ''}`}>
            <div className="flex flex-col gap-8 max-w-[415px]">
              <h3 className="font-medium text-[32px]">
                {feature.title}
              </h3>
              <p className="text-xl text-dark-400">{feature.description}</p>
              <div>
                <Button>
                  {feature.buttonText}
                </Button>
              </div>
            </div>
            <img src={feature.image} alt={feature.imageAlt} className="flex-1 min-w-0 object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}
