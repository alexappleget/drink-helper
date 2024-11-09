import { Accordion } from "./components/Accordion/Accordion";
import { Drinks } from "./drinks/Drinks";

function App() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-8xl mt-4 mb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-lg">
        Drinks
      </h1>
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
