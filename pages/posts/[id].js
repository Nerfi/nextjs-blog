import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../utils/posts";
/*
 ESTE TIPO DE FILE / ARCHIVO [ID].JS LO USAMOS PARA GENERAR PAGINAS ESTATICAS PERO CON 
RUTAS DINAMICAS(VER URL DE APP DE EJEMPLO PARA ENTENDERLO: /PAGES/POSTS/[ID].JS) 
PARA PODER HACER ESTO EL ARCHIVO DINAMICO DEBE DE CONTENER: 
1 ) UN COMPONENTE DE REACT PARA RENDERIZAR LA PAGINA(export default function Post)
2) GETSTATICPATH FUNCTION QUE RETORNARA UNA ARRAY CON LOS POSIBLES IDS
3) GETSTATICPROPS QUE HARA EL FETCHING DE LA DATA BASED ON THE ID 
*/

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

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
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}


/*https://nextjs.org/learn/basics/dynamic-routes*/