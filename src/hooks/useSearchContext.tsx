
import { useContext } from 'react';
import { SearchContext } from '../context/searchContext';

export function useSearch( ) {
    const search = useContext( SearchContext );
        return search;
};