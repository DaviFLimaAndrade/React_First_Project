
const Filter = ({Filter, setFilter, setSort}) => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <p>Status:</p>
        <select value={Filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Todas</option>
          <option value="Completed">Completas</option>
          <option value="Incomplete">Incompletas</option>
        </select>
      </div>
      <div className="options-details">
        <p>Ordem alfabética:</p>
        <button onClick={() => setSort("Asc")}>Asc</button>
        <button onClick={() => setSort("Desc")}>Desc</button>
      </div>
    </div>
  )
}

export default Filter
