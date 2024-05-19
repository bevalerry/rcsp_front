import { useClassNames } from 'shared/lib/useClassNames'
import { Header } from 'widgets/Header/Header'
import { AppRouter } from './providers/routesProvider/UI/Router'
import { useTheme } from './providers/themeProvider/lib/useTheme'
import './styles/index.scss'
import { useEffect } from 'react'
import { checkAuthority } from 'shared/config/store/actionCreators/authActions'
import { useDispatch } from 'react-redux'
import { Footer } from 'widgets/Footer/Footer'

function App() {
    const { theme } = useTheme()
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(checkAuthority())
    }, [])

  return (
    <div className={useClassNames('app', [theme])}>
        <Header/>
        <AppRouter/>
        <Footer/>
    </div>
  )
}

export default App
