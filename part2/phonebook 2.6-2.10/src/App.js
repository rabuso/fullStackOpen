import { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const handleFilterChange = (event) => {    
      console.log(event.target.value)    
      setNewFilter(event.target.value)  }  

  const addPersons = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName, number: newNumber
    }
    if (!persons.some(el => el.name === newName)) {
        setPersons(persons.concat(personObject))
        }
    else { alert(`${newName} is already added to the phonebook`); }
    setNewName('') 
    setNewNumber('')
  }  

  const handlePersonChange = (event) => {    
    console.log(event.target.value)    
    setNewName(event.target.value)  }  
  const handleNumberChange = (event) => {    
      console.log(event.target.value)    
      setNewNumber(event.target.value)  }  
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter}  handleFilterChange = {handleFilterChange}/>
      <h3>Add a new</h3>
      <PersonForm addPersons={addPersons} 
                  newName = {newName} 
                  newNumber = {newNumber}
                  handlePersonChange = {handlePersonChange}
                  handleNumberChange = {handleNumberChange} />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={newFilter}/>

    </div>
  )
}

export default App
