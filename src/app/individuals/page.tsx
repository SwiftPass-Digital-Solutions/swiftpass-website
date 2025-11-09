import Benefit from "./_components/Benefit";
import Hero from "./_components/Hero";
import HIW from "./_components/HIW";
import Reason from "./_components/Reason";
import Reviews from "./_components/Reviews";

export default function Individuals() {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <Hero />
      <Reason />
      <Benefit />
      <HIW />
      <Reviews />
    </div>
  );
}
