import Navbar from '../components/project2/Navbar/Navbar'
import Card from '../components/project2/Card/Card'
import data from '../../api/data'
import styles from './Project2.module.css'

function Project2() {

  const card = data.map(item => <Card key={item.key} {...item} /> )
    return (
      <div className={`${styles.Project2} pb-1`}>
        <Navbar />
        {card}
      </div>
    )
}

export default Project2
