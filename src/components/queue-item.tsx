import { useEffect, useRef } from "react"
import { QueueItem as QueueItemType } from './queue-context';
interface Props {
    item: QueueItemType
    onRemove: () => void
}

export const QueueItem = ({ item, onRemove }: Props) => {
    const {message, autoClose} = item;

    const hideTimeout = useRef(0)

    const cancelDelayedHide = () => {
        clearTimeout(hideTimeout.current)
        hideTimeout.current = 0;
    }

    const handleHide = () => {
        console.log('HIDE')
        onRemove()
        cancelDelayedHide()
    }

    const handleDelayedHide = () => {
        if (autoClose) {
            hideTimeout.current = window.setTimeout(handleHide, 5_000)
        }
        
    }

    useEffect(() => {
        handleDelayedHide()

        return cancelDelayedHide
    }, [])

    return (
        <li 
            className="queue-item"
            onMouseEnter={cancelDelayedHide}
            onMouseLeave={handleDelayedHide}
        >
            <div>
                <span className="queue-item__text">{message}</span>
            </div>

            <div>
                <button onClick={onRemove}>
                    X
                </button>
            </div>

            {
                autoClose && (
                    <div className="progress-bar"></div>
                )
            }
        </li>
    )
}