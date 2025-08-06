import { CredLogo } from "../components/CredLogo"; // Assuming you have this component
// import { Menu } from './Menu';

export const Landing = () => {
    return (
     <div className="text-white relative h-screen w-screen overflow-hidden bg-black">
         {/* Background Video */}
         <video
             className="absolute top-0 left-0 w-full h-full object-cover z-0"
             src="https://web-images.credcdn.in/v2/_next/assets/videos/landing/desktop/hero-desktop.mp4?tr=q-95"
             autoPlay
             loop
             muted
             playsInline
         />

         {/* Top-left CRED logo */}
         <div className="absolute top-8 left-8 z-20">
             <div className="w-10 h-auto">
                 <CredLogo/>
             </div>
         </div>

         {/* Top-right Menu component is placed here */}
       

         {/* Main content of the page */}
         <div className="relative z-10 flex flex-col justify-center items-center h-full w-full">
             <div className="text-center font-serif font-extrabold text-8xl p-4" style={{ fontFamily: '"Playfair Display", serif' }}>
                 crafted for the
                 <br />
                 creditworthy
             </div>
             <div className="text-center text-xl mt-8 p-4 w-[400px]">
                 CRED is a members-only club that enables the trustworthy to make financial progress.
             </div>
         </div>

          {/* Download QR Code - as seen in expected output */}
          <div className="absolute bottom-8 right-8 z-20 flex items-center gap-4">
            <img src="https://web-images.credcdn.in/_next/assets/images/home-page/down-arrow.png" alt="arrow" className="w-8 h-auto" />
            <div className="text-right">
              <p className="font-bold">download CRED</p>
              <p className="text-sm text-gray-400">for iOS and android</p>
            </div>
            <img src="https://web-images.credcdn.in/_next/assets/images/home-page/homepage-qr.png" alt="QR Code" className="w-24 h-24" />
          </div>
     </div>
    )
}