import Card from './components/Card'
import './App.css'

function App() {

  return (
    <>
      <Card
        title="Card Title"
        description="This is a description for the card."
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1lqDo6NL9t22YNcUlXqxT0__OOIFnfCuzeA&s"
      />
      <Card
        title="Card Title"
        description="This is a description for the card."
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIfls1MosRYemhUCbTpuhmoc8eoAVVb-iDhA&s"
        />
      <Card
        title="Card Title"
        description="This is a description for the card."
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWKWbS51AVnS-Qy3mquBPl5Vq3N20WsmAxQg&s"
      />
    </>
  )
}

export default App
