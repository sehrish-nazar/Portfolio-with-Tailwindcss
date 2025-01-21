import Link from "next/link";

interface NavLinkProps {
  href: string; // href is expected to be a string (URL)
  title: string; // title is expected to be a string
}

const NavLink = ({ href, title }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
