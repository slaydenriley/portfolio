const ProjectFilter = (props) => {
  return(
    <div className="filter-buttons">
      <h2>Filter by technology...</h2>
      <button value="all" className="submit">All</button>
      <button value="ruby" className="submit">Ruby</button>
      <button value="rails" className="submit">Rails</button>
      <button value="sinatra" className="submit">Sinatra</button>
      <button value="javascript" className="submit">Javascript</button>
      <button value="react-redux" className="submit">React/Redux</button>
    </div>
  )
}

export default ProjectFilter
