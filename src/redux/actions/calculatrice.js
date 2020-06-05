import * as types from '../types/calculatrice';


const screen = number => ({type: types.SCREEN, number:number});
const addOp = () => ({type: types.ADD});
const subOp = () => ({type: types.SUB});
const divOp = () => ({type: types.DIV});
const mulOp = () => ({type: types.MUL});
const equOp = () => ({type: types.EQU});
const reset = () => ({type: types.RESET});




export const mapDispatchToProps = dispatch => ({ 
    // dispatch: arg => dispatch(arg) ,
    screen: number => dispatch(screen(number)),
    addOp: () => dispatch(addOp()),
    subOp: () => dispatch(subOp()),
    divOp: () => dispatch(divOp()),
    mulOp: () => dispatch(mulOp()),
    equOp: () => dispatch(equOp()),
    reset: () => dispatch(reset()),
});