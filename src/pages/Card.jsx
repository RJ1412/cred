export function Card() {
  return (
    <div className="bg-black w-full">

      {/* Top Line */}
      <div className="w-full h-px bg-[#3a3a3a] mb-8" />

      {/* Video Background Section */}
      <div className="relative w-full h-[500px] overflow-hidden">

        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/ccbp-fold-poster.jpg?tr=q-95"
          src="https://web-images.credcdn.in/v2/_next/assets/videos/landing/desktop/ccbp-fold-d.mp4?tr=q-95"
        />

        {/* Optional dark gradient for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

        {/* Text Overlay */}
        <div className="relative z-10 h-full flex items-center px-[5vw]">
          <div className="max-w-[600px] text-white">
            <h1
              className="text-[3.5rem] leading-[1.1] font-semibold mb-6"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              do more with <br /> your credit cards
            </h1>

            <p
              className="text-[1.25rem] leading-[1.8] text-[#b4b4b4]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              manage your credit cards better and improve your credit score:
              receive payment reminders, uncover hidden fees, get spending
              insights, and discover ways to maximize card benefits.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="w-full h-px bg-[#3a3a3a] mt-8" />
    </div>
  );
}
