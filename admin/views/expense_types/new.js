import React from 'react'
import Form from 'admin/components/form'

class New extends React.Component {

  static contextTypes = {
    modal: React.PropTypes.object
  }

  render() {
    return <Form {...this._getForm()} />
  }

  _getForm() {
    return {
      title: 'New Expense Type',
      method: 'post',
      action: '/admin/expenses/expense_types',
      onCancel: this.context.modal.pop,
      onSuccess: this.context.modal.pop,
      sections: [
        {
          fields: [
            { label: 'Title', name: 'title', type: 'textfield' },
            { label: 'Code', name: 'code', type: 'textfield' },
            { label: 'Description', name: 'description', type: 'textarea' }
          ]
        }
      ]
    }
  }

}

export default New
