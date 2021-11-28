import MainPage from './components/MainPage'
import { store } from './components/app/index'
import { Provider } from 'react-redux'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <Provider store={store}>
      <Navbar/>
      <MainPage/>
    </Provider>
  )
}
