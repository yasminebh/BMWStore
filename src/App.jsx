import Nav from "./components/Nav"
import Exceptional from "./sections/Exceptional"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Newsletter from "./sections/Newsletter"
import Popular from "./sections/Popular"
import Quality from "./sections/Quality"
import Review from "./sections/Review"
import Services from "./sections/Services"

function App() {

  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className=' padding'>
        <Popular />
      </section>
      <section className=' padding'>
        <Quality />
      </section>
      <section className=' padding'>
        <Services />
      </section>
      <section className=' padding '>
        <Exceptional />
      </section>
      <section className=' padding bg-blue-50 '>
        <Review />
      </section>
      <section className=' padding  '>
        <Newsletter />
      </section>
      <section className=' sm:px-16 px-8 sm:py-15 py-12 bg-hero bg-cover'>
        <Footer />
      </section>

    </main>
  )
}

export default App
