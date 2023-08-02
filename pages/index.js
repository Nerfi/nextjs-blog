import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../utils/posts";
import Link from "next/link";
import Date from "../components/date";
import { BIO } from "../utils/constants";
import ContentWrapper from "../components/contenWrapper";
//INDEX ES EL ENTRY POINT DE NUESTRA APP, LA "/" EN EL ROUTER PARA QUE NOS ENTENDAMOS

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  //el valor retornado en esta funcion es lo que podremos usar en nuestro componente(Home)
  // como prop , como en un componente  normal de React
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/*
       HERO SECTIOS GOES HERE , NEEDS TO BE CREATED 
      pd: BIO const should be in hero section
      */}
      <section>
        <div>
          <span>more content to test </span>
          <h2>juan </h2>
        </div>
      </section>

      <section className={utilStyles.headingMd}>
        <p>{BIO}</p>
      </section>
      <ContentWrapper>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>

          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}> {title} </Link>
                <br />

                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </ContentWrapper>
    </Layout>
  );
}
