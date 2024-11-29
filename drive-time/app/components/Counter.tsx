import { motion } from 'framer-motion'
import Image from 'next/image'
import counter from '@/public/counter.jpg'
import counter2 from '@/public/counter2.jpg'
import CountUp from "react-countup";
import { useState, useEffect } from 'react';


const stats = [
    { num: 15, text: "Years of experience" },
    { num: 50, text: "Satisfied clients" },
  ];
  const [isVisible, setIsVisible] = useState(false);

  
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setIsVisible(true); // Start animation when the section is in view
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

    const target = document.getElementById("motion-section");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target); // Cleanup observer
    };
  }, []);

const Counter = () => {
    
  return (
    <motion.div className='p-0 flex flex-row bg-charcoal justify-start gap-5'>
        <div className='flex flex-row gap-2 justify-start'>
            <Image src={counter} fill className='object-contain' alt="lady"/>
            <Image src={counter2} fill className='object-contain' alt="car"/>


        </div>
        <div className='flex flex-col items-center gap-2'>
            <div className='flex flex-col text-center'>
                <h1 className='text-slate-50 font-bold font-montserrat text-3xl'>Premium Cars Rental</h1>
                <h3 className='text-slate-100 font-inter font-light'>Only the best</h3>
                <p className='text-slate-100 text-sm'>Praesent elementum facilisis leo vel fringilla est. Vest bulum lectus a urise ultrices eros in cursus turpi uto.</p>
            </div>
            <motion.div>
            {stats.map((item, index) => {
        const suffix = item.num === 300 ? "k+" : "+";

        return (
          <div key={index} className='text-center'>
            <CountUp 
              end={item.num} 
              suffix={suffix} 
              duration={4} 
              delay={2} 
              className="text-2xl xl:text-5xl text-white font-extrabold" 
            />
            <p className="mt-2 text-lg">{item.text}</p>
          </div>
        );
      })}

            </motion.div>

        </div>


    </motion.div>
  )
}

export default Counter