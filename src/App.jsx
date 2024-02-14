import GraphView from "./components/GraphView";
import data from "./data/data.json";
import GitHubButton from "./components/GitHubButton";

function App() {
  return (
    <div className="h-screen">
      <GitHubButton />
      <GraphView data={data} />
    </div>
  );
}

export default App;
