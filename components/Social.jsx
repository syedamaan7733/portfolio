import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin, FaReddit } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/syedamaan7733" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/syed-amaan-ali-69399a173?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    icon: <FaTwitter />,
    path: "https://x.com/amaanali1823635?t=K9VUES_Yg-QsP8yBnxczpg&s=08",
  },
  {
    icon: <FaReddit />,
    path: "https://www.reddit.com/u/Clueless_Dick/s/28hWE2mtxG",
  },
];

export default function Social({ containerStyle, iconStyle }) {
  return (
    <div className={containerStyle}>
      {socials.map((item, idx) => {
        return (
          <Link href={item.path} key={idx} className={iconStyle}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}
