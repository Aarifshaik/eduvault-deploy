import { useEffect, useState } from 'react';
import BookModel from './BookModel';
import { SearchBook } from './SearchBook';

export const SearchBooksPage = () => {
    const [books, setBooks] = useState<BookModel[]>([]);
    const [httpError, setHttpError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(5);
    const [totalAmountOfBooks, setTotalAmountOfBooks] = useState(0);
    const [search, setSearch] = useState('');
    const [searchUrl, setSearchUrl] = useState('');
    const [categorySelection, setCategorySelection] = useState('Book category');
    const [loading, setLoading] = useState(false); // To manage loading state

    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true);  // Set loading to true before fetching
            const baseUrl: string = "http://localhost:8080/api/books";
            let url: string = '';

            if (searchUrl === '') {
                url = `${baseUrl}?page=${currentPage - 1}&size=${booksPerPage}`;
            } else {
                let searchWithPage = searchUrl.replace('<pageNumber>', `${currentPage - 1}`);
                url = baseUrl + searchWithPage;
            }

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }

                const responseJson = await response.json();
                const responseData = responseJson._embedded.books;

                setTotalAmountOfBooks(responseJson.page.totalElements);

                const loadedBooks: BookModel[] = [];
                for (const key in responseData) {
                    loadedBooks.push({
                        id: responseData[key].id,
                        title: responseData[key].title,
                        author: responseData[key].author,
                        description: responseData[key].description,
                        copies: responseData[key].copies,
                        copiesAvailable: responseData[key].copiesAvailable,
                        category: responseData[key].category,
                        img: responseData[key].img,
                    });
                }

                setBooks((prevBooks) => [...prevBooks, ...loadedBooks]);  // Append books
                setLoading(false);  // Stop loading once data is fetched
            } catch (error: any) {
                setHttpError(error);
                setLoading(false);
            }
        };

        fetchBooks();
    }, [currentPage, searchUrl]);

    const searchHandleChange = () => {
        setCurrentPage(1);
        setBooks([]);  // Clear the books on new search
        if (search === '') {
            setSearchUrl('');
        } else {
            setSearchUrl(`/search/findByTitleContaining?title=${search}&page=<pageNumber>&size=${booksPerPage}`);
        }
        setCategorySelection('Book category');
    };

    const categoryField = (value: string) => {
        setCurrentPage(1);
        setBooks([]);  // Clear the books on category change
        if (
            value.toLowerCase() === 'fe' || 
            value.toLowerCase() === 'be' || 
            value.toLowerCase() === 'data' || 
            value.toLowerCase() === 'devops'
        ) {
            setCategorySelection(value);
            setSearchUrl(`/search/findByCategory?category=${value}&page=<pageNumber>&size=${booksPerPage}`);
        } else {
            setCategorySelection('All');
            setSearchUrl(`?page=<pageNumber>&size=${booksPerPage}`);
        }
    };

    // Handle scroll event to load more books when reaching the bottom
    const handleScroll = (event: React.UIEvent<HTMLElement>) => {
        const bottom = event.currentTarget.scrollHeight === event.currentTarget.scrollTop + event.currentTarget.clientHeight;
        if (bottom && !loading && books.length < totalAmountOfBooks) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    return (
        <div>
            <div className='container' onScroll={handleScroll} style={{ height: '80vh', overflowY: 'auto' }}>
                <div>
                    <div className='row mt-5'>
                        <div className='col-6'>
                            <div className='d-flex'>
                                <input
                                    className='form-control me-2'
                                    type='search'
                                    placeholder='Search'
                                    aria-labelledby='Search'
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <button className='btn btn-outline-success' onClick={searchHandleChange}>
                                    Search
                                </button>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='dropdown'>
                                <button
                                    className='btn btn-secondary dropdown-toggle'
                                    type='button'
                                    id='dropdownMenuButton1'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                >
                                    {categorySelection}
                                </button>
                                <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                                    <li onClick={() => categoryField('All')}>
                                        <a className='dropdown-item' href='#'>
                                            All
                                        </a>
                                    </li>
                                    <li onClick={() => categoryField('FE')}>
                                        <a className='dropdown-item' href='#'>
                                            Front End
                                        </a>
                                    </li>
                                    <li onClick={() => categoryField('BE')}>
                                        <a className='dropdown-item' href='#'>
                                            Back End
                                        </a>
                                    </li>
                                    <li onClick={() => categoryField('Data')}>
                                        <a className='dropdown-item' href='#'>
                                            Data
                                        </a>
                                    </li>
                                    <li onClick={() => categoryField('DevOps')}>
                                        <a className='dropdown-item' href='#'>
                                            DevOps
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {totalAmountOfBooks > 0 ? (
                        <>
                            <div className='mt-3'>
                                <h5>Number of results: ({totalAmountOfBooks})</h5>
                            </div>
                            {books.map((book) => (
                                <SearchBook book={book} key={book.id} />
                            ))}
                            {loading && (
                                <div className='text-center mt-3'>
                                    <p>Loading more books...</p>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className='m-5'>
                            <h3>Can't find what you are looking for?</h3>
                            <a
                                type='button'
                                className='btn main-color btn-md px-4 me-md-2 fw-bold text-white'
                                href='#'
                            >
                                Library Services
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
