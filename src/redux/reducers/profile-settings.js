import {createActions} from 'reduxsauce';

const {Creators} = createActions({
  startProfileSettingsFlow: [],
  updateUserInformation: [],
});
console.log(Creators);
export default Creators;
