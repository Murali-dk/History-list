import './index.css'

const History = props => {
  const {listOfHistory, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = listOfHistory
  const deleteList = () => {
    onDelete(id)
  }
  return (
    <li className="list">
      <div className="list-cont">
        <p className="list-time">{timeAccessed}</p>
        <img className="list-img" alt="domain logo" src={logoUrl} />
        <p className="list-title">{title}</p>
        <p className="list-domain">{domainUrl}</p>
      </div>
      <button
        className="button"
        data-testid="delete"
        type="button"
        onClick={deleteList}
      >
        <img
          className="list-delete"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </button>
    </li>
  )
}
export default History
