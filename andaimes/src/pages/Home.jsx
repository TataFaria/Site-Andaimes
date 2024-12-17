import Banner from "../componentes/Banner/Banner.jsx"
import Footer from "../componentes/Footer/Footer.jsx"
import Header from "../componentes/Header/Header.jsx"
import ImageGalley from "../componentes/ImageGallery/ImageGallery.jsx"

function Home() {
    return (
        <>
            <Header />
            <Banner />
            <ImageGalley/>  
            <Footer/>
        </>
    )
}

export default Home