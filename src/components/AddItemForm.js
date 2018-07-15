import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem } from '../actions/itemActions';

class AddItemForm extends React.Component {
  constructor(props) {
    super(props)
    this.createItem = this.createItem.bind(this);
  }
  createItem(e) {
    e.preventDefault();
    const item = {
      name: this.name.value,
      number: this.number.value,
      size: this.size.value,
      color: this.color.value,
      desc: this.desc.value
    }
    this.props.addItem(item, this.props.orderDate);
    this.itemForm.reset();
  }

  render() {
    return (
      <form ref={(input) => this.itemForm = input} onSubmit={this.createItem}>
        <div className="form-group">
          <label >Item Name</label>
          <input className="form-control" ref={(input) => this.name = input} type="text" placeholder="Item Name" />
        </div>
        <div className="form-group">
          <label >Item Number</label>
          <input className="form-control" ref={(input) => this.number = input} type="text" placeholder="Item Number" />
        </div>
        <div className="form-group">
          <label >Item size</label>
          <input className="form-control" ref={(input) => this.size = input} type="text" placeholder="Item Size" />
        </div>
        <div className="form-group">
          <label >Item Color</label>
          <input className="form-control" ref={(input) => this.color = input} type="text" placeholder="Item Color" />
        </div>
        <div className="form-group">
          <label >Item Description</label>
          <textarea className="form-control" ref={(input) => this.desc = input} placeholder="Item Description" ></textarea>
        </div>
        <button className="btn btn-success" type="submit">Add Item</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    appState: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addItem }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItemForm);
