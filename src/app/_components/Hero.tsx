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
                <div className="flex flex-col justify-start items-start md:items-center gap-5 md:flex-row">
                    <Button
                        isLink
                        linkUrl="https://swiftpass-web.vercel.app/register"
                    >
                        Get Started
                    </Button>
                    <a className="cursor-pointer flex items-center padding-[10px] gap-[10px] decoration-0" href="#">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.33594 9.99983V7.03316C3.33594 3.34983 5.94427 1.8415 9.13594 3.68316L11.7109 5.1665L14.2859 6.64983C17.4776 8.4915 17.4776 11.5082 14.2859 13.3498L11.7109 14.8332L9.13594 16.3165C5.94427 18.1582 3.33594 16.6498 3.33594 12.9665V9.99983Z" fill="#ffffff"/>
                        </svg>
                        <span className="text-white">Watch Demo</span>
                    </a>
                </div>
            </div>
            <img src="/hero.png" alt="Hero" className="block w-full h-auto md:flex-1 md:min-w-0 object-contain" />
        </div>
    </section>
  );
}
