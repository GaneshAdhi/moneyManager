import './index.css'

const TransactionItem = props => {
  const {historyDetail, moneyDelete} = props
  const {id, title, amount, type} = historyDetail

  const onMoneyDelete = () => {
    moneyDelete(id)
  }

  return (
    <li className="list-card">
      <p className="common-history-para">{title}</p>
      <p className="common-history-para">Rs {amount}</p>
      <p className="common-history-para">{type}</p>
      <button
        data-testid="delete"
        onClick={onMoneyDelete}
        className="delete-btn"
        type="button"
      >
        <img
          className="delete-logo"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        />
      </button>
    </li>
  )
}

export default TransactionItem
