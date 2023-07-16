import { useEffect, useRef, CSSProperties } from "react"
import { QueueItem as QueueItemType } from './queue-context';
interface Props {
    item: QueueItemType
    onRemove: () => void
}

interface Styles extends CSSProperties {
    '--duration': string;
}

export const QueueItem = ({ item, onRemove }: Props) => {
    const {message, autoClose, duration} = item;

    const animationStyles: Styles = {
        '--duration': `${duration}s`,
    }

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
            hideTimeout.current = window.setTimeout(handleHide, duration * 1000)
        }
        
    }

    useEffect(() => {
        handleDelayedHide()

        return cancelDelayedHide
    }, [autoClose, duration])

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
                    <div className="progress-bar" style={animationStyles}></div>
                )
            }
        </li>
    )
}