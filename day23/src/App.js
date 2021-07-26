import './App.css';
import useFetch from './useFetch';

function App() {
  const {data} = useFetch(`https://jsonplaceholder.typicode.com/posts`);

  return (
    <div className="App">
      <header className="App-header">
        <div className="Container">
          <h1>Custom Hook</h1>
          {
            data.map((item) => (
              <div key={item.id} className="Card">
                <p>{item.title}</p>
              </div>
            ))
          }
        </div>
      </header>
    </div>
  );
}

export default App;
