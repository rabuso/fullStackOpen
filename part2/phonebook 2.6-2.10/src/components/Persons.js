const Persons = ({persons, filter}) =>  {
    const filterPersons = filter ? persons.filter(person => person.name.toLowerCase().includes(filter)) : persons
  return(<div>
  <h2>Numbers</h2>
  { filterPersons.map(person => 
    <div key={person.id}>{person.name} {person.number}</div>)
  }
  </div>
  )
  }

  export default Persons
