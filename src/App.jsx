import "./App.css";
import LeftPanel from "./components/LeftPanel";
import NavBar from "./components/NavBar";
import RightPanel from "./components/RightPanel";

function App() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center w-full">
        <div className=" min-h-[84vh] w-full mt-8 mx-8">
          <div className="flex h-full">
            <div className="w-full md:w-1/2 ">
              <LeftPanel />
            </div>
            <div className="hidden md:block md:w-1/2  overflow-visible">
              <RightPanel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
