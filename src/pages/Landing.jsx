import { CredLogo } from "../components/CredLogo"


export const Landing = () => {
    return (
     <div className="text-white relative h-screen w-screen overflow-hidden">
<video
className="absolute top-0 left-0 w-full h-full object-cover z-0"
src="https://web-images.credcdn.in/v2/_next/assets/videos/landing/desktop/hero-desktop.mp4?tr=q-95"
autoPlay
loop
muted
playsInline
/>
<div className="relative z-10 flex flex-col justify-center items-center h-full w-full">
<div className="absolute top-4 left-4 md:top-8 md:left-8">
<div className="w-6 h-auto md:w-10">

<CredLogo/>
</div>
</div>
<div className="text-center font-playfair font-extrabold text-4xl md:text-6xl lg:text-8xl p-4">
crafted for the
 <br />
creditworthy

</div>
<div className="hidden md:block text-center text-sm md:text-lg lg:text-xl font-xl mt-8 p-4 w-[52vw]">
CRED is a members-only club that enables the <br/> trustworthy to make financial progress.
</div>
</div>
</div>
    )
  }