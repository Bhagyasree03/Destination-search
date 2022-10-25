// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props

  const {name, imgUrl} = destinationDetails

  return (
    <li className="card">
      <img src={imgUrl} className="img-card" alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
