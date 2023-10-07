let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
];

// add book
function addBook(title, author, libraryID) {
    let book = {
        title,
        author,
        libraryID
    }
    libraryBooks.push(book)
    return book;
}

// getTitles
function getTitles() {
    return libraryBooks.map(e => e.title).sort()
}

// find books
function findBooks(key) {
    let array = libraryBooks
    .filter(e => e.title.toLowerCase().indexOf(key.toLowerCase()) != -1)

    array.sort((e1,e2) => {
        if( e1.author > e2.author ) {
            return 1;
        }
        if (e1.author == e2.author) {
            return 0
        }
        return -1;
    });
    return array;
}


// let book = addBook("Javascript dev","Adam Johns", 443);
// console.log(libraryBooks);
// console.log(book);
// console.log(addBook("The Wonderland","Adam Miller",2443));

// console.log("getTitles: " + getTitles())


// let array = findBooks("the");
// console.log("findBooks: ");
// console.log(array);