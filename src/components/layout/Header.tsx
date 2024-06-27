import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";

const links: Array<{ label: string; href: string }> = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
];
export function Header() {
  return (
    <Navbar isBlurred isBordered id="home" className="py-3">
      <NavbarBrand>
        <h5 className="text-3xl font-semibold">Evee</h5>
      </NavbarBrand>
      <NavbarContent className="gap-8" justify="center">
        {links.map(({ href, label }) => (
          <NavbarItem key={href} ><Link href={href}>
            {label}
          </Link></NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end"><NavbarItem><Button data-cursor-scale color="primary" size="lg" variant="solid">
        Try it out
      </Button></NavbarItem></NavbarContent>
    </Navbar>
  );
}
