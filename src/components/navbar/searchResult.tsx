

import { Link } from 'react-router-dom';

import { useSearch } from '../../hooks/useSearchContext';

import searchResultTypes from '../../models/searchResult';

export const SearchResult = ( { arr } : any ) => {

  const { setItsOpen } = useSearch( );
    
  const linkContent = ( id: string, media_type: string, title: string, name: string, original_title: string ) => {
       return (
        <>
            { media_type === 'movie' ? (
                <Link to={`/movie/${ id }`} onClick={ ( ) => setItsOpen( false ) }>
                    <p> { title || name || original_title } </p>
                    <span> {media_type === 'movie'} Categoria: Filme </span>
                </Link>
                ) : media_type === 'tv' ? (
                <Link to={`/series/${ id }`} onClick={ ( ) => setItsOpen( false ) }>
                    <p> { title || name || original_title } </p>
                    <span> {media_type === 'tv'} Categoria: Serie </span>
                </Link>
                ) : media_type === 'person' ? (
                <Link to={`/series/${ id }`} onClick={ ( ) => setItsOpen( false ) }>
                    <p> { title || name || original_title } </p>
                    <span> {media_type === 'person'} Categoria: Ator/Atriz </span>
                </Link>
                ) : ( null ) }
        </>
       );
  };
  
   return (
    <>
      <div>
          <>
            { arr?.length === 0 ? ( <b> Título indisponível... </b> ) : (
              arr?.map( ( itens: searchResultTypes ) => {
                return (
                    <div key={ itens?.id }>
                        <>
                          { linkContent( itens.id, itens.media_type, itens.title, itens.name, itens.original_title ) }
                        </>
                    </div>
                  );
                })
            )}
          </>
      </div>
    </>
  );
}