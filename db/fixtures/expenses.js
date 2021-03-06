const moment = require('moment')

module.exports = {
  tableName: 'expenses_expenses',
  records: [
    {
      id: 1,
      team_id: 1,
      user_id: 1,
      project_id: 1,
      expense_type_id: 1,
      vendor_id: 1,
      date: '2017-01-01',
      description: 'test',
      amount: 45.22,
      is_visa: false,
      is_approved: true,
      approved_by_id: 47,
      approved_at: moment().subtract(10, 'days').format('YYYY-MM-DD HH:MM:ss ZZ'),
      reason_rejected: null,
      created_at: moment().subtract(25, 'days').format('YYYY-MM-DD HH:MM:ss ZZ'),
      updated_at: moment().subtract(25, 'days').format('YYYY-MM-DD HH:MM:ss ZZ')
    },{
      id: 2,
      team_id: 1,
      user_id: 2,
      project_id: 1,
      expense_type_id: 1,
      vendor_id: 1,
      date: '2017-01-01',
      description: 'test',
      amount: 83.62,
      is_visa: false,
      is_approved: null,
      approved_by_id: null,
      approved_at: null,
      reason_rejected: null,
      created_at: moment().subtract(20, 'days').format('YYYY-MM-DD HH:MM:ss ZZ'),
      updated_at: moment().subtract(20, 'days').format('YYYY-MM-DD HH:MM:ss ZZ')
    },{
      id: 3,
      team_id: 1,
      user_id: 3,
      project_id: 1,
      expense_type_id: 1,
      vendor_id: 1,
      date: '2017-01-01',
      description: 'test',
      amount: 98.25,
      is_visa: false,
      is_approved: null,
      approved_by_id: null,
      approved_at: null,
      reason_rejected: null,
      created_at: moment().subtract(16, 'days').format('YYYY-MM-DD HH:MM:ss ZZ'),
      updated_at: moment().subtract(16, 'days').format('YYYY-MM-DD HH:MM:ss ZZ')
    },{
      id: 4,
      team_id: 1,
      user_id: 1,
      project_id: 2,
      expense_type_id: 1,
      vendor_id: 1,
      date: '2017-01-01',
      description: 'test',
      amount: 44.06,
      is_visa: false,
      is_approved: false,
      approved_by_id: 47,
      approved_at: moment().subtract(10, 'days').format('YYYY-MM-DD HH:MM:ss ZZ'),
      reason_rejected: 'invalid expense code',
      created_at: moment().subtract(12, 'days').format('YYYY-MM-DD HH:MM:ss ZZ'),
      updated_at: moment().subtract(12, 'days').format('YYYY-MM-DD HH:MM:ss ZZ')
    },{
      id: 5,
      team_id: 1,
      user_id: 1,
      project_id: 2,
      expense_type_id: 2,
      vendor_id: 1,
      date: '2017-01-01',
      description: 'test',
      amount: 38.27,
      is_visa: false,
      is_approved: null,
      approved_by_id: null,
      approved_at: null,
      reason_rejected: null,
      created_at: moment().subtract(10, 'days').format('YYYY-MM-DD HH:MM:ss ZZ'),
      updated_at: moment().subtract(10, 'days').format('YYYY-MM-DD HH:MM:ss ZZ')
    }
  ]
}
