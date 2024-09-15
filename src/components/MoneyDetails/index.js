import './index.css'

const MoneyDetails = props => {
  const {incomeDetails, expenseDetails, balenceDetails} = props
  return (
    <div className="money-details-container">
      <div className="money-detail-card balence-bg-border">
        <img
          className="logo"
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <div className="money-content-card">
          <p className="common-para-style">Your Balance</p>
          <p data-testid="balanceAmount" className="common-para-number">
            Rs {balenceDetails}
          </p>
        </div>
      </div>
      <div className="money-detail-card income-bg-border">
        <img
          className="logo"
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        />
        <div className="money-content-card">
          <p className="common-para-style">Your Income</p>
          <p data-testid="incomeAmount" className="common-para-number">
            Rs {incomeDetails}
          </p>
        </div>
      </div>
      <div className="money-detail-card expenses-bg-border">
        <img
          className="logo"
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        />
        <div className="money-content-card">
          <p className="common-para-style">Your Expenses</p>
          <p data-testid="expensesAmount" className="common-para-number">
            Rs {expenseDetails}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
