import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Home from '../Containers/Home'
import IdentityScreen from '../Containers/IdentityScreen'
import NightScreen from '../Containers/NightScreen'


const nav = createSwitchNavigator(
  {
    Home,
    IdentityScreen,
    NightScreen,
  },
  {
    initialRouteName: 'NightScreen'
  }
)

const app = createAppContainer(nav)

export default app
