export default function SC() {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
            <h3 className="font-medium text-xl md:text-[32px] mb-7 text-center">
                Security &{' '}
                <span className="text-primary-500 relative">
                    Compliance
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
            <p className="text-center text-sm md:text-xl text-dark-400 max-w-2xl mx-auto">
                AES-256 encryption, SOC-aligned controls, and regional compliance (NDPR equivalent). We never sell user data — you own and control access
            </p>
            <img src="compliance.png" alt="Security and Compliance" className="hidden lg:block mt-16 mx-auto object-contain" />
            <img src="compliance_sm.png" alt="Security and Compliance" className="lg:hidden mt-12 mx-auto object-contain" />
        </section>
    );
}