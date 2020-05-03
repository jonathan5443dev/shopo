import {createActions} from 'reduxsauce';

const {Creators} = createActions({
  startProductDetailFlow: ['product'],
});

export default Creators;
