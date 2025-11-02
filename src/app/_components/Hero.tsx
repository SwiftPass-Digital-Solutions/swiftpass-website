'use client';
import Button from "../components/ui/Button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary-400 to-primary-500 text-white pl-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 overflow-hidden">
            <div className="flex flex-col gap-8 w-full md:w-[380px] lg:w-[431px] flex-shrink-0 pt-12 pb-6 pr-6 md:pt-0 md:pr-0 md:pb-0">
                <div className="flex flex-col gap-3">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold tracking-tight">
                        Centralize KYC, Accelerate Onboarding with SwiftPass
                    </h1>
                    <p className="text-sm md:text-base">
                        Store your identity securely and use one PIN across multiple apps, cut onboarding time, slash drop-offs.
                    </p>
                </div>
                <div>
                    <Button
                        isLink
                        linkUrl="https://swiftpass-web.vercel.app/register"
                    >
                        Get Started
                    </Button>
                </div>
            </div>
            <img src="hero.png" alt="Hero" className="flex-1 min-w-0 object-contain" />
        </div>
    </section>
  );
}
