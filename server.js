const express = require('express');
const app = express();
const client = require('./connection.js');
const cors = require('cors');


app.use(cors());
app.use(express.json());

app.listen(3300, () => {
  console.log('server is running')
})

client.connect();

app.get('/blogs', (req,res) => {
  client.query(`Select * from blogs`, (err, result) => {
    if(!err) {
      res.send(result.rows);
    }
  });
  client.end;
})

app.get('/blogs/:id', (req,res) => {
  client.query(`Select * from blogs where id=${req.params.id}`, (err, result) => {
    if(!err) {
      res.send(result.rows);
    }
  });
  client.end;
})

app.get('/blogs/:id', (req,res) => {
  client.query(`Select * from blogs where id=${req.params.id}`, (err, result) => {
    if(!err) {
      res.send(result.rows);
    }
  });
  client.end;
})

app.post('/blogs', async(req, res)=> {
  const blog = req.body;
  let insertQuery = `insert into blogs(id, title, body, author) 
                     values(${blog.id}, '${blog.title}', '${blog.body}', '${blog.author}')`

  client.query(insertQuery, (err, result)=>{
      if(!err){
          res.send('Insertion was successful')
      }
      else{ console.log(err.message) }
  })
  client.end;
})



app.delete('/blogs/:id', async(req, res)=> {
  let insertQuery = `delete from blogs where id=${req.params.id}`

  client.query(insertQuery, (err, result)=>{
      if(!err){
          res.send('Deletion was successful')
      }
      else{ console.log(err.message) }
  })
  client.end;
})
