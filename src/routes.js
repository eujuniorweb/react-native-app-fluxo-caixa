import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from '~/pages/Home';
import Cadastro from '~/pages/Cadastro';
import Login from '~/pages/Login';
import Dashboard from '~/pages/Dashboard';

const Routes = createAppContainer(
  createStackNavigator({
    Home,
    Cadastro,
    Login,
    Dashboard,
  }),
);
export default Routes;
