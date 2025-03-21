import { motion } from "framer-motion";

export const Home = () => {
  return (
    <div className="home-page">
<div className="home-page bg-white min-h-screen flex flex-col items-center justify-center px-6">
  <div className="w-full flex items-center justify-center h-[600px]">
    <div className="flex w-full max-w-screen-xl">
      {/* Left Column (Description on Top, Image Below) */}
      <div className="w-1/2 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Hey, I'am Akash</h2>
          <p className="text-lg text-gray-600">
            I'm currently working on full-stack projects and love learning new
            frameworks.
          </p>
        </div>
      </div>

      {/* Right Column (Image) */}
      <div className="w-1/2 p-4">
        <img
          src="/images/akash.jpg"
          alt="Akash"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  </div>
</div>

    
    </div>
  )
}
