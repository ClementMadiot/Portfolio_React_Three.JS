import  ComputersCanvas  from "./Computers";
const Header = () => {
  return (
    <section className="flex flex-col px-6 py-10 sm:mt-6 sm:px-16 sm:py-16 max-w-7xl mx-auto lg:h-screen ">
      <article className='flex flex-row items-start mt-6 gap-5 '
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-cp"/>
          <div className="w-1 sm:h-[260px] h-[240px] violet-gradient"/>
        </div>

          <div>
            <h1 className='font-black text-white lg:text-[90px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'>Hi, I&apos;m <span className="text-cp">Clément</span></h1>
            <p className='my-2 text-white-100 font-medium lg:text-[30px] sm:text-[24px] xs:text-[20px] text-[17px] lg:leading-[40px]'>I develop 3d visuals, user <br /> interfaces and web applications</p>
          </div>
      </article>

      <article className="hidden lg:flex w-full h-full z-10">
        <ComputersCanvas/>
        </article>
    </section>
  );
};

export default Header;
