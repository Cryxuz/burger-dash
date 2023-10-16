import Footer from './Footer'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Story() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
      className="xl:flex h-screen px-[10%] py-[5%] gap-[5%] bg-cover justify-center items-center pt-[15%] xl:pt-[5%]"
      style={{ backgroundImage: 'url("/images/ember.webp")' }}
    >
      <div className="text-center items-center justify-center">
        <ul className="text-white hidden xl:block pt-[5%]">
          <h2>Lead Staff</h2>
          <br />
          <p className="pb-[5%]">Stanley & Paul</p>
          <p>-</p>
          <p className="italic text-sm">Owners</p>
          <br />
          <p className="pb-[5%]"> Auguste Escoffier</p>
          <p>-</p>
          <p className="italic  text-sm">Executive Chef</p>
          <br />
          <p className="pb-[5%]">Felix Sterling</p>
          <p>-</p>
          <p className="italic text-sm">General Manager</p>
          <br />
          <p className="pb-[5%]">Andrea Robinson</p>
          <p>-</p>
          <p className="italic text-sm">Sommelier</p>
        </ul>
      </div>
      <img
        src="/images/story.webp"
        alt="ai chef"
        className="rounded-xl w-full md:w-[50%] md:h-auto mx-auto "
      />
      <div className="pt-[10%] xl:pt-[0] m-[5%]">
        <p className=" text-white text-center text-xl md:text-2xl xl:text-3xl ">
          In the heart of our charming town, nestled amid cobblestone streets
          and historic architecture, our restaurant serves as a culinary haven
          where timeless traditions and innovative flavors come together to
          create an unforgettable dining experience.
        </p>
      </div>
      <div className="flex items-end justify-end fixed bottom-0 right-0 left-0 pb-2 px-10">
        <Footer />
      </div>
    </motion.div>
  )
}

export default Story
