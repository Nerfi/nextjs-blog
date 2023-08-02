export default function ContentWrapper({children}) {
    return(
        <section style={{maxWidth: "36rem", padding: "0 1rem", margin: "3rem auto 6rem"}}>
            {children}
        </section>

    );
}