const Persons = ({persons, filter, deletePerson}) =>  {
    const filterPersons = filter ? persons.filter(person => person.name.toLowerCase().includes(filter)) : persons
  return(<div>
  <h2>Numbers</h2>
  { filterPersons.map( (person,i) => 
    <div key={i}>{person.name} {person.number}{" "}
    <button onClick={() => deletePerson(person.id, person.name)}>
      delete
    </button></div>)
  }
  </div>
  )
  }

  export default Persons
