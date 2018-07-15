import React from 'react';

class CalculateAmount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            finalPrice: 0,
            exchangeRate: 5.1,
            shippingFee:8,
            taxRate: 1.13,
            serviceFee: 0,
            servicePercentage: 0,
            finalAndServicePrice: 0
        }
        this.calculatePrice = this.calculatePrice.bind(this);
    }
    calculatePrice(e) {
        e.preventDefault();
        let calculatedFianlPrice = (parseFloat(this.originalPrice.value) * parseFloat(this.taxRate.value) + parseFloat(this.shippingFee.value)) * parseFloat(this.exchangeRate.value);
        let calculatedFinalAndServicePrice = 0;
        let calculatedServiceFee = 0;
        if(this.servicePercentage.value){
            calculatedFinalAndServicePrice = parseFloat(calculatedFianlPrice) * (1 + parseFloat(this.servicePercentage.value)/100);
            calculatedServiceFee = calculatedFianlPrice * (parseFloat(this.servicePercentage.value)/100);
        }
        this.setState({
            finalPrice: calculatedFianlPrice,
            exchangeRate: this.exchangeRate.value,
            shippingFee: this.shippingFee.value,
            serviceFee: calculatedServiceFee,
            servicePercentage: this.servicePercentage.value,
            finalAndServicePrice: calculatedFinalAndServicePrice
        });
    }
    render() {
        return (
            <div className="container">
                <div className="input-group col-6">
                    <span className="input-group-addon">Original $</span>
                    <input type="text" className="form-control" ref={(input) => this.originalPrice = input} onChange={this.calculatePrice} />
                </div>
                <div className="input-group col-6">
                    <span className="input-group-addon">Exchange rate</span>
                    <input type="text" className="form-control" defaultValue={this.state.exchangeRate} ref={(input) => this.exchangeRate = input} onChange={this.calculatePrice} />
                </div>
                <div className="input-group col-6">
                    <span className="input-group-addon">Shipping fee</span>
                    <input type="text" className="form-control" defaultValue={this.state.shippingFee} ref={(input) => this.shippingFee = input} onChange={this.calculatePrice} />
                </div>
                <div className="input-group col-6">
                    <span className="input-group-addon">Tax rate</span>
                    <input type="text" className="form-control" defaultValue={this.state.taxRate} ref={(input) => this.taxRate = input} readOnly="readonly"/>
                </div>
                <div className="input-group col-6">
                    <span className="input-group-addon">Final $</span>
                    <input type="text" className="form-control" value={this.state.finalPrice} onChange={this.calculatePrice} readOnly="readonly"/>
                </div>
                <div className="input-group col-6">
                    <span className="input-group-addon">Service fee</span>
                    <input type="text" className="form-control" value={this.state.serviceFee} onChange={this.calculatePrice} readOnly="readonly"/>
                </div>
                <div className="input-group col-6">
                    <span className="input-group-addon">Service Percentage</span>
                    <input type="text" className="form-control" defaultValue={this.state.servicePercentage} ref={(input) => this.servicePercentage = input} onChange={this.calculatePrice} />
                </div>
                <div className="input-group col-6">
                    <span className="input-group-addon">Final $ + Service fee</span>
                    <input type="text" className="form-control" value={this.state.finalAndServicePrice} onChange={this.calculatePrice} readOnly="readonly"/>
                </div>
            </div>

        )
    }
}

export default CalculateAmount;