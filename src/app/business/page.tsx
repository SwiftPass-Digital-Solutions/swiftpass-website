import Reviews from '../individuals/_components/Reviews';
import Benefit from './_components/Benefit';
import DE from './_components/DE';
import Hero from './_components/Hero';
import IO from './_components/IO';
import Reason from './_components/Reason';

export default function Business() {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <Hero />
      <Reason />
      <Benefit />
      <IO />
      <DE />
      <Reviews />
    </div>
  );
}
