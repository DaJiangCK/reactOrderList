import React from 'react';
import HomePageDatePicker from './HomePageDatePicker';

class HomePage extends React.Component {
    onCalculateAmountClick(e) {
        e.preventDefault();
        this.props.history.push('/calculate-amount');
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <HomePageDatePicker history={this.props.history} />
                </div>
                <br />
                <div className="row">
                    <button
                        className="btn btn-info"
                        onClick={this.onCalculateAmountClick.bind(this)}>
                        Calculate Amount
                    </button>
                </div>
            </div>
        )
    }
}

export default HomePage;