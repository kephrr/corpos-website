import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    previousLabel?: string;
    nextLabel?: string;
    className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
                                                   currentPage,
                                                   totalPages,
                                                   onPageChange,
                                                   previousLabel = 'Previous',
                                                   nextLabel = 'Next',
                                                   className = '',
                                               }) => {
    const handleClick = (page: number, e: React.MouseEvent) => {
        e.preventDefault();
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    // Génère les boutons de page
    const renderPageNumbers = () => {
        const pages = [];
        const visiblePages = 5; // Nombre de pages visibles autour de la page courante
        let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
        let endPage = Math.min(totalPages, startPage + visiblePages - 1);

        // Ajuster si on est proche du début ou de la fin
        if (endPage - startPage + 1 < visiblePages) {
            startPage = Math.max(1, endPage - visiblePages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <li key={i}>
                    <a
                        href="#"
                        onClick={(e) => handleClick(i, e)}
                        aria-current={i === currentPage ? 'page' : undefined}
                        className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 ${
                            i === currentPage
                                ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                                : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                        }`}
                    >
                        {i}
                    </a>
                </li>
            );
        }

        return pages;
    };

    return (
        <nav aria-label="Page navigation example" className={className}>
            <ul className="inline-flex -space-x-px text-sm">
                <li>
                    <a
                        href="#"
                        onClick={(e) => handleClick(currentPage - 1, e)}
                        className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        aria-disabled={currentPage === 1}
                    >
                        {previousLabel}
                    </a>
                </li>

                {renderPageNumbers()}

                <li>
                    <a
                        href="#"
                        onClick={(e) => handleClick(currentPage + 1, e)}
                        className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        aria-disabled={currentPage === totalPages}
                    >
                        {nextLabel}
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;