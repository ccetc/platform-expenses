import React from 'react'
import Details from 'admin/components/details'
import Page from 'admin/components/page'
import Edit from './edit'
import Receipt from '../../components/receipt'
import Submit from '../../components/submit'
import { ApprovalAlert } from '../../components/approval_status'

class Show extends React.Component {

  render() {
    const { expense } = this.props
    return (
      <div className="chrome-main">
        <div className="chrome-body">
          <div className="chrome-sidebar">
            <ApprovalAlert {...expense} />
            <Details {...this._getDetails()} />
          </div>
        </div>
        { !expense.is_submitted &&
          <div className="chrome-cta">
            <Submit {...this._getSubmit()} />
          </div>
        }
      </div>
    )
  }

  _getDetails() {
    const { expense } = this.props
    const approved_by_label = expense.is_approved ? 'Approved By' : 'Rejected By'
    const approved_by_value = expense.approved_by ? expense.approved_by.full_name : null
    const approved_at_label = expense.is_approved ? 'Approved At' : 'Rejected At'
    return {
      items: [
        { label: 'Receipt ', content: expense.receipt, format: Receipt },
        { label: 'Date ', content: expense.date, format: 'date' },
        { label: 'Project ', content: expense.project.title },
        { label: 'Expense Type ', content: expense.expense_type.title },
        { label: 'Vendor ', content: expense.vendor.name },
        { label: 'Description ', content: expense.description },
        { label: 'Amount ', content: expense.amount, format: 'currency' },
        { label: 'Visa? ', content: expense.is_visa, format: 'yes_no' },
        { label: approved_by_label, content: approved_by_value },
        { label: approved_at_label, content: expense.approved_at, format: 'datetime' },
        { label: 'Reason Rejected ', content: expense.reason_rejected }
      ]
    }
  }

  _getSubmit() {
    const { expense } = this.props
    return {
      type: 'expense',
      id: this.props.expense.id,
      disabled: (expense.receipt === null)
    }
  }

}

const mapResourcesToPage = (props, context) => ({
  expense: `/admin/expenses/expenses/${props.params.id}`
})

const mapPropsToPage = (props, context, resources) => ({
  title: 'Expense',
  rights: ['expenses.manage_expenses'],
  tasks: [
    { label: 'Edit Expense', modal: Edit }
  ]
})

export default Page(mapResourcesToPage, mapPropsToPage)(Show)
