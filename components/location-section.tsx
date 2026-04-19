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
            src="https://www.google.com/maps/place/Thanasekaran+Nagar/@8.8154291,78.1319822,21z/data=!4m10!1m2!2m1!1s4%2F367A+Thanasekar+Nagar,+Thoothukkudi+Tamil+Nadu+-+628002!3m6!1s0x3b03ef006e266f51:0x15a399c1c5631536!8m2!3d8.8155159!4d78.1323277!15sCjk0LzM2N0EgVGhhbmFzZWthciBOYWdhciwgVGhvb3RodWtrdWRpIFRhbWlsIE5hZHUgLSA2MjgwMDKSARNob3VzaW5nX2RldmVsb3BtZW504AEA!16s%2Fg%2F11wvlxxsst?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D"
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
          📦 Pan-India delivery available ·{" "}
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
