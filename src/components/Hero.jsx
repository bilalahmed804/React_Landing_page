import landingPageData from "../contant/data"
function Hero (){
    return (
        <>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        {landingPageData.hero.title}
      </h1>
      <p className="mb-8 leading-relaxed">
      {landingPageData.hero.description}
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          {landingPageData.hero.buttonText}
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src={landingPageData.hero.image}
      />
    </div>
  </div>
</section>
        </>
    )
}

export default Hero