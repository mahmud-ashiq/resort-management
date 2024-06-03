require('./models')
const cors = require('cors');
var userctl = require('./controllers/UserController')
const express  =require("express");
const app = express();
const PORT = 3001;


app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(PORT, ()=> {
    console.log(`server is running at 
    http://localhost:${PORT}`); 
 });

//app.get('/add', userctl.addUser)
app.post('/user/:username', userctl.getUser)    






/*

// POST/books  //create a book
app.post("/books", async (req,res)=>{
    try{
        const id = uuidv4();
        const {name, description} = req.body;
        
        //inserting into db
        const newBook = await pool.query(`INSERT INTO public.books (name , description, id) 
        VALUES ($1, $2, $3) RETURNING *`,
             [name, description, id]);
             res.status(201).json({message: `books is created:`,data:newBook.rows});
        
    }
    catch{
        res.json({error: error.message});
    }
});

// GET/books  //return all books
app.get("/books", async (req,res)=>{
    try{
        const books = await pool.query(`SELECT * FROM public.books`)
        res.status(200).json({message: "books are returned", data:books.rows});
    }
    catch{
        res.json({error: error.message});
    } 
});

// GET/books/:bookid  //return specific books 
app.get("/books/:id", async (req,res)=>{
    try{
        const {id} = req.params;
        res.status(200).json({message: `specific books is returned with id:${id} `});
    }
    catch{
        res.json({error: error.message});
    }
});


// DELETE/books/:bookid  //delete specific books
app.delete("/books/:id", async (req,res)=>{
    try{
        const {id} = req.params;
        res.status(200).json({message: `specific books is deleted with id:${id} `});
    }
    catch{
        res.json({error: error.message});
    }
});

// PUT/books/:bookid  //update specific books
app.put("/books/:id", async (req,res)=>{
    try{
        const {id} = req.params;
        const {name, description} = req.body;

        //inserting into db
        const newBook = await pool.query(`INSERT INTO books (id, name, decsription) 
        VALUES (${id}, ${name}, ${decription}) RETURNING *`);

        res.status(201).json({message: `books is created`,data:newBook});
    }
    catch{
        res.json({error: error.message});
    }
});

*/





