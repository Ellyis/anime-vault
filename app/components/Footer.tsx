import Image from "next/image"

const Footer = () => {
  return (
    <footer className="sm:px-16 px-8 py-4 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">
        @2023 AnimeVault
      </p>

      <Image 
        src='./logo.svg' alt="logo"
        width={47} height={44}
        className="object-contain"
      />

      <div className="flex items-center gap-6">
        <Image
          src='./tiktok.svg' alt="tiktok"
          width={19} height={19}
          className="object-contain"
        />

        <Image
          src='./instagram.svg' alt="instagram"
          width={19} height={19}
          className="object-contain"
        />

        <Image
          src='./twitter.svg' alt="twitter"
          width={19} height={19}
          className="object-contain"
        />
      </div>
    </footer>
  )
}

export default Footer