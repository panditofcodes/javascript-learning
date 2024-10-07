library = {
    name: "Concept Library",
    address: "Awadhpuri near Sanjivni Hospital",
    books: [
        {
            title: "Book 1",
            author: "Author 1"
        },
        {
            title: "Book 2",
            author: "Author 2"
        },
        {
            title: "Book 3",
            author: "Author 3"
        },
    ]
}
console.log(`Name of library is: ${library.name}`)
books = library.books

books.forEach(book => {
    console.log(`Book Title: ${book.title}`)
});