const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

app.use(cors());     

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello World')
})

                                           
// mongodb configuration 
                                
const { MongoClient, ServerApiVersion ,ObjectId} = require('mongodb');
const uri = "mongodb+srv://book-store:books890store3app@samiksha.s2h8tsi.mongodb.net/?retryWrites=true&w=majority&appName=Samiksha";


    const client = new MongoClient(uri, {
    serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    
    await client.connect();
 
    // create a collection of documents
                                               
    const bookCollections = client.db("BookInventory").collection("books");

    //insert a book to the db: post method
                                        
    app.post("/upload-book",async(req,res)=>{
      const data = req.body;
      const result = await bookCollections.insertOne(data);
      res.send(result);
    })

    // get all books

    // app.get("/all-books",async(req,res)=>{
    //   const books = await bookCollections.find();
    //   const result = await books.toArray();
    //   res.send(result);
    // })

    // update a book
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      // console.log(id);
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const updatedDoc = {
          $set: {
              ...updateBookData
          }
      }
      const options = { upsert: true };

      // update now
      const result = await bookCollections.updateOne(filter, updatedDoc, options);
      res.send(result);
  })


  // delete a item from db
  app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.deleteOne(filter);
      res.send(result);
  })


// New


// find by category
app.get("/all-books",async(req,res)=>{
  let query = {};
  if(req.query?.category){
    query = {category: req.query.category}
  }
  const result = await bookCollections.find(query).toArray();
  res.send(result);
})


// to get single book data
app.get("/book/:id",async(req,res)=>{
  const id = req.params.id;
  const filter = {_id: new ObjectId(id)};
  const result = await bookCollections.findOne(filter);
  res.send(result);

})














  // get a single book data
  app.get("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.findOne(filter);
      res.send(result)
  })


  
    
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
   
    // await client.close();
  }
}
run().catch(console.dir);



app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})














// Make a description for book store app in which i used admin module and user module and in that used crud for upatae delete and edit and oly login users can insert a book 