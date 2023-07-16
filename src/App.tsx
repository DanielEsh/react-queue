import './App.css'
import { FormMessage } from './components/form-message'
import { QueueContainer } from './components/queue-container'
import { $store } from "./store"
import { useStore } from 'effector-react'

import { QueueContextProvider } from './components/queue-context'

function App() {
  const { queue } = useStore($store)

  return (
    <QueueContextProvider>
      <div className="app">
        <div>
          <FormMessage />
          <div>
            <span>Всего элементов в очереди: {queue.length}</span>
          </div>
        </div>

        <div className="app-queue">
          <QueueContainer />
        </div>
      </div>
    </QueueContextProvider>

  )
}

export default App
