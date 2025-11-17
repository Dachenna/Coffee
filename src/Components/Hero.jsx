import React from 'react'
import BgImage from '/black-bg.jpeg'

const bgimage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  
}
const Hero = () => {
  return (
    <main style={bgimage}>
      <section className='min-h-[750px] w-full'>
        <div className="container">
            {/* Navbar Section */}
            {/* Hero Section */}
            <div className="grid grid-cols-1 md:grid-cols-2">
            {/* text content section */}
            <div className='text-lightOrange'>
              <h1>Dark Quintessence</h1>
            </div>
            {/* Hero Image section */}
            <div></div>
            {/* third div secion section */}
            <div></div>
            </div>
        </div>
      </section>
    </main>
  )
}

export default Hero
