import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Service from './services/services'
import Notification from "./components/Notifications";


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState(null);

  const handleFilterChange = (event) => {    
      console.log(event.target.value)    
      setNewFilter(event.target.value)  }  

  useEffect(() => {
  Service
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(null);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [message]);

  const addPersons = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName, number: newNumber
    }
    const currentName = persons.filter(
      (person) => person.name === personObject.name
    )
    if (currentName.length === 0) {
    Service
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })
      .catch((error) => setMessage(error.response.data.error));
    }else {
      if (
        window.confirm(
          `${personObject.name} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        Service
          .update(currentName[0].id, personObject)
          .then((returnedPerson) => {
            const updatedPersons = persons.map((person) =>
              person.id !== returnedPerson.id ? person : returnedPerson
            );
            setPersons(updatedPersons);
            setMessage(`Updated ${personObject.name}'s number`);
          })
          .catch((error) => setMessage(error.response.data.error));
      }
    }
    setNewName('')
    setNewNumber('')
};

  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      Service.remove(id)
      .then((response) => {
        const updatedPersons = persons.filter((person) => person.id !== id);
        setPersons(updatedPersons);
      });
    }
    setNewName('')
    setNewNumber('')

  };

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
      <Persons persons={persons} filter={newFilter} deletePerson={deletePerson}/>

    </div>
  )
}

export default App
