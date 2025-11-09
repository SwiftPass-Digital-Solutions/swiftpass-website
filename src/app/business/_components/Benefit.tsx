export default function Benefit() {
    const benefits = [
        {
            caption: "Lightning-fast onboarding flows",
            image:  "lightening.png",
            backgroundColor: "#FFFCF0",
            borderColor: "#FFE994"
        },
        {
            caption: "Lower UX drop-offs & higher activation rates",
            image:  "ux.png",
            backgroundColor: "#F0F6FF",
            borderColor: "#94BFFF"
        },
        {
            caption: "Compliant with KYC/AML local regulations",
            image: "smartphone.svg",
            backgroundColor: "#F3F0FF",
            borderColor: "#A994FF"
        },
        {
            caption: "Scales easily across multiple user bases and apps",
            image: "phone2.svg",
            backgroundColor: "#FAFAFA",
            borderColor: "#DFDFDF"
        }
    ];

    return (
        <section className="w-full pt-6 pb-15 px-4 sm:px-6 lg:pt-12 lg:px-8">
            <h3 className="font-medium text-xl md:text-[32px] mb-12 lg:mb-18 text-center">
                Benefits of{' '}
                <span className="text-primary-500 relative">
                    Swiftpass
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

            <div className="w-full flex flex-col gap-6 lg:gap-10 max-w-5xl mx-auto">
                {
                    benefits.map((benefit, index) => (
                        <figure
                            key={index}
                            className={`w-full max-w-3xl rounded-3xl p-8 flex items-center justify-between gap-6 lg:gap-0 border-2 ${index % 2 === 0 ? 'flex-row-reverse' : 'self-end'}`}
                            style={{ backgroundColor: benefit.backgroundColor, borderColor: benefit.borderColor }}
                        >
                            <img src={benefit.image} alt={benefit.caption} className="w-25 h-25 lg:w-50 lg:h-50" />
                            <figcaption className={`font-medium text-xl lg:text-3xl ${index % 2 === 0 ? 'text-start' : 'text-end'}`}>{benefit.caption}</figcaption>
                        </figure>
                    ))
                }
            </div>
        </section>
    );
}