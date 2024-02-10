const express = require("express");
const {books} = require("../data/books.json");
const {users} = require("../data/users.json");

const router = express.Router();

/**
 * Route: /books
 * Method: GET
 * Description: Get all books
 * Access: Public
 * Parmaters: None
 */
router.get("/",(req, res)=>{
    res.status(200).json({
        success: true,
        data: books
    })
})


/**
 * Route: /books/:id
 * Method: GET
 * Description: Get single book by ID
 * Access: Public
 * Parmaters: Id
 */
router.get("/:id",(req, res)=>{
    const {id} = req.params;

    const book = books.find((each)=> each.id === id);
    if(!book){
        return res.status(404).json({
            success: false,
            message: "Book Not Found"
        })
    }

    return res.status(200).json({
        success: true,
        data: book
    })
})



/**
 * Route: /books/issued
 * Method: GET
 * Description: Get all issued books
 * Access: Public
 * Parmaters: None
 */
router.get("/issued/by-user", (req, res)=>{
    const userWithIssuedBooks = users.filter((each)=>{
        if(each.issuedBook) return each;
    })

    const issuedBooks = [];

    userWithIssuedBooks.forEach((each)=>{
        const book = books.find((book)=> book.id === each.issuedBook)

        book.issuedBy = each.name;
        book.issuedDate = each.issuedDate;
        book.returnDate = each.returnDate;

        issuedBooks.push(book);
    })

    if(issuedBooks.length === 0)
    return res.status(404).json({
        success: false,
        message: "No books issued yet",
});

return res.status(200).json({
    success: true,
    data: issuedBooks
})

})




/**
 * Route: /books
 * Method: POST
 * Description: Create a New Book
 * Access: Public
 * Parmaters: None
 */
router.post('/', (req, res)=>{
    const {id, name, author, genre, price, publisher} = req.body;

    const book = books.find((each)=> each.id === id);

    if(book){
        return res.status(404).json({
            success: false,
            message: "Book Exists With The Given Id"
        })
    }
    books.push({
        id,
        name,
        author,
        genre,
        price,
        publisher
    });
    return res.status(201).json({
        success: true,
        data: books
    })
})



/**
 * Route: /books/:id
 * Method: PUT
 * Description: Updating a book by ID
 * Access: Public
 * Parmaters: Id
 */
router.put("/:id", (req,res)=>{
    const {id} = req.params;
    const {data} = req.body;

    const book = books.find((each)=> each.id === id);

    if(!book)
    return res.status(404).json({
        success: false,
        message: "Book does not exists for givem id"    
    })

    const updateData = books.map((each)=>{
        if(each.id === id){
            return {
                ...each,
                ...data
            }
            return each;
        }
    });

    return res.status(200).json({
        success: true,
        data: updateData
    })
})





module.exports = router;