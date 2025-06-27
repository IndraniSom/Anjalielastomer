import React from 'react';
import Image from 'next/image';
const AboutUs: React.FC = () => {
  return (
    <div className="w-full flex justify-between gap-20 h-screen bg-white px-5 py-10 font-Raleway">
    
<div className="w-[30%] max-w-xs md:max-w-sm lg:max-w-md space-y-6 ml-10 flex flex-col justify-center">
  <div className="rounded-xl overflow-hidden">
    <Image
      src="/aboutimg1.png"
      alt="High-speed train"
      width={600}
      height={400}
      className="w-full h-auto object-cover"
    />
  </div>
  <div className="rounded-xl overflow-hidden">
    <Image
      src="/aboutimg2.png"
      alt="Metro in manufacturing"
      width={600}
      height={400}
      className="w-full h-auto object-cover"
    />
  </div>
</div>

      <div className="w-[70%] flex flex-col h-full text-left">
        <h1 className="text-4xl font-bold text-textblue mb-6 flex gap-3">
          About <span className='text-textorange'>Us</span>
        </h1>
        <span className="text-2xl text-textblue font-light mb-4 font-monte ">
          Unified in Shaping Railway&apos;s Future
        </span>
        
        <div className='flex w-full gap-7 my-10 font-monte'>
          <div className='w-[50%] text-justify'>
            <h1 className="text-lg font-bold text-textblue mb-6 flex gap-3 font-monte">
          Our <span className='text-textorange'>Story</span>
        </h1>
            <p className='text-textblue text-sm font-light mb-4'>
              Over the previous 15 years, Anjali Elastomers, which was founded in 2009, has developed from a maker of rail components to a top supplier of entire railway infrastructure.
            </p>
            </div>
            <div className='w-[50%] text-justify'>
            <h1 className="text-lg font-bold text-textblue mb-6 flex gap-3 font-monte">
          Integrated  <span className='text-textorange'>Capabilities</span>
        </h1>
            <p className='text-textblue text-sm font-light mb-4'>
              Bridge building, track construction, rail flash butt welding, rail turnout systems, and rail fastening systems are just a few of the railway sector disciplines in which we operate.
            </p>
            </div>
        </div>
        <div className='flex w-full gap-7 my-10 font-monte'>
          <div className='w-[50%]'>
            <h1 className="text-lg font-bold text-textblue mb-6 flex gap-3 font-monte">
          Manufacturing  <span className='text-textorange'>Excellence</span>
        </h1>
            <p className='text-textblue text-sm font-light mb-4'>
             We manufacture a variety of railway track goods at our four cutting-edge production plants in Eastern India. Our plants incorporate state-of-art Technology to mobilise Good Manufacturing Practices.
            </p>
            </div>
            <div className='w-[50%]'>
            <h1 className="text-lg font-bold text-textblue mb-6 flex gap-3 font-monte">
          Key Projects &  <span className='text-textorange'>Achievements</span>
        </h1>
            <p className='text-textblue text-sm font-light mb-4'>
              The Jiribam-Imphal Rail Link, the Udhampur-Srinagar-Baramulla Rail Link, and the 4.5 km Rail Cum Road Steel Bridge across the River Ganga near Patna are some of our noteworthy projects that demonstrate our proficiency as the top railroad manufacturing and turnkey railway infrastructure organization.
            </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;