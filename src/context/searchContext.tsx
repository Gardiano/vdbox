
import { ReactNode, useState } from "react";

import { createContext } from 'react';

type SearchContextTypes = {
    values: string,
    setValues: ( values: string ) => void;
};

type SearchContextProviderProps = { children: ReactNode };

export const SearchContext = createContext( {} as SearchContextTypes );

export function SearchContextProvider( props: SearchContextProviderProps ) {
    
    const [ values, setValues ] = useState < any > ( );

    return (
        <SearchContext.Provider value={ { values, setValues } } >
            { props.children }
        </SearchContext.Provider>
    );
};