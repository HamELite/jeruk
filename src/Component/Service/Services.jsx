
import { motion } from "framer-motion"; 
import jeruk1 from "../../assets/fruits/fruits1.webp";
import jeruk2 from "../../assets/fruits/fruits2.png";
import jeruk3 from "../../assets/fruits/fruits3.png";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 }, 
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0, 
        ease: "easeInOut", 
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-white flex flex-col items-center"
      initial="hidden"
      animate="visible" 
      variants={containerVariants}
    >
      <div className="text-center mt-10 gap-x-5">
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Fresh and <span style={{ color: "orange" }}>Tasty Fruits</span>
        </h1>
        <p data-aos="fade-up" className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          reprehenderit eum ducimus, distinctio cum eaque totam voluptatem ex
          dolorem fuga.
        </p>
     
      </div> 

      
      <div data-aos="fade-up" className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
        {/* Kartu */}
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1 }} 
              transition={{ type: "spring", stiffness: 300 }}
            >
               <motion.img
                src={
                  index === 0
                    ? jeruk1
                    : index === 1
                    ? jeruk2
                    : jeruk3
                }
                alt="Fresh Fruits"
                className="w-40 h-40 mb-4 transition-transform duration-300 img-shadow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ y: -10 }}
                // transition={{ type: "spring", stiffness: 300 }} 
              />
            </motion.div>
            <h2 data-aos="fade-up" className="text-xl font-bold">
              {index === 2 ? (
                <>
                  Orange <span style={{ color: "orange" }}>Juice</span>
                </>
              ) : (
                <>
                  Fresh <span style={{ color: "orange" }}>Fruits</span>
                </>
              )}
            </h2>

            <p data-aos="fade-up" className="text-gray-600 text-left mt-2 w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          // p
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
