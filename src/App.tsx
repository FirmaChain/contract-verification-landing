import './App.css'
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

const App = () => {
    return (
        <>
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
        </>
    )
}

export default App
