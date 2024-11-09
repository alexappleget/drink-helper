import { Accordion } from "./components/Accordion/Accordion";
import { Drinks } from "./drinks/Drinks";

function App() {
  return (
    <div className="flex flex-col items-center">
      <h1 style={{ fontWeight: "bold" }}>Drinks</h1>
      {Drinks.map((drink, index) => (
        <Accordion
          key={index}
          name={drink.name}
          directions={drink.directions}
        />
      ))}
    </div>
  );
}

export default App;
