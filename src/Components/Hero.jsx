import React from 'react' // use transparent subject if available
import Banner from '/Black.png'
import HeroImg from '/coffee_body.png'

const Hero = () => {
  return (
    <main id='banner' className="relative overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0 z-10  pointer-events-none">
        <img
        src={Banner}
        alt=""
        aria-hidden="true"
        className=" h-full max-h-full min-w-full "
        />
      </div>

      <section className='relative z-20 min-h-[750px] w-full flex items-center'>
        <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center min-h-[650px]">
          {/* text content section */}
            <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-6'>
              <h1 className='text-4xl md:text-6xl font-bold leading-tight'>Dark Quintessence</h1>
              <div className='space-y-4'>
                <h2 className='text-lg md:text-xl mb-2'>Black Lifestyle Lovers</h2>
                <p className='text-sm md:text-base opacity-75 leading-loose'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Architecto ab officiis, sit debitis, porro est beatae optio voluptates alias quaerat labore qui rem magni reprehenderit, culpa libero placeat odio sed?
                </p>
              </div>
            </div>

            {/* Hero Image (subject) */}
            <div className='relative z-10 left-[100%] -top-2.5 justify-center items-center h-[500px] md:h-[650px] lg:h-[750px] w-full flex'>
              <img
                src={HeroImg}
                alt=" Hero Image"
                className='h-[550px] w-auto mask-[linear-gradient(to_bottom,black,transparent)] object-contain rounded-lg'
              />
            </div>

            {/* spacer / extra column */}
            <div></div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero
