import { motion } from "framer-motion";

import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className='sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5'
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-cp"/>
          <div className="w-1 sm:h-80 h-84 violet-gradient"/>
        </div>

          <div>
            <h1 className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'>Hi, I&apos;m <span className="text-cp">Clément</span></h1>
            <p className='my-2 text-white-100 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]'>I develop 3d visuals, user <br /> interfaces and web applications</p>
          </div>
      </div>

          <ComputersCanvas/>

          <div className="absolute xs:-bottom-16  bottom-[-30px]  w-full flex justify-center items-center">
            <a href="#about">
              <div className="w-[30px] h-[62px] rounded-3xl border-[3px] border-secondary flex justify-center items-center p-2">
                <motion.div
                animate={{
                  y:[0, 24, 0]
                }}
                transition={{
                  duration:1.6,
                  repeat:Infinity,
                  repeateType: 'loop'
                }}
                className="w-3 h-3 p-[6px] rounded-full bg-secondary mb-1"
                />
              </div>
            </a>
          </div>
    </section>
  );
};

export default Hero;
