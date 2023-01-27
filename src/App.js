import Button from "./Components/Button";
import Logo from "./Components/Logo";


function App() {

  return (
    <div className="w-screen h-screen bg-background flex justify-between items-start">
      <div></div>
      <div className="flex flex-col justify-center items-center w-min space-y-3 pt-4 pr-8">
        <Logo />
        <Button type="normal" message="New Course" function={() => alert('test')}></Button>
        <Button type="normal" message="New School Subject" function={() => alert('test')}></Button>
      </div>
    </div>
  );
}

export default App;
