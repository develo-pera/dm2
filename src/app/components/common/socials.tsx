import Image from "next/image";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex gap-4 items-center mt-5">
      <Link href="https://www.facebook.com/decimetarkvadratni" target="_blank" rel="noopener noreferrer">
        <Image src="/fb-icon.svg" alt="facebook" width={20} height={20} />
      </Link>
      <Link href="https://www.linkedin.com/company/decimetar-kvadratni" target="_blank" rel="noopener noreferrer">
        <Image src="/ln-icon.svg" alt="linkedin" width={20} height={20} />
      </Link>
      <Link href="https://instagram.com/decimetarkvadratni/" target="_blank" rel="noopener noreferrer  ">
        <Image src="/insta-icon.svg" alt="instagram" width={20} height={20} />
      </Link>
      {/* <Link href="/">
      <Image src="/tiktok.svg" alt="tiktok" width={20} height={20} />
    </Link> */}
      <Link href="https://x.com/decimetar2" target="_blank" rel="noopener noreferrer">
        <Image src="/twitter-icon.svg" alt="x" width={20} height={20} />
      </Link>
      {/* TODO: Add instagram link */}
      {/* <Link href="/" target="_blank" rel="noopener noreferrer">
        <Image src="/yt-icon.svg" alt="youtube" width={20} height={20} />
      </Link> */}
    </div>
  );
};

export default Socials;