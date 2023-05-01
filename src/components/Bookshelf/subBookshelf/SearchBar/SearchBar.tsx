import React from 'react';
import styles from './SearchBar.module.scss';

interface SearchBarProps {
    query: string;
    handleQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({query, handleQueryChange}: SearchBarProps) => {

    const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const {key} = e;
        if (key === 'enter') {
            e.preventDefault();
        }
    };

    return (
        <div className={styles.searchBar}>
            <form role="search">
                <input
                    type="search"
                    placeholder="search..."
                    value={query}
                    onChange={handleQueryChange}
                    onKeyDown={handleEnterKeyDown}
                />
            </form>
        </div>
    );
};