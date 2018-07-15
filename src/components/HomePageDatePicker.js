import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';


class HomePageDatePicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  onSubmitClick(e) {
    e.preventDefault();
    // push :orderDate to router
    this.props.history.push(`/order/${this.state.startDate.format('YYYYMMDD')}`);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
        </div>
        <div className="row">
          {/* <button
            className="btn btn-primary"
            onClick={this.onSubmitClick}>Submit
          </button> */}
          <Button raised color="accent" className={this.props.classes.button} onClick={this.onSubmitClick}>
            Search
          </Button>
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  }
});

// export default HomePageDatePicker;
export default withStyles(styles)(HomePageDatePicker);