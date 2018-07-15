import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setEditItem } from '../actions/itemActions';

class Item extends React.Component {
    constructor(props) {
        super(props)
        this.onItemClick = this.onItemClick.bind(this);
    }
    onItemClick(e) {
        e.preventDefault();
        this.props.setEditItem(this.props.itemKey, this.props.details);
    }
    render() {
        const { details } = this.props;
        return (
            <div className="card" onClick={this.onItemClick}>
                <div className="card-body">
                    <h4 className="card-title">{this.props.index + 1}. {details.name}</h4>
                    <p className="card-text">{details.number}</p>
                    <p className="card-text">{details.size}</p>
                    <p className="card-text">{details.color}</p>
                    <p className="card-text">{details.desc}</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        appState: state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setEditItem }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);