import { Store, createEffect, createEvent, createStore, forward, sample } from "effector"

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

const LIMIT = 4;

export const add = createEvent<QueueItem>()
export const update = createEvent<UpdateParams>()

export const $store = createStore<QueueStore>({
    queue: [],
    stack: initialValues,
})

$store.on(update, (store, fn) => {
    const results = fn([...store.stack, ...store.queue]);

    return {
        stack: results.slice(0, LIMIT),
        queue: results.slice(LIMIT),
    };
})

$store.on(add, (store, item) => {
    const results = [...store.stack, ...store.queue, item]

    return {
        stack: results.slice(0, LIMIT),
        queue: results.slice(LIMIT),
    }
})
