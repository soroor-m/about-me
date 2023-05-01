import React from 'react';
import styles from './SortDropDowns.module.scss';

interface SortDropdownsProps {
    sortCriteria: string;
    sortOrder: string;
    handleSortCriteriaChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleSortOrderChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SortDropdowns = ({sortCriteria, sortOrder, handleSortCriteriaChange, handleSortOrderChange}: SortDropdownsProps) => {
    return (
        <div className={styles.sortDropdowns}>
            <div>
                <label htmlFor="sortCriteria">Sort by:</label>
                <select id="sortCriteria" value={sortCriteria} onChange={handleSortCriteriaChange}>
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                </select>
            </div>
            <div>
                <label htmlFor="sortOrder">Order:</label>
                <select id="sortOrder" value={sortOrder} onChange={handleSortOrderChange}>
                    <option value="asc">(A-Z)</option>
                    <option value="desc">(Z-A)</option>
                </select>
            </div>
        </div>
    );
};