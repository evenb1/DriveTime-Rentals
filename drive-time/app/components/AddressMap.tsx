const AddressSection: React.FC = () => {
    return (
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Find Us Here
          </h2>
          <p className="text-gray-600 mb-6">
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
      </section>
    );
  };
  
  export default AddressSection;
  