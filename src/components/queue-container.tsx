
import { QueueItem } from "./queue-item"
import { state, removeItem } from '../store';
import { useStore } from "effector-react";

export interface QueueItem {
    id: number,
    message: string
}

export const QueueContainer = () => {

    const store = useStore(state);

    const removeQueueItem = async (id: number) => {
        await removeItem(id)
    }

    return (
        <div className="queue-container">
            <ul className="queue-list">
                {store.map(({ id, message }, index) => (
                    <QueueItem
                        key={index}
                        onRemove={() => removeQueueItem(id)}
                    >
                        {message}
                    </QueueItem>
                ))}
            </ul>
        </div>
    )
}