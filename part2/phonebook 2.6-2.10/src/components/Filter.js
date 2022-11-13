const Filter = ({newFilter, handleFilterChange}) => {
    return (
    <div>
      name: <input value={newFilter}
                   onChange={handleFilterChange}/>
    </div>)
    }   

export default Filter
