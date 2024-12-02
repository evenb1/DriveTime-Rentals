import React from 'react'

return (
    <div>
      <GlassNavbar />
      <section className="bg-slate-100 min-h-screen px-10 py-20">
        <motion.div
          className="container mx-auto flex gap-10 items-start"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left: Image Grid */}
          <div className="flex flex-col w-1/2 gap-4">
            {car.images.map((image: string, index: number) => (
              <motion.div
                key={index}
                className="relative h-60 w-full rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={image}
                  alt={`Car Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>

      </section>
    </div>
  );
};

export default ProductPage;