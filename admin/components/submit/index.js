import React from 'react'
import pluralize from 'pluralize'
import { connect } from 'react-redux'
import * as actions from './actions'

class Approve extends React.Component {

  static contextTypes = {
    container: React.PropTypes.object
  }

  static propTypes = {
    disbaled: React.PropTypes.bool,
    id: React.PropTypes.object,
    status: React.PropTypes.string,
    type: React.PropTypes.string
  }

  static defaultProps = {
    disbaled: false
  }

  render() {
    const { disabled } = this.props
    let classes = ['ui','primary','fluid','button']
    if(disabled) classes.push('disabled')
    return <button className="ui primary fluid button" disabled={ disabled } onClick={ this._handleSubmit.bind(this) }>Submit for Approval</button>
  }

  componentDidUpdate(prevProps) {
    const { status, type } = this.props
    if(prevProps.status !== status) {
      this.context.container.refresh(type)
    }
  }

  _handleSubmit() {
    const { id, onSubmit } = this.props
    const type = pluralize(this.props.type)
    onSubmit(type, id)
  }

}

const mapStateToProps = state => ({
  status: state.expenses.submit.status
})

const mapDispatchToProps = {
  onSubmit: actions.submit
}

export default connect(mapStateToProps, mapDispatchToProps)(Approve)
