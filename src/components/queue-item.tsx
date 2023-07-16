import { ReactNode, useCallback, useEffect, useRef } from "react"

interface Props {
    children: ReactNode
    onRemove: () => void
}

export const QueueItem = ({ children, onRemove }: Props) => {
    const hideTimeout = useRef(0)

    const cancelDelayedHide = () => {
        clearTimeout(hideTimeout.current)
    }

    // const handleHide = useCallback(() => {
    //     console.log('HIDE')
    //     onRemove()
    //     cancelDelayedHide()
    // }, [onRemove])

    // const startTimer = useCallback(() => {
    //     hideTimeout.current = window.setTimeout(handleHide, 5_000)
    //   }, [handleHide]);

    // useEffect(() => {
    //     console.log('RERENDER')
    //     startTimer()

    //     return cancelDelayedHide
    // }, [startTimer])


    const handleHide = () => {
        console.log('HIDE')
        onRemove()
        cancelDelayedHide()
    }

    const startTimer = () => {
        hideTimeout.current = window.setTimeout(handleHide, 5_000)
    }

    useEffect(() => {
        console.log('RERENDER')
        startTimer()

        return cancelDelayedHide
    }, [])

    return (
        <li className="queue-item">
            <div>
                <span className="queue-item__text">{children}</span>
            </div>

            <div>
                <button onClick={onRemove}>
                    X
                </button>
            </div>

            <div className="progress-bar"></div>
        </li>
    )
}