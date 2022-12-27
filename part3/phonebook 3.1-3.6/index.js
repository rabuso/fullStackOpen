const express = require('express')
const app = express()

app.use(express.json())

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger)


let persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

function removeObjectWithId(arr, id) {
  const objWithIdIndex = arr.findIndex((obj) => obj.id === id);

  if (objWithIdIndex > -1) {
    arr.splice(objWithIdIndex, 1);
  }

  return arr;
}

const generateId = () => {
  return Math.floor(Math.random() * 100000);
}

 
app.get("/api/persons/:id", (request, response, next) => {
  const person = persons.find(n => n.id === parseInt(request.params.id))
  if (person)
  {  response.json(person);
  } 
  else {
        response.status(404).end();
      }
});

app.delete("/api/persons/:id", (request, response, next) => {
  const person = persons.find(n => n.id === parseInt(request.params.id))
  if (person)
  {   removeObjectWithId(persons, parseInt(request.params.id));
      response.json(person);
  } 
  else {
        response.status(404).end();
      }
});

app.post('/api/persons', (request, response) => {  
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: 'name or number is missing' 
    })
  }

  const p = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }

  persons = persons.concat(p)
  response.json(p)})
  

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info', (request, response) => {
  response.send(
  `<p>Phonebook has info for ${persons.length} people</p><p>
  ${new Date()}</p>`)
  console.log(request.headers);
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
