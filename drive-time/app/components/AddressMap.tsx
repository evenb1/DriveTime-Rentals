import { FaClock, FaHeadphones, FaLocationDot } from "react-icons/fa6";

const AddressSection: React.FC = () => {
  return (
    <section className="py-10 px-4 bg-gray-50">
      {/* Heading and Map */}
      <div className="max-w-6xl mx-auto pb-10">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Find Us Here
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Visit us at our location or contact us for more details.
        </p>
        <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.800071875173!2d36.77231177467018!3d-1.2944854986932088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a0cf264cca7%3A0x9ad22a18b987c93b!2sKilimani%20Estate%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1735057653312!5m2!1sen!2ske"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          ></iframe>
        </div>
      </div>

      {/* Contact Information */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center md:text-left">
        {/* Location */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <FaLocationDot className="text-blue-500 text-5xl mb-2" />
          <div className="font-extralight text-xl text-slate-900">
            <h2>Ole Dume Road</h2>
            <h2>Nairobi, Kenya</h2>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <FaHeadphones className="text-blue-500 text-5xl mb-2" />
          <div className="font-extralight text-xl text-slate-900">
            <h2>Phone: 345 6789 0123</h2>
            <h2>Email: drivetime@gmail.com</h2>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <FaClock className="text-blue-500 text-5xl mb-2" />
          <div className="font-extralight text-xl text-slate-900">
            <h2>Mon-Sat: 09:00-23:00</h2>
            <h2>Sunday: Closed</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddressSection;
