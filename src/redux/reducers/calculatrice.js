import * as types from '../types/calculatrice';

const initialState = () => ({
    screen: '',
    total:null,
    showTotal: false,
    operator: ''
});
  
export default (state = initialState(), action) => {

    const op = (state, symbol) => {
        const num = parseFloat(state.screen)
        if (state.total === null) {
        
            state.showTotal = true;
            state.screen = num;
            state.total = num;
            state.operator = symbol;
        } else {
        
            if (state.operator === '+') state.total += num;
            else if (state.operator === '-') state.total -= num;
            else if (state.operator === '/') state.total = state.total  / num;
            else if (state.operator === '*') state.total *= num;

            state.operator = symbol;

            state.showTotal = true;
            state.screen = state.total+'';
            state.op = []
        }
        
        console.log('op ', symbol, num, state);
        return state;
    }

    switch (action.type) {
        case types.SCREEN:
            console.log('screen', state.screen, action.number );

            if (state.showTotal) {
                state.screen = '';
                state.showTotal = false;
            }

            state.screen = state.screen+action.number
            return {...state};

        case types.ADD:
            return {...op(state, '+')};

        case types.SUB:
            return {...op(state, '-')};

        case types.DIV:
            return {...op(state, '/')};

        case types.MUL:
            return {...op(state, '*')};

        case types.EQU:
            state = {...op(state, '')};
            state.screen = state.total;
            return {...state};

        case types.RESET:
            return {...initialState()};

        default:
            return {...state};
    }
}