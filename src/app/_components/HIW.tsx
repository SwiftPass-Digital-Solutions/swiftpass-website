import Button from "../components/ui/Button";

export default function HIW() {
  const steps = [
    {
      title: "Create Vault",
      description: "Upload documents (NIN, BVN, passport) and verify with partners",
      buttonText: "Start free trial",
      image: "vault-dashboard.png",
      imageAlt: "Vault Dashboard"
    },
    {
      title: "Generate your SwiftPass Secure Number (SPSN)",
      description: "Get a secure, reusable SwiftPass PIN for onboarding",
      buttonText: "Start free trial",
      image: "spsn.png",
      imageAlt: "SPSN"
    },
    {
      title: "Share and Onboard",
      description: "Use SPSN at partner apps for instant verification.",
      buttonText: "Start free trial",
      image: "overview.png",
      imageAlt: "Share and Onboard"
    }
  ];
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F6F7FE]">
      <h3 className="font-medisum text-[32px] mb-8 text-center">
        How it{' '}
        <span className="text-primary-500 relative">
          Works
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
      <div className="flex flex-col lg:flex-row items-center gap-22">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col gap-6">
            <div className="flex-shrink-0">
              <img src={step.image} alt={step.imageAlt} className="object-cover" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-xl">{step.title}</h4>
              <p className="text-dark-200 text-sm">{step.description}</p>
            </div>
            <div>
              <Button
                isLink
                linkUrl="https://swiftpass-web.vercel.app/register"
              >
                {step.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
