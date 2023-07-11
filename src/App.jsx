import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import Card from './Card.jsx'
import data from './data.js'

function App(){

  // console.log(data)
  const travelDataArray = data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}
      />

    )
  })

  return (
    <div>
    <Header />
    <div>
      {travelDataArray}
    </div>
    </div>
  )

}

export default App
