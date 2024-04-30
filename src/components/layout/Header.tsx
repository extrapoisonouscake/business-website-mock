import { Button } from "@nextui-org/react";
import Link from "next/link";

const links: Array<{ label: string; href: string }> = [
  {
    label: "Home",
    href: "",
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
    <header className="w-full px-7 py-5 flex justify-between items-center">
      <ul className="flex gap-6 text-lg">
        {links.map(({ href, label }) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </ul>
      <Button data-cursor-scale color="primary" size="lg" variant="solid">
        Try it out
      </Button>
    </header>
  );
}
