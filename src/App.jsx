import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <Canvas>
        <color attach="background" args={["#15222e"]} />
        <fog attach="fog" args={["#101010", 10, 20]} />
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
