import Logo from "@/app/components/Logo";
import Link from "next/link";
const TopNav = () => (
  <nav className="flex justify-between items-center max-w-[1202px] mx-auto p-3 border-b-[1px] border-gravy-100">
    <Logo />
    <Link
      href="/search"
      className="flex items-center justify-center font-display font-bold uppercase rounded-full bg-bluey text-white min-h-11 min-w-24 md:min-w-36 lg:py-3 lg:px-8 text-sm md:text-base"
    >
      Search
    </Link>
  </nav>
);

export default TopNav;
