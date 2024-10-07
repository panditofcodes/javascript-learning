let book = {
    title: 'The Almanack Of Naval Ravikant: A Guide to Wealth and Happiness',
    author: 'Eric Jorgenson',
    ISBN_10: '9354893899',
    releaseDate: '30 September 2021',
    publisher: 'HarperBusiness',
    updateDate: function (dt) {
        this.releaseDate = dt
        return `${this.releaseDate}`;
    }
};

console.log(book.updateDate("30/09/2021"))