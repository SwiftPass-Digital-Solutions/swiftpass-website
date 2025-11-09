import Button from "@components/ui/Button";

export default function DE() {

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <h3 className="font-medium text-[32px] mb-12 lg:mb-15 text-center">
        Developer{' '}
        <span className="text-primary-500 relative">
          Experience
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

      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-40 overflow-x-hidden">
        <div className="lg:min-w-md lg:flex-shrink-0 lg:z-10">
          <ul className="list-disc ml-4 lg:[&>li]:text-xl [&>li]:tracking-[-3%] [&>li]:mb-6 mb-8">
            <li>Clear documentation with examples</li>
            <li>Sandbox & production environments</li>
            <li>Security protocols (OAuth, encryption standards)</li>
          </ul>

          <div className="flex flex-col justify-start items-start md:items-center gap-5 md:flex-row">
            <Button
              className="w-[217px] h-[55px]"
              isLink
              linkUrl="https://swiftpass-web.vercel.app/register"
            >
              Get Started Now
            </Button>
            <a className="cursor-pointer flex items-center padding-[10px] gap-[10px] decoration-0" href="#">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33594 9.99983V7.03316C3.33594 3.34983 5.94427 1.8415 9.13594 3.68316L11.7109 5.1665L14.2859 6.64983C17.4776 8.4915 17.4776 11.5082 14.2859 13.3498L11.7109 14.8332L9.13594 16.3165C5.94427 18.1582 3.33594 16.6498 3.33594 12.9665V9.99983Z" fill="#0C39ED"/>
              </svg>
              <span className="text-primary-500">Access API Docs</span>
            </a>
          </div>
        </div>
        <div className="relative w-full lg:w-auto lg:flex-1 overflow-hidden rounded-l-3xl lg:rounded-tl-3xl lg:rounded-bl-none lg:rounded-r-none -mr-4 sm:-mr-6 lg:-mr-8 lg:h-[520px]" style={{ boxShadow: '-6px 4px 32px 0px rgba(142, 142, 142, 0.25)' }}>
          <img className="w-[200%] lg:w-full max-w-none rounded-l-3xl lg:rounded-tl-3xl lg:rounded-bl-none lg:rounded-r-none object-cover object-left h-full lg:h-[700px]" src="business_dashboard.png" alt="Dashboard Overview" />
        </div>
      </div>
    </section>
  );
}
