
import { ReactNode, useState } from "react";

import { createContext } from 'react';

type SearchContextTypes = {
    values: string,
    setValues: ( values: string ) => void

    itsOpen: boolean
    setItsOpen: ( itsOpen: boolean ) => void
};

type SearchContextProviderProps = { children: ReactNode };

export const SearchContext = createContext( {} as SearchContextTypes );

export function SearchContextProvider( props: SearchContextProviderProps ) {
    
    const [ values, setValues ] = useState < string > ( '' );

    const [ itsOpen, setItsOpen ] = useState< boolean > ( false );

    return (
        <SearchContext.Provider value={ { values, setValues, itsOpen, setItsOpen } } >
            { props.children }
        </SearchContext.Provider>
    );
};