import Welcome from './view/Welcome'
import { Container } from './styles'
import About from './view/About'
import Utilization from './view/Utilization'
import Verification from './view/Verification'
import VerifyAPI from './view/VerifyAPI'
import Services from './view/Services'
import Contact from './view/Contact'
import Header from './components/header'
import Footer from './components/footer'
import { GlobalStateProvider } from './contexts/GlobalStateContext'
import MobileGNBShade from './components/mobileShade'

const App = () => {
    return (
        <GlobalStateProvider>
            <MobileGNBShade />
            <Header />
            <Container>
                <Welcome />
                <About />
                <Utilization />
                <Verification />
                <VerifyAPI />
                <Services />
                <Contact />
                <Footer />
            </Container>
        </GlobalStateProvider>
    )
}

export default App
