import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
export const BILLING_CYCLES_FETECHED = 'BILLING_CYCLES_FETECHED'


export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: BILLING_CYCLES_FETECHED,
        payload: request
    }
}

export function create(values) {
    // redux thunk
    return dispatch => {
        axios.post(`${BASE_URL}/billingCycles`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Dados incluídos com sucesso!')
                dispatch([
                    resetForm('billingCycleForm'),
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ]) //redux multi
            })
            .catch( e => {
                e.response.data.errors.forEach(error => toastr.error("Erro", error))
            })
    }
}