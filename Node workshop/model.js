const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./db/books.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message)
    throw err
  }
  console.log('Connected to the books database')
})

const findAllBooks = (respondeHandler) => {
    db.all('SELECT * FROM books;', (err, rows) => {
        if(err){
            console.error(err.message)
            throw err
        }
        // process rows here   
        console.log(rows) 
        responseHandler(rows)
    })
}

const books = [
    {
      id: 1,
      title: 'Don Quijote de la Mancha',
      author: 'Miguel de Cervantes'
    },
    {
      id: 2,
      title: 'Cien años de soledad',
      author: 'Gabriel García Márquez' 
    }
]
  
module.exports = { findAllBooks }

