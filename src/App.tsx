import './App.css'
import { Aside } from './components/aside'
import { QueueContainer } from './components/queue-container'

import { QueueContextProvider } from './components/queue-context'

function App() {
  return (
    <QueueContextProvider>
      <div className="app">
        <Aside />

        <div className="app-queue">
          <QueueContainer />
        </div>
      </div>
    </QueueContextProvider>

  )
}

export default App
