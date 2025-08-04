import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

const images = [
  {
    backgroundImage: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/scan-n-pay.png",
    tagimg: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/snp-logo-final.png"
  },
  {
    backgroundImage: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/cc-on-upi.png",
    tagimg: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/rupay-logo-final.png"
  },
  {
    backgroundImage: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/tap-n-pay.png",
    tagimg: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/tnp-logo-final.png"
  },
  {
    backgroundImage: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/p2p.png",
    tagimg: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/p2p-logo-final.png"
  },
  {
    backgroundImage: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/garage.png",
    tagimg: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/garage-logo-final.png"
  },
  {
    backgroundImage: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/escapes.png",
    tagimg: "https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/escapes-logo-final.png"
  }
]

const CardComponent = ({ bgimg, tagimg }) => {
  return (
    <div
      className="relative w-[28vw] h-[72vh] font-sans text-white bg-no-repeat bg-cover border border-neutral-600 ml-[9%]"
      style={{ backgroundImage: `url(${bgimg})`, backgroundPosition: 'center -150px' }}
    >
      <div className="absolute left-[8%] top-[7%] w-full h-full">
        <img className="relative" src={tagimg} height={40} width={170} alt="" />
        <div className="mt-[4%] text-4xl font-medium font-sans">
          scan & pay <br /> any UPI QR
        </div>
        <button className="mt-[4%] border border-neutral-600 text-white w-[35%] h-[7%] text-sm  font-bold px-4 py-2 flex justify-center items-center space-x-2">
          <div>KNOW MORE</div>
          <svg
            width="19"
            height="8"
            viewBox="0 0 32 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2"
          >
            <path
              d="M2 4.87494H0.875L0.875 7.12494H2L2 4.87494ZM2 7.12494L30.5 7.12494V4.87494L2 4.87494L2 7.12494ZM25.0685 4.7589e-08C25.0685 3.89997 28.1374 7.125 32 7.125L32 4.875C29.449 4.875 27.3185 2.72744 27.3185 -4.7589e-08L25.0685 4.7589e-08ZM32 4.875C28.1374 4.875 25.0684 8.09999 25.0684 12H27.3184C27.3184 9.27259 29.4489 7.125 32 7.125V4.875Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export const CreditCards = () => {
  return (
    <div className="relative min-h-[150vh] bg-black w-screen text-white px-4 py-16">
      
      <div className="absolute top-[1%] left-0 w-full h-[1px] bg-gradient-to-r from-black via-neutral-600 to-black"></div>
      <div className="text-7xl font-playfair font-extrabold mb-[5%] mt-[13%] ml-[3%]">
        upgrade your life. <br /> bit by bit
      </div>

      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1.2,
            spaceBetween: 15
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25
          }
        }}
        pagination={{
          clickable: true
        }}
        grabCursor={true}
        modules={[Pagination]}
        className="max-w-[100%]"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <CardComponent bgimg={item.backgroundImage} tagimg={item.tagimg} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
