import { BILLING_SUMMARY_FETECHD } from "./dashboardAction";

const INITITAL_STATE = {summary:{ credit: 0, debt: 0 }}

export default (state = INITITAL_STATE, action) => {
    switch(action.type) {
        case BILLING_SUMMARY_FETECHD:
            return { ...state, summary: action.payload.data }
        default:
            return state
    }
}
//aula 22