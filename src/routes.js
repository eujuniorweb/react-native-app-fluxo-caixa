import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from '~/pages/Home';
import Cadastro from '~/pages/Cadastro';
import Login from '~/pages/Login';
import Dashboard from '~/pages/Dashboard';
import Preload from '~/pages/Preload';
import Receita from '~/pages/Receita';
import Despesa from '~/pages/Despesa';

const Routes = createAppContainer(
  createStackNavigator({
    Preload,
    Dashboard,
    Home,
    Cadastro,
    Login,
    Receita,
    Despesa,
  }),
);
export default Routes;
