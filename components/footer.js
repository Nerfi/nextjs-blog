import footerStyles from "./footer.module.css";
import date from "../utils/date";
//useful link in order to sum up nextjs
//https://dhanrajsp.me/blog/the-troubles-with-nextjs

//pd: parece que no podemos usar clases de css como footer-content, tenemos que usar camerCase(footerContent)

export default function Footer() {
  return (
    <footer>
      <div className={footerStyles.footerContent}>
        <h3>Nerfi Blog</h3>
        <p>Nerfi Developer — source code.</p>
        <p className={footerStyles.copyright}>
          copyright &copy;{date()} <a href="">Nerfi´s Blog</a>
        </p>
      </div>
    </footer>
  );
}
