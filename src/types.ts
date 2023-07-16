export interface QueueItem {
    id: number
    message: string
    autoClose?: boolean
    duration?: number
}

export type CreatedQueueItem = Required<QueueItem>