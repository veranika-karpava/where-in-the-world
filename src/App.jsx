
import ModeContextProvider from './store/mode-context.jsx';

import AppWrapper from './components/AppWrapper.jsx';

function App() {

  return (
    <ModeContextProvider>
      <AppWrapper />
    </ModeContextProvider>
  )
}

export default App;
