import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { init } from './billingCycleActions'
import LabelInput from '../common/form/LabelInput'
import ItemList from './ItemList';
import Summary from './Summary';

class BillingCycleForm extends Component {
    
    calculateSummary() {
        const sum = (t, v) => t + v
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
        }
    }    
    
    render() {

        const { handleSubmit, readOnly, credits, debts } = this.props
        const { sumOfCredits, sumOfDebts } = this.calculateSummary()

        return (
            <form role="form" onSubmit={handleSubmit} >
                <div className="box-body">
                    <Field name="name" component={LabelInput} label="Nome" cols="12 4" placeholder="Informe o nome" readOnly={readOnly} />
                    <Field name="month" component={LabelInput} label="Mês" cols="12 4" placeholder="Informe o mês" type="number" readOnly={readOnly} />
                    <Field name="year" component={LabelInput} label="Ano" cols="12 4" placeholder="Informe o ano" type="number" readOnly={readOnly}/>
                    <Summary credit={sumOfCredits} debt={sumOfDebts} />
                    <div className="row">
                        <ItemList cols='12 6' list={credits} readOnly={readOnly} field='credits' legend='Créditos' />
                        <ItemList cols='12 6' list={debts} readOnly={readOnly} field='debts' legend='Débitos' showStatus={true} />   
                    </div>

                    <div className="row">
                        <div className="box-footer">
                            <button type="submit" className="btn btn-primary">Confirmar</button>
                            <button type="button" className="btn btn-default" onClick={this.props.init} >Cancelar</button>
                        </div>                        
                    </div>                
                </div>
            </form>
        );
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)