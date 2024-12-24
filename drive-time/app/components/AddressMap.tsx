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
              src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d7977.600288950453!2d36.77453983545923!3d-1.294439348174659!3m2!1i1024!2i768!4f13.1!2m1!1sgoogle%20maps!5e0!3m2!1sen!2ske!4v1735057414542!5m2!1sen!2ske" 
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
  