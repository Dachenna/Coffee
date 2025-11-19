import React from 'react'
import HeroImg from '/cofee_hero-transparent.png'

const bgimage = {
    backgroundImage: `url(https://images.unsplash.com/photo-1637946175491-53bca31c90ba?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100vw",
}
const Hero = () => {
  return (
    <main style={bgimage}>
      <section className='min-h-[750px] w-full'>
        <div className="container">
            {/* Navbar Section */}
            {/* Hero Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  
              items-center min-h-[650px]"
            >
            {/* text content section */}
            <div className='text-lightOrange mt-[100px] md:mt-0 p-4
                space-y-24'>
              <h1 className='text-6xl font-bold leading-tight '>Dark Quintessence</h1>
              <div className='relative z-10 space-y-4 '>
                <h2 className='text-xl mb-2'>Black Lifestyle Lovers</h2>
                <p className='text-sm opacity-55 leading-loose'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Architecto ab officiis, sit debitis,
                  porro est beatae optio voluptates alias quaerat labore qui rem magni reprehenderit,
                  culpa libero placeat odio sed?
                </p>
                <div className='absolute -top-6 -left-10 w-[250px]
                  h-[180px] bg-gray-700/25'></div>
              </div>
            </div>
            {/* Hero Image section */}
            <div className='relative'>
              <img className=' max-w-full py-4' src={HeroImg} alt="Hero image" />
            </div>
            {/* third div secion section */}
            <div></div>
            </div>
        </div>
      </section>
    </main>
  )
}

export default Hero
