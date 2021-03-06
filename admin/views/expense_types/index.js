import React from 'react'
import Page from 'admin/components/page'
import Collection from 'admin/components/collection'
import New from './new'
import ExpenseTypeToken from '../../components/expense_type_token'

class Index extends React.Component {

  render() {
    return (
      <div className="chrome-body">
        <Collection {...this._getCollection()} />
      </div>
    )
  }

  _getCollection() {
    return {
      endpoint: '/admin/expenses/expense_types',
      columns: [
        { label: 'Title', key: 'title', primary: true, format: ExpenseTypeToken },
        { label: 'Code', key: 'code', primary: true }
      ],
      sort: { key: 'code', order: 'asc' },
      entity: 'expense_type',
      empty: {
        icon: 'tag',
        modal: New
      },
      recordActions: [
        { label: 'edit', icon: 'edit', redirect: '/admin/expenses/expense_types/#{id}/edit'}
      ]
    }
  }

}

const mapResourcesToPage = (props, context) => ({})

const mapPropsToPage = (props, context, resources) => ({
  title: 'Expense Types',
  rights: ['expenses.manage_configuration'],
  task: {
    label: 'New Expense Type',
    icon: 'plus',
    modal: New
  }
})

export default Page(mapResourcesToPage, mapPropsToPage)(Index)
