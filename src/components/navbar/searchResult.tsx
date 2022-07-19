

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useSearch } from '../../hooks/useSearchContext';

import searchResultTypes from '../../models/searchResult';

export const SearchResult = ( { arr } : any ) => {

  const { setValues, setItsOpen } = useSearch( );
    
  const linkContent = ( id: string, media_type: string, title: string, name: string, original_title: string, backdrop_path: string, poster_path: string ) => {
       return (
        <>
            { media_type === 'movie' ? (
                  <Link to={`/movie/${ id }`} onClick={ ( ) => setItsOpen( false ) }>
                      <label> { title || name || original_title } </label>
                      <b> { media_type === 'movie' } Categoria: Filme </b>
                  </Link>
                ) : media_type === 'tv' ? (
                  <Link to={`/series/${ id }`} onClick={ ( ) => setItsOpen( false ) }>
                      <label> { title || name || original_title } </label>
                      <b> { media_type === 'tv' } Categoria: Serie </b>
                  </Link>
                ) : media_type === 'person' ? (
                  <Link to={`/person/${ id }`} onClick={ ( ) => setItsOpen( false ) }>
                      <label> { title || name || original_title } </label>
                      <b> { media_type === 'person' } Categoria: Ator/Atriz </b>
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
                    <div key={ itens?.id } onClick={ ( ) => setValues('') } >
                        <>
                          { linkContent( itens.id, itens.media_type, itens.title, itens.name, itens.original_title, itens.backdrop_path, itens.poster_path ) }
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