export default function LocationSection() {
  return (
    <section id="location" className="py-16 bg-[#F8F5F0] px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-2">
          Find Us
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Our Location
        </h2>
        <p className="text-gray-500 mb-8">
          Based in Tamil Nadu, India. Orders accepted pan-India.
        </p>

        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497811.31050177326!2d79.7284989!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526c5a0d4e0c3d%3A0xa300b21f48a3cd!2sTamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bana Artist Location"
          />
        </div>

        <p className="mt-5 text-gray-500 text-sm">
          📦 Pan-India delivery available · 📱{" "}
          <a
            href="tel:+919363131475"
            className="text-orange-500 font-medium hover:underline"
          >
            +91 93631 31475
          </a>
        </p>
      </div>
    </section>
  );
}
