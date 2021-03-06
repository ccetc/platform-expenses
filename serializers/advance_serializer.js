export default (object) => {

  return Promise.resolve({
    id: object.get('id'),
    date_needed: object.get('date_needed'),
    description: object.get('description'),
    expense_type: {
      id: object.related('expense_type').get('id'),
      code: object.related('expense_type').get('code'),
      title: object.related('expense_type').get('title'),
      description: object.related('expense_type').get('description')
    },
    project: {
      id: object.related('project').get('id'),
      title: object.related('project').get('title')
    },
    vendor: {
      id: object.related('vendor').get('id'),
      name: object.related('vendor').get('name')
    },
    user: {
      id: object.related('user').get('id'),
      full_name: object.related('user').get('full_name')
    },
    amount: object.get('amount'),
    is_submitted: object.get('is_submitted'),
    is_approved: object.get('is_approved'),
    approved_by: object.related('approved_by').get('id') ? {
      id: object.related('approved_by').get('id'),
      full_name: object.related('approved_by').get('full_name')
    } : null,
    approved_at: object.get('approved_at'),
    reason_rejected: object.get('reason_rejected'),
    created_at: object.get('created_at'),
    updated_at: object.get('updated_at')
  })

}
