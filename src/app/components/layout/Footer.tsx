export default function Footer() {
    const links = [
        {
            "Quick Links": [
                { title: "Pricing Plan", url: "#" },
                { title: "Documentation", url: "#" },
                { title: "Guide", url: "#" },
                { title: "Tutorial", url: "#" }
            ],
            "Company": [
                { title: "About", url: "#" },
                { title: "Blog", url: "#" },
                { title: "Careers", url: "#" },
                { title: "Partners", url: "#" }
            ],
            "Legal": [
                { title: "Claim", url: "#" },
                { title: "Privacy", url: "#" },
                { title: "Terms", url: "#" }
            ]
        }
    ];
    return (
        <section className="flex flex-col lg:flex-row justify-start items-start lg:items-center gap-8 bg-[#F8F9FA] pt-12 pb-14 px-4 sm:px-6 lg:px-8">
            {links.map((category, index) => (
                <div key={index} className="flex-1 w-full">
                    <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {Object.entries(category).map(([categoryName, linkItems]) => (
                            <div key={categoryName}>
                                <h6 className="font-medium text-base md:text-lg text-dark-50 mb-4">{categoryName}</h6>
                                <ul className="space-y-2">
                                    {linkItems.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a href={link.url} className="text-sm md:text-base text-dark-900 hover:text-primary-500">
                                                {link.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <div className="max-w-[401px]">
                <h6 className="font-medium text-base md:text-lg text-dark-50 mb-2">Subscribe to our newsletter</h6>
                <p className="text-sm md:text-base text-dark-900">Funding freemium long tail hypotheses first mover advantage assets ownership</p>
                <div className="mt-6 lg:mt-10 flex flex-col md:flex-row gap-3">
                    <input type="email" placeholder="Enter your email" className="flex-1 border border-[#E6E6E6] rounded-xl p-4" />
                    <div>
                        <button className="bg-primary-500 text-white text-sm rounded-xl p-4">Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    );
}