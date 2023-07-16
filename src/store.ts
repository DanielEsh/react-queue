import { createEffect, createEvent, createStore, sample } from "effector"

export interface QueueItem {
    id: number,
    message: string
}

interface QueueStore {
    queue: QueueItem[]
    stack: QueueItem[]
}

type UpdateParams = (item: QueueItem[]) => QueueItem[]

export const initialValues: QueueItem[] = [
    { id: 1, message: 'first' },
    { id: 2, message: 'two' }
]

export const state = createStore<QueueItem[]>(initialValues)

export const addItem = createEffect(async (item: QueueItem) => {
    await new Promise((resolve) => setTimeout(resolve, 0))
    return item;
})

export const removeItem = createEffect(async (id: number) => {
    await new Promise((resolve) => setTimeout(resolve, 0))
    return id;
})

state.on(addItem.doneData, (state, newItem) => [...state, newItem])
state.on(removeItem.doneData, (state, id) => state.filter(item => item.id !== id))

