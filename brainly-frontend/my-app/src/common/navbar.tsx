import Link from "next/link";
import Container from "./container";
import Button from "@/app/components/ui/button";
import LogoIcon from "@/icons/logo-icon";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <Container className="sticky top-0 z-20 rounded-md py-4 backdrop-blur-sm ">
      <nav className="w-full flex items-center justify-between font-inter  px-4 sticky top-0 z-50">
        <div className="flex items-center gap-8 text-gray-600 ">
          <h1 className="text-gray-600 font-semibold text-2xl flex items-center gap-2 mr-8">
            <LogoIcon size="lg"/>
            Brainly 
          </h1>
          {navItems.map((item) => {
            return (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            );
          })}
        </div>
        <div>
          <Button variant="primary" size="md" text="Login" />
        </div>
      </nav>
    </Container>
  );
}
