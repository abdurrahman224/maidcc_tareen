const MapSection = () => {
  return (
    <section className="py-5 pb-0 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3 font-[Poppins]">
          Need face-to-face help?
        </h2>
        <p className="section-desc text-gray-500">
          Visit one of our 23 branches
        </p>
      </div>

      <div className="max-w-7xl mx-auto h-[550px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.7239281974!2d37.97903367596606!3d26.689310519654544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15a452ac509a65f3%3A0x70558fd82412c836!2sElephant%20Mountain!5e0!3m2!1sen!2sbd!4v1783837021617!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className="w-full h-full grayscale-20 contrast-[1.1]"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
