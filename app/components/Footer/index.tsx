import Logo from "@/app/components/Logo";
import Icon from "@/app/components/Icon";
import Link from "next/link";

const Footer = () => (
  <footer className="bg-black flex flex-col gap-4 lg:gap-10 items-center py-6">
    <div className="flex items-end">
      <figure className="footer__logo pr-7 border-r-white border-r-[1px]">
        <Logo fill="white" />
      </figure>
      <Link
        href="https://github.com/sarmstead/rewind/"
        target="_blank"
        className="pl-7"
      >
        <Icon name="github" />
      </Link>
    </div>
    <p className="font-display text-white uppercase text-xs lg:text-sm">
      Copyright © {new Date().getFullYear()} Sunjay Armstead
    </p>
  </footer>
);

export default Footer;
