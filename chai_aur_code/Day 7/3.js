let book = {
    title: 'The Almanack Of Naval Ravikant: A Guide to Wealth and Happiness',
    author: 'Eric Jorgenson',
    ISBN_10: '9354893899',
    releaseDate: '30 September 2021',
    publisher: 'HarperBusiness',
    getSummary: function () {
        return `${this.title} by ${this.author}`;
    }
};

console.log(book.getSummary())