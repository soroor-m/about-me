import React, {useState} from 'react';
import booksData from '../../booksData.json';
import {BooksType} from '../../booksType';
import {SortDropdowns} from './subBookshelf/SortDropDowns/SortDropdowns';
import {SearchBar} from './subBookshelf/SearchBar/SearchBar';
import styles from './Bookshelf.module.scss';

export const Bookshelf = () => {
    const [bookList, setBookList] = useState(booksData.books as BooksType);
    const [sortCriteria, setSortCriteria] = useState('title');
    const [sortOrder, setSortOrder] = useState('asc');
    const [query, setQuery] = useState('');

    const handleSortCriteriaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortCriteria(e.target.value);
    };

    const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOrder(e.target.value);
    };

    const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const sortedBookList = [...bookList]
        .filter((book) =>
            book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(query.toLowerCase())
        )
        .sort((a, b) => {
            const compareResult = sortCriteria === 'title' ? a.title.localeCompare(b.title) : a.author.localeCompare(b.author);
            return sortOrder === 'asc' ? compareResult : -compareResult;
        });

    return (
        <div className={styles.bookshelf}>
            <h2>My Bookshelf</h2>
            <div className={styles.header}>
                <SearchBar query={query} handleQueryChange={handleQueryChange}/>
                <SortDropdowns
                    sortCriteria={sortCriteria}
                    sortOrder={sortOrder}
                    handleSortCriteriaChange={handleSortCriteriaChange}
                    handleSortOrderChange={handleSortOrderChange}
                />
            </div>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                </tr>
                </thead>
                <tbody>
                {sortedBookList.map((book, index) => (
                    <tr key={index}>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
