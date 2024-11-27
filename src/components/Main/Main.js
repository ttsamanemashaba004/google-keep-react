import './Main.css'
import Sidebar from './Sidebar/Sidebar'
import Notes from './Notes/Notes'

const Main = ( {isExpanded}) => {
  return (
    <div className='main-section'>
      <Sidebar isExpanded = {isExpanded}/>
      <Notes />


    </div>
  )
}

export default Main