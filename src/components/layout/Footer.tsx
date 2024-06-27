import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import Link from "next/link";

export function Footer() {
  return (
   <footer className="w-full px-12 py-8 justify-between bg-zinc-900 flex items-center">
	<Link href="#home" scroll={false}><h5 className="text-3xl font-semibold">Evee</h5></Link>
	<ul className="flex items-center gap-5 text-zinc-400">
		<li><Link href="#">Sales</Link></li>
		<li><Link href="#">FAQ</Link></li>
		<li><Link target="_blank" href="https://gbrv.dev">Creator</Link></li>
		<li><Link href="#">News</Link></li>
	</ul>
   </footer>
  );
}
