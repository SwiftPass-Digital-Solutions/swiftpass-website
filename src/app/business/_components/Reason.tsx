export default function Reason() {
  const cards = [
    {
      image: "spsn.png",
      alt: "Faster KYC",
      caption: "Faster KYC onboarding = higher conversion rates",
    },
    {
      image: "vault.svg",
      alt: "Secure, verifiable KYC data every time",
      caption: "Secure, verifiable KYC data every time",
    },
    {
      image: "biodata.png",
      alt: "Reduced costs",
      caption: "Reduced costs—no more manual document handling",
    },
    {
      image: "logs.png",
      alt: "Trust continuity",
      caption: "Offers trust continuity—users own their data, but you get verified access",
    },
  ];

  return (
    <section className="py-12 px-4 bg-white sm:px-6 lg:px-8 lg:pt-18">
      <h3 className="font-medium text-xl md:text-[32px] mb-12 text-center">
        Why Swiftpass for{' '}
        <span className="text-primary-500 relative">
          Business
          <svg
            className="absolute left-0 -bottom-3 w-full h-2"
            viewBox="0 0 144 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <rect x="6" y="3" width="138" height="5" rx="2" fill="#6D88F4" />
            <rect width="138" height="5" rx="2" fill="#CED7FB" />
          </svg>
        </span>
      </h3>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-x-3 lg:gap-x-4">
        <div className="flex-1 flex flex-col gap-y-4 h-full">
          {cards.slice(0, 2).map((card, idx) => (
            <figure
              key={idx}
              className={`flex-1 rounded-2xl p-6 bg-neutral-500 ring-1 ring-black/5 overflow-hidden py-10 flex flex-col justify-between`}
            >
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
              <figcaption className={`font-medium text-center text-lg xl:text-2xl mt-8`}>
                {card.caption}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-y-4">
          {cards.slice(2, 4).map((card, idx) => (
            <figure
              key={idx + 2}
              className="rounded-2xl p-6 bg-neutral-500 ring-1 ring-black/5 overflow-hidden"
            >
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
              <figcaption className="font-medium text-center text-lg xl:text-2xl">
                {card.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
