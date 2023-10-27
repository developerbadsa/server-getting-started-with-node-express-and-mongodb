const express = require('express');
const app = express();
const port = 3000; // You can choose any available port

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://rahimbadsa723:<password>@cluster0.htd2adh.mongodb.net/?retryWrites=true&w=majority";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



async function run() {
  try {



      app.get('/', (req, res) => {
            res.send('Hello, World!');
          });
          



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);




















// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
