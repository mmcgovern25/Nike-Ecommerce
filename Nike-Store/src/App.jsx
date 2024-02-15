import { Hero, Sales} from './components';
import { heroapi, popularsales, toprateslaes  } from './data/data';

const App = () => {
  return (
    <>
      <main>
        <Hero heroapi={heroapi}/>
        <Sales endpoint={popularsales}/>
        <Sales endpoint={toprateslaes}/>
      </main>
    </>
  )
}

export default App
