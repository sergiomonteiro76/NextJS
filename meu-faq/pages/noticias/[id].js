import noticiasDados from '../../dados/noticiasDados';
export default function Noticias({ noticias }) {
  return (
    <div>
      <h1>{noticias.titulo}</h1>
      <p>{noticias.conteudo}</p>
    </div>
  );
}
export async function getStaticPaths() {
  const paths = noticiasDados.map((noticias) => ({
    params: { id: noticias.id },
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const noticias = noticiasDados.find((noticias) => 
							noticias.id === params.id);

  return {
    props: {
      noticias,
    },
  };
}
