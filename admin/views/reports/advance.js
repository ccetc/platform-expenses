import React from 'react'
import Details from 'admin/components/details'
import Page from 'admin/components/page'
import { ApprovalAlert } from '../../components/approval_status'

class Show extends React.Component {

  render() {
    const { advance } = this.props
    return (
      <div className="chrome-body">
        <div className="chrome-sidebar">
          <ApprovalAlert {...advance} />
          <Details {...this._getDetails()} />
        </div>
      </div>
    )
  }

  _getDetails() {
    const { advance } = this.props
    const approved_by_label = advance.is_approved ? 'Approved By' : 'Rejected By'
    const approved_by_value = advance.approved_by ? advance.approved_by.full_name : null
    const approved_at_label = advance.is_approved ? 'Approved At' : 'Rejected At'
    return {
      items: [
        { label: 'Date Needed', content: advance.date_needed, format: 'date' },
        { label: 'User', content: advance.user.full_name },
        { label: 'Project', content: advance.project.title },
        { label: 'Expense Type', content: advance.expense_type.description },
        { label: 'Vendor', content: advance.vendor.name },
        { label: 'Delivery Method', content: advance.delivery_method },
        { label: 'Description', content: advance.description },
        { label: 'Amount', content: advance.amount, format: 'currency' },
        { label: approved_by_label, content: approved_by_value },
        { label: approved_at_label, content: advance.approved_at, format: 'datetime' },
        { label: 'Reason Rejected', content: advance.reason_rejected }
      ]
    }
  }

}

const mapResourcesToPage = (props, context) => ({
  advance: `/admin/expenses/reports/advances/${props.params.id}`
})

const mapPropsToPage = (props, context, resources) => ({
  title: 'Advance',
  rights: ['expenses.access_reports']
})

export default Page(mapResourcesToPage, mapPropsToPage)(Show)
