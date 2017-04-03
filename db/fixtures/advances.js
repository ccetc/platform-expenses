const moment = require('moment')

module.exports = {
  tableName: 'expenses_advances',
  records: [
    {
      id: 1,
      team_id: 1,
      user_id: 1,
      project_id: 1,
      expense_type_id: 1,
      vendor_id: 1,
      delivery_method: 'pickup',
      date_needed: moment().add(6, 'days').format('YYYY-MM-DD'),
      amount: 60.00,
      description: 'Party expenses',
      is_approved: true,
      approved_by_id: 47,
      approved_at: moment().subtract(10, 'days').format('YYYY-MM-DD HH:MM:ss ZZ'),
      reason_rejected: null,
      created_at: moment().subtract(16, 'days').format('YYYY-MM-DD HH:MM:ss ZZ'),
      updated_at: moment().subtract(16, 'days').format('YYYY-MM-DD HH:MM:ss ZZ')
    }, {
      id: 2,
      team_id: 1,
      user_id: 1,
      project_id: 1,
      expense_type_id: 1,
      vendor_id: 1,
      delivery_method: 'pickup',
      date_needed: moment().add(12, 'days').format('YYYY-MM-DD'),
      amount: 60.00,
      description: 'Party expenses',
      is_approved: false,
      approved_by_id: 47,
      approved_at: moment().subtract(10, 'days').format('YYYY-MM-DD HH:MM:ss ZZ'),
      reason_rejected: 'insufficient funds',
      created_at: moment().subtract(14, 'days').format('YYYY-MM-DD HH:MM:ss ZZ'),
      updated_at: moment().subtract(14, 'days').format('YYYY-MM-DD HH:MM:ss ZZ')
    }, {
      id: 3,
      team_id: 1,
      user_id: 1,
      project_id: 1,
      expense_type_id: 1,
      vendor_id: 1,
      delivery_method: 'pickup',
      date_needed: moment().add(8, 'days').format('YYYY-MM-DD'),
      amount: 60.00,
      description: 'Party expenses',
      is_approved: null,
      approved_by_id: null,
      approved_at: null,
      reason_rejected: null,
      created_at: moment().subtract(6, 'days').format('YYYY-MM-DD HH:MM:ss ZZ'),
      updated_at: moment().subtract(6, 'days').format('YYYY-MM-DD HH:MM:ss ZZ')
    }, {
      id: 4,
      team_id: 1,
      user_id: 2,
      project_id: 1,
      expense_type_id: 1,
      vendor_id: 1,
      delivery_method: 'pickup',
      date_needed: moment().add(8, 'days').format('YYYY-MM-DD'),
      amount: 60.00,
      description: 'Party expenses',
      is_approved: null,
      approved_by_id: null,
      approved_at: null,
      reason_rejected: null,
      created_at: moment().subtract(6, 'days').format('YYYY-MM-DD HH:MM:ss ZZ'),
      updated_at: moment().subtract(6, 'days').format('YYYY-MM-DD HH:MM:ss ZZ')
    }, {
      id: 5,
      team_id: 1,
      user_id: 1,
      project_id: 1,
      expense_type_id: 1,
      vendor_id: 1,
      delivery_method: 'pickup',
      date_needed: moment().add(8, 'days').format('YYYY-MM-DD'),
      amount: 90.00,
      description: 'Party expenses',
      is_approved: null,
      approved_by_id: null,
      approved_at: null,
      reason_rejected: null,
      created_at: moment().subtract(6, 'days').format('YYYY-MM-DD HH:MM:ss ZZ'),
      updated_at: moment().subtract(6, 'days').format('YYYY-MM-DD HH:MM:ss ZZ')
    }
  ]
}
