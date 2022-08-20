import Navbar from '../components/project2/Navbar/Navbar'
import Card from '../components/project2/Card/Card'
import data from '../../api/data'
import './Project2.css'

function Project2() {

  const card = data.map(item => <Card key={item.key} {...item} /> )
    return (
      <div className="Project2">
        <Navbar />
        {card}
      </div>
    )
}

export default Project2
