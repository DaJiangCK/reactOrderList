import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteItem } from '../actions/itemActions';
import { updateItem } from '../actions/itemActions';
import { setEditItem } from '../actions/itemActions';

class EditItem extends React.Component {
    constructor(props) {
        super(props)
        this.editItem = this.editItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.name.value = nextProps.appState.editItemDetails.name;
        this.number.value = nextProps.appState.editItemDetails.number;
        this.size.value = nextProps.appState.editItemDetails.size;
        this.color.value = nextProps.appState.editItemDetails.color;
        this.desc.value = nextProps.appState.editItemDetails.desc;
    }

    editItem(e) {
        e.preventDefault();
        const item = {
            name: this.name.value,
            number: this.number.value,
            size: this.size.value,
            color: this.color.value,
            desc: this.desc.value
        }
        this.props.updateItem(item, this.props.appState.editItemKey, this.props.orderDate);
        // Empty edit item
        this.props.setEditItem(null, null);
    }

    removeItem(e) {
        e.preventDefault();
        this.props.deleteItem(this.props.appState.editItemKey, this.props.orderDate);
        // Empty edit item
        this.props.setEditItem(null, null);
    }

    render() {
        return (
            <form ref={(input) => this.itemForm = input} onSubmit={(e) => this.editItem(e)}>
                <div className="form-group">
                    <label >Item Name</label>
                    <input className="form-control" ref={(input) => this.name = input} type="text" placeholder="Item Name" defaultValue={this.props.appState.editItemDetails.name} />
                </div>
                <div className="form-group">
                    <label >Item Number</label>
                    <input className="form-control" ref={(input) => this.number = input} type="text" placeholder="Item Number" defaultValue={this.props.appState.editItemDetails.number} />
                </div>
                <div className="form-group">
                    <label >Item size</label>
                    <input className="form-control" ref={(input) => this.size = input} type="text" placeholder="Item Size" defaultValue={this.props.appState.editItemDetails.size} />
                </div>
                <div className="form-group">
                    <label >Item Color</label>
                    <input className="form-control" ref={(input) => this.color = input} type="text" placeholder="Item Color" defaultValue={this.props.appState.editItemDetails.color} />
                </div>
                <div className="form-group">
                    <label >Item Description</label>
                    <textarea className="form-control" ref={(input) => this.desc = input} placeholder="Item Description" defaultValue={this.props.appState.editItemDetails.desc} ></textarea>
                </div>
                <button className="btn btn-success" type="submit">Update Item</button>
                <button className="btn btn-danger" onClick={this.removeItem}>Delete</button>
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
    return bindActionCreators({ deleteItem, updateItem, setEditItem }, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(EditItem);

