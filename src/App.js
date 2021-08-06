import './App.css';
import Card from './components/Card/Card'

function App() {
  return (
    <div className="App">
      <Card 
        text="Хлебобу́лочные изделия — пищевые продукты, получаемые методом выпекания из теста (состоящего как минимум из муки, воды и соли), разрыхлённого дрожжами или закваской." 
        imageLink="https://i.pinimg.com/originals/93/66/02/9366028b861a528521bf454937101a95.jpg" 
        imageDescription="Самая сладкая булочка"
        width="18"
      />
    </div>
  );
}

export default App;
