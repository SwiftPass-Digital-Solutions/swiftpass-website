import Button from "@components/ui/Button";

export default function Hero() {
  return (
    <section className="pt-6 lg:pt-12 px-2 sm:px-6 lg:px-4">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl flex flex-col justify-center items-center mx-auto">
          <h3 className="text-dark-900 text-center text-2xl font-semibold tracking-[-3%] leading-[145%] mb-2 lg:text-[42px]">Your Identity, Simplified & Protected</h3>
          <p className="text-dark-150 text-sm lg:text-xl mb-8">Secure your KYC in one vault. Onboard faster, stay in control.</p>
          <Button
            className="w-[217px] h-[55px]"
            isLink
            linkUrl="https://swiftpass-web.vercel.app/register"
          >
            Get Started
          </Button>
        </div>
      </div>

      <div className="bg-[#F7F7F7] rounded-tl-2xl rounded-tr-2xl py-4 px-4 mt-10 lg:rounded-tl-4xl lg:rounded-tr-4xl">
        <img src="hero_individual.png" alt="Dashboard Overview" />
      </div>
    </section>
  );
}
