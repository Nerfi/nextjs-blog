import styles from "./layout.module.css";

export default function Layout({children}) {
    return <div className={styles.container}>{children}</div>
}
//https://nextjs.org/learn/basics/assets-metadata-css/global-styles