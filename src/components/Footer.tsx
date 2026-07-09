import Divider from "@/components/Divider";
import socials from "@/data/socials";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-transparent pb-6">
      <Divider />
      <div className="flex flex-col items-center gap-y-3 p-6">
        <div className="flex flex-row justify-center gap-x-10">
          {socials.map(({ Icon, link }, index) => (
            <Link key={index} href={link} className="" target="_blank">
              <Icon className="text-lg text-white transition duration-300 ease-in-out hover:scale-105 md:text-xl" />
            </Link>
          ))}
        </div>
        <p className="font-noto text-[11px] text-white/40 md:text-xs">
          © 2026 Wesley Wu. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
