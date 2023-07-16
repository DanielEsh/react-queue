import { ReactNode, createContext } from "react";
import { useQueue } from "../hooks/useQueue";

export interface QueueItem {
    id: number,
    message: string
}

export interface Props {
    children: ReactNode
}

export interface QueueContextType {
    state: QueueItem[]
    queue: QueueItem[]
    addQueueItem?: (notification: QueueItem) => number;
    removeQueueItem?: (id: number) => void;
}

export const QueueContext = createContext<QueueContextType>({
    state: [],
    queue: [],
});

export const QueueContextProvider = ({children}: Props) => {
    const { state, queue, update } = useQueue<QueueItem>({
        initialValues: [
            { id: 1, message: 'first' },
            { id: 2, message: 'two' }
        ],
        limit: 4,
    });

    const removeQueueItem = (id: number) => {
        console.log('REMOVE', id);
        update((notifications) =>
            notifications.filter((notification) => {
                console.log('notification', notification, id)
                if (notification.id === id) {
                    return false;
                }

                return true;
            })
        );
    };

    const addQueueItem = (notification: QueueItem) => {
        const id = notification.id;
    
        update((notifications) => {
          if (notification.id && notifications.some((n) => n.id === notification.id)) {
            return notifications;
          }
    
          return [...notifications, { ...notification, id }];
        });
    
        return id;
    };

    const value: QueueContextType = {
        state,
        queue,
        addQueueItem,
        removeQueueItem,
    }


    return (
        <QueueContext.Provider value={value}>
            {children}
        </QueueContext.Provider>
    )
}