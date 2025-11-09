export default function Reviews() {
    const reviews = [
        {
            name: "Chioma Okafor",
            rating: 5,
            review: "SwiftPass has completely transformed how I handle verification. No more uploading the same documents repeatedly! I used to dread signing up for new services because of the tedious KYC process, but now with my SPSN, it's all done in seconds.",
        },
        {
            name: "Adebayo Mensah",
            rating: 4.8,
            review: "I love how secure and convenient this is. My SPSN makes onboarding so much faster across different platforms. As someone who frequently uses fintech apps, this has been a game-changer. I no longer need to keep copies of my documents on my phone or email.",
        },
        {
            name: "Fatima Ibrahim",
            rating: 4.5,
            review: "Finally, a solution that puts my privacy first. I control who sees my documents and when. Highly recommend! The ability to grant and revoke access to my verification details is exactly what I needed. SwiftPass has made digital verification stress-free and I feel confident using it for all my online registrations.",
        },
    ];
    return (
        <section className="py-12 px-4 overflow-hidden sm:px-6 lg:px-0">
            <h3 className="font-medium text-xl md:text-[32px] mb-12 text-center">
                Why are people{' '}
                <span className="text-primary-500 relative">
                    saying?
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

            <div className="flex flex-col items-center gap-6 lg:gap-10 lg:flex-row">
                {reviews.map((review, index) => (
                    <div 
                        key={index}
                        className="flex flex-col items-center lg:w-3xl"
                    >
                        <div className="relative max-w-3xl">
                            <p className="text-base md:text-2xl p-8 rounded-2xl bg-[#FAFAFA]">
                                {review.review}
                            </p>
                            {/* Chat bubble pointer */}
                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-[#FAFAFA]"></div>
                        </div>
                        <div className="flex items-center mt-6 gap-2">
                            <img className="w-8 h-8 lg:w-12 lg:h-12" src="avatar.svg" alt="" />
                            <h4 className="text-lg md:text-2xl text-dark-200">
                                {review.name}
                            </h4>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z" fill="#F9BB00"/>
                            </svg>
                            <span className="text-[#F9BB00] font-medium text-sm md:text-xl">
                                {review.rating}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}