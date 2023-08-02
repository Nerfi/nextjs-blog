import styles from "./nav.module.css";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className={styles.container}>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
        <li>
          <a href="#">Blogs</a>
        </li>
        <li>
          <a href="#">More</a>
        </li>
      </ul>
    </nav>
  );
}
