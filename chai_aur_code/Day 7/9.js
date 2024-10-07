library = {
    name: "Concept Library",
    address: "Awadhpuri near Sanjivni Hospital",
    books: [
        {
            title: "Book 1",
            author: "Author 1",
            date: "dd/mm/yyy",
            getSummary: function () {
                return `${this.title} is published on ${this.date} `;
            },
        },
        {
            title: "Book 2",
            author: "Author 2",
            date: "dd/mm/yyy",
            getSummary: function () {
                return `${this.title} is published on ${this.date} `;
            },
        },
        {
            title: "Book 3",
            author: "Author 3",
            date: "dd/mm/yyy",
            getSummary: function () {
                return `${this.title} is published on ${this.date} `;
            },
        },
    ]
}
keys = Object.keys(library)
console.log(`Key in library object: ${keys}`)
values = Object.values(library)
console.log(`Values in library object: ${values}`)