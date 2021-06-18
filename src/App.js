import Header from './Components/Header'
import Personal from './Components/Personal'
import ExperienceComp from './Components/ExperienceComp'
import SubmitHandler from './Components/SubmitHandler'
import ExperienceContainer from './Components/ExperienceContainer'

const experienceList = [<ExperienceComp />];

function App() {

  return (
    <div className='page'>
      <Header />
      <form onSubmit={SubmitHandler}>
        <div id='personalDiv'>
          <Personal />
        </div>
        <ExperienceContainer />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App
export { experienceList }