export default function GoogleMap() {
  return (
    <section className="relative">
      <div className="w-full h-[400px] bg-dark-2 flex items-center justify-center">
        <div className="text-center text-gray-500 space-y-2">
          <div className="w-12 h-12 mx-auto rounded-full gradient-bg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <p className="text-sm">In front of Kota Stadium, Kota, Raipur (492010)</p>
          <a
            href="https://maps.app.goo.gl/4QNWToW1YghNVYEE8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-primary-light hover:text-white transition-colors"
          >
            View on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
