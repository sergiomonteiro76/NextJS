import noticiasDados from '../../dados/noticiasDados';
import Link from 'next/link';

export default function ListaNoticias() {
  return (
    <div>
      <h1>Blog de Noticias</h1>
      <ul>
        {noticiasDados.map((noticias) => (
          <li key={noticias.id}>
            <Link href={`/noticias/${noticias.id}`}>
              <a>{noticias.titulo}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

