import Button from "@components/ui/Button";

export default function Hero() {
  return (
    <section className="py-4 lg:py-12">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl flex flex-col justify-center items-center mx-auto">
          <h3 className="text-dark-900 text-2xl lg:text-[42px] mb-2">Your Identity, Simplified & Protected</h3>
          <p className="text-dark-150 text-sm lg:text-xl mb-8">Secure your KYC in one vault. Onboard faster, stay in control.</p>
          <Button
            isLink
            linkUrl="https://swiftpass-web.vercel.app/register"
          >
            Get Started
          </Button>
        </div>
      </div>

      <div className="bg-[#F7F7F7] py-4 px-4 mt-10">
        <img src="hero_individual.png" alt="Dashboard Overview" />
      </div>
    </section>
  );
}
