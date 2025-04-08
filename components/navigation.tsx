"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "(current)" : ""}
        </li>
        <li>
          <Link href="/about-us">About</Link>
          {path === "/about-us" ? "(current)" : ""}
        </li>
      </ul>
    </nav>
  );
}
