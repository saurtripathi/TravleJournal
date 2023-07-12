// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './Card'

function Card(props) {
// console.log(props.item.price)
  return (
    <>
    <div className='card'>
    <div>
        <img className='card--location_pic' src={props.imageUrl} alt='Location Photograph'   />
    </div>
    <div>
    <div className='card--location_icon--country--maps ml'>
        <img className='card--location_icon' src='map.png' alt='Location icon'/>
        <p className='card--country'>{props.location}</p>
        <a className='card--maps' href={props.googleMapsUrl}>View on Google Maps</a>
    </div>
    <h1 className='card--location_name ml'>{props.title}</h1>
    <p className='card--date ml'>{props.startDate} - {props.endDate}</p>
    <p className='card--location_description ml'>{props.description}</p>
    </div>
    </div>
    </>
  )
}

export default Card
