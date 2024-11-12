import MainLayout from './layouts/MainLayout'
import './styles/App.css'
import EmailContext from './context/EmailContext'

function App() {

  return (
    <>
    <EmailContext>
        <MainLayout />
    </EmailContext>
    </>
  )
}

export default App
