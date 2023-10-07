describe("getTitles", function () {
    let names = [
        "Mockingjay: The Final Book of The Hunger Games",
        "The Road Ahead",
        "The Road Ahead",
        "Walter Isaacson"];

    it("getTitles in alphabet order", function () {
        assert.deepEqual(getTitles(), names)
    })
})

describe("addBook", function () {
    it("adding wonderland book", function () {
        let book = addBook("The Wonderland", "Adam Miller", 345);
        assert.strictEqual(book.title, "The Wonderland")
        assert.strictEqual(book.author, "Adam Miller")
        assert.strictEqual(book.libraryID, 345)
        assert.strictEqual(book, libraryBooks[libraryBooks.length - 1])
    })
})

describe("findBooks", function () {
    it("find Books with key 'the road': ", function () {
        let expected = [
            { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
            { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
        ]
        assert.deepEqual(findBooks("the road"), expected)
    })

    it("find Books with key 'wonderland': ", function () {
        let expected = [
            { title: "The Wonderland", author: "Adam Miller", libraryID: 345 }
        ]
        assert.deepEqual(findBooks("wonderland"), expected)
    })

    it("find Books with key 'Steve Jobs' will not find any: ", function () {
        let expected = [
            { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 }
        ]
        assert.notEqual(findBooks("Steve Jobs"), expected)
    })
})