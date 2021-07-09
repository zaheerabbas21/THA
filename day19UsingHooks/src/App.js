import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <p>
        There are 4 counter component instances that each manage their own
        state.
      </p>
      <div className="counters">
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    </div>
  );
}
