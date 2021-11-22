import MainPage from './components/MainPage'
import { store } from './components/app/index'
import { Provider } from 'react-redux'

export default function Home() {
  return (
    <Provider store={store}>
      <MainPage/>
    </Provider>
  )
}
