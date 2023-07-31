import Layout, { siteTitle } from "../../components/layout";
import Head from "next/head";
import { getAllPostIds, getPostData } from "../../utils/posts";
//importando un componente generico que se aloja en la carpeta de components
import Date from "../../components/date";
// Add this import at the top of the file
import utilStyles from "../../styles/utils.module.css";

/*
 ESTE TIPO DE FILE / ARCHIVO [ID].JS LO USAMOS PARA GENERAR PAGINAS ESTATICAS PERO CON 
RUTAS DINAMICAS(VER URL DE APP DE EJEMPLO PARA ENTENDERLO: /PAGES/POSTS/[ID].JS) 
PARA PODER HACER ESTO EL ARCHIVO DINAMICO DEBE DE CONTENER: 
1 ) UN COMPONENTE DE REACT PARA RENDERIZAR LA PAGINA(export default function Post)
2) GETSTATICPATH FUNCTION QUE RETORNARA UNA ARRAY CON LOS POSIBLES IDS/PATHS
3) GETSTATICPROPS QUE HARA EL FETCHING DE LA DATA BASED ON THE ID 
*/

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

/* esta fucnion aqui no la usamos pero behind the scenes tiene el valor de generar las rutas que 
nuestra app tendra para generar rutas dinamicas para paginas estaticas
getStaticPaths se utiliza para generar las rutas estáticas (en función de los parámetros que retorne getAllPostIds())
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
*/

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>
          {siteTitle} - {postData.title}
        </title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title} </h1>

        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
