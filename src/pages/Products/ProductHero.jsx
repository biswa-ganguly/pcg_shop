import React from 'react'
import bgproduct from "/assets/bgproduct.png";

function ProductHero() {
  return (
    <section>
    <div
      className="relative bg-cover bg-center text-white p-10 flex items-center justify-center lg:justify-between lg:h-[48vh]"
      style={{
        backgroundImage: `url(${bgproduct})`,
      }}
    >
      {/* <div className="absolute inset-0 bg-gradient-to-t from-[#19325b] to-transparent"></div> */}
      
      <div className="text-white max-w-lg text-center lg:text-left lg:ml-[10%]">
      </div>
    </div>
  </section>
  )
}

export default ProductHero