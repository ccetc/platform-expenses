import model from 'platform/models/model'
import date from 'platform/validations/date'
import currency from 'platform/validations/currency'
import ExpenseType from  './expense_type'
import Project from  './project'
import User from 'platform/models/user'
import Vendor from  './vendor'

export default model.extend({

  tableName: 'expenses_advances',

  rules: {
    project_id: ['required'],
    expense_type_id: ['required'],
    vendor_id: ['required'],
    delivery_method: ['required'],
    date_needed: ['required', date('date_needed')],
    amount: ['required', currency('amount')],
    description: ['required']
  },

  virtuals: {
    activity: function() {
      return {
        type: 'advance',
        text: this.get('description')
      }
    }
  },

  approved_by: function() {
    return this.belongsTo(User, 'approved_by_id')
  },

  expense_type: function() {
    return this.belongsTo(ExpenseType, 'expense_type_id')
  },

  project: function() {
    return this.belongsTo(Project, 'project_id')
  },

  user: function() {
    return this.belongsTo(User, 'user_id')
  },

  vendor: function() {
    return this.belongsTo(Vendor, 'vendor_id')
  }

})
