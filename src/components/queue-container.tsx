import {useContext} from "react"
import { QueueItem } from "./queue-item"
import { QueueContext } from "./queue-context.tsx";

export const QueueContainer = () => {
    const {state, removeQueueItem} = useContext(QueueContext);

    return (
        <div className="queue-container">
            <ul className="queue-list">
                {state.map((item) => (
                    <QueueItem
                        key={item.id}
                        onRemove={() => removeQueueItem(item.id)}
                        item={item}
                    />
                ))}
            </ul>
        </div>
    )
}