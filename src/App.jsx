import "./App.css";
import LeftPanel from "./components/LeftPanel";
import NavBar from "./components/NavBar";
import RightPanel from "./components/RightPanel";

function App() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center w-full">
        <div className="border-2 border-solid border-slate-500/30 min-h-[84vh] w-full mt-8 mx-8">
          <div className="flex h-full">
            <div className="w-1/2">
              <LeftPanel />
            </div>
            <div className="w-1/2 border-2 border-amber-900 overflow-visible">
              <RightPanel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
