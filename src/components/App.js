import React, { Component } from 'react';
// import database from '../database/AppFirebase';
import Item from './Item';
import AddItemForm from './AddItemForm';
import EditItemForm from './EditItemForm';
import _ from 'lodash';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchItems } from '../actions/itemActions';

import { CircularProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';

class App extends Component {
  componentWillMount() {
    this.props.fetchItems(this.props.match.params.orderDate);
  }

  render() {
    let loader = null;
    if (this.props.appState.isFetching === true) {
      loader = <CircularProgress className={this.props.classes.progress} />;
    }
    let itemList = null;
    if (!_.isEmpty(this.props.appState.items)) {
      itemList = <ul>
        {
          Object
            .keys(this.props.appState.items)
            .map((key, index) => <Item key={key} itemKey={key} index={index} details={this.props.appState.items[key]} />)
        }
      </ul>
    }
    let editForm = null;
    if (!_.isEmpty(this.props.appState.editItemDetails)) {
      editForm = <EditItemForm orderDate={this.props.match.params.orderDate} />
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div style={{ textAlign: 'center' }}>
              {loader}
            </div>
            {itemList}
          </div>
          <div className="col">
            <AddItemForm orderDate={this.props.match.params.orderDate} />
          </div>
          <div className="col">
            {editForm}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    appState: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchItems }, dispatch);
}

const styles = theme => ({
  progress: {
    margin: `0 ${theme.spacing.unit * 5}px`,
  },
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(App));
