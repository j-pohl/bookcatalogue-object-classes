class Book {
    constructor(
        title,
        pages,
        colour,
        bookRead
    ) {
        this.title = title;
        this.pages = pages;
        this.colour = colour;
        this.bookRead = bookRead;

        }
        updateReadStatus(readStatus) {
            this.bookRead = readStatus;
        }
    }

export default Book;