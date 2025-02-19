import './App.css'

function App() {
  return (
    <div>
      <header className='flex items-center w-24 h-24 border border-solid border-white-600 w-auto'>
        <h1 className='font-semibold w-2xl m-0 italic'>~ Sprig's Blog ~</h1>
      </header>
      <p className='text-blue-600'>test</p>
      <div className='w-90% h-auto border border-solid border-white-600' id='previews'>
        <div>
          <img src='00048.png'></img>
          <h2>Title</h2>
          <p>Text</p>
        </div>
      </div>
    </div>
  );
}

export default App
