import './App.css'

function App() {
  return (
    <div>
      <header className='flex items-center w-24 h-24 border border-solid border-white-600 w-auto'>
        <h1 className='font-semibold w-2xl m-0 italic'>~ Sprig's Blog ~</h1>
      </header>
      <hr className='p-4'></hr>
      <div className='w-90% h-auto border border-solid border-white-600' id='previews'>
        <div className='p-4'>
          <div className='flex p-4 border border-solid border-white-600 hover:bg-gray-950' id='preview-1'>
            <img className='max-h-40 pr-4' src='00048.png'></img>
            <div className='text-left'>
              <h2 className='text-3xl font-semibold'>TitleTitleTitleTitleTitle</h2>
              <p>Text</p>
              <a>Tag</a>
            </div>
          </div>
          <div className='flex p-4 border border-solid border-white-600 hover:bg-gray-950' id='preview-2'>
            <img className='max-h-40 pr-4' src='00048.png'></img>
            <div className='text-left'>
              <h2 className='text-3xl font-semibold'>TitleTitleTitleTitleTitle</h2>
              <p>Text</p>
              <a>Tag</a>
            </div>
          </div>
          <div className='flex p-4 border border-solid border-white-600 hover:bg-gray-950' id='preview-3'>
            <img className='max-h-40 pr-4' src='00048.png'></img>
            <div className='text-left'>
              <h2 className='text-3xl font-semibold'>TitleTitleTitleTitleTitle</h2>
              <p>Text</p>
              <a>Tag</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
