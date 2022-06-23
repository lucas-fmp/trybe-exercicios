import './App.css';

const tasks = ['Lavar a louça', 'Varrer a casa', 'Cozinhar'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    tasks.map((element) => Task(element))
  );
}

export default App;
