import './index.css'

import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
    historyList: [],
  }

  onTitle = event => {
    this.setState({title: event.target.value})
  }

  onAmount = event => {
    this.setState({amount: event.target.value})
  }

  onType = event => {
    this.setState({type: event.target.value})
  }

  onAddAction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state

    const stringTonumber = parseInt(amount)

    if (title === '') {
      alert('Please Enter Title')
    } else if (amount === '' || Number.isNaN(stringTonumber)) {
      alert('Please Enter a Valid Amount')
    } else {
      const typeOption = transactionTypeOptions.find(
        each => each.optionId === type,
      )
      const {displayText} = typeOption
      const historyDetail = {id: uuidv4(), title, amount, type: displayText}
      console.log(historyDetail)
      this.setState(prevState => ({
        historyList: [...prevState.historyList, historyDetail],
        title: '',
        amount: '',
        type: transactionTypeOptions[0].optionId,
      }))
    }
  }

  getIncome = () => {
    const {historyList} = this.state
    let incomeAmount = 0

    historyList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        incomeAmount += parseInt(each.amount)
      }
    })
    return incomeAmount
  }

  getExpense = () => {
    const {historyList} = this.state
    let expenseAmount = 0

    historyList.forEach(each => {
      if (each.type === transactionTypeOptions[1].displayText) {
        expenseAmount += parseInt(each.amount)
      }
    })
    return expenseAmount
  }

  getbalenceDetail = () => {
    const {historyList} = this.state
    let incomeAmount = 0
    let expenseAmount = 0
    let balenceAmount = 0

    historyList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        incomeAmount += parseInt(each.amount)
      } else {
        expenseAmount += parseInt(each.amount)
      }
    })

    balenceAmount += incomeAmount - expenseAmount
    return balenceAmount
  }

  onDelete = id => {
    const {historyList} = this.state
    const filterDate = historyList.filter(each => each.id !== id)
    this.setState({historyList: filterDate})
  }

  render() {
    const {title, amount, type, historyList} = this.state

    const incomeDetail = this.getIncome()
    const expenseDetail = this.getExpense()
    const balenceDetail = this.getbalenceDetail()

    return (
      <div className="money-manager-main-container">
        <div className="banner-card">
          <h1 className="name-heading">Hi,Richard</h1>
          <p className="welcome-para">
            Welcome back to your
            <span className="span-style"> Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          incomeDetails={incomeDetail}
          expenseDetails={expenseDetail}
          balenceDetails={balenceDetail}
        />
        <div className="form-and-money-container">
          <form onSubmit={this.onAddAction} className="form-card">
            <h1 className="form-heading">Add Transaction</h1>
            <label className="label-style" htmlFor="titleId">
              TITLE
            </label>
            <input
              value={title}
              onChange={this.onTitle}
              className="input-style"
              id="titleId"
              type="text"
              placeholder="TITLE"
            />
            <label className="label-style" htmlFor="amountId">
              AMOUNT
            </label>
            <input
              value={amount}
              onChange={this.onAmount}
              className="input-style"
              id="amountId"
              type="text"
              placeholder="AMOUNT"
            />
            <label className="label-style" htmlFor="typeId">
              TYPE
            </label>
            <select
              value={type}
              onChange={this.onType}
              className="input-style"
              id="typeId"
            >
              {transactionTypeOptions.map(eachOption => (
                <option value={eachOption.optionId} key={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1 className="history-heading">History</h1>
            <div className="list-detail-card">
              <p className="detail-para-common">Title</p>
              <p className="detail-para-common">Amount</p>
              <p className="detail-para-common">Type</p>
            </div>
            <ul className="money-history-list-container">
              {historyList.map(eachHistory => (
                <TransactionItem
                  moneyDelete={this.onDelete}
                  key={eachHistory.id}
                  historyDetail={eachHistory}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
