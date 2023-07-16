import {useContext} from "react"
import { QueueItem } from "./queue-item"
import { QueueContext } from "./queue-context.tsx";

export interface QueueItem {
    id: number,
    message: string
}

export const QueueContainer = () => {
    const {state, removeQueueItem} = useContext(QueueContext);

    return (
        <div className="queue-container">
            <ul className="queue-list">
                {state.map(({ id, message }) => (
                    <QueueItem
                        key={id}
                        onRemove={() => removeQueueItem(id)}
                    >
                        {message}
                    </QueueItem>
                ))}
            </ul>
        </div>
    )
}