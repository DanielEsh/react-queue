import './App.css'
import { FormMessage } from './components/form-message'
import { QueueContainer } from './components/queue-container'

import { useStore } from 'effector-react'

import { QueueContextProvider } from './components/queue-context'


/**
 * features
 * Создание новых элементов
 * Немедленное удаление элементов
 * 
 * Одновременное закрытие элементов, которые были созданны одновременно
 * Независимое закрытие элементов по таймауту
 * 
 * 
 */

function App() {

  return (
    <QueueContextProvider>
      <div className="app">
        <div>
          <FormMessage />
        </div>

        <div className="app-queue">
          <QueueContainer />
        </div>
      </div>
    </QueueContextProvider>

  )
}

export default App
