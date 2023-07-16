import { ChangeEvent, FormEvent, useState, useContext } from "react"
import { QueueContext } from "./queue-context.tsx";

export const FormMessage = () => {
    const {addQueueItem} = useContext(QueueContext);

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addQueueItem({
            id: Date.now(),
            message: inputValue,
        })
        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button type="submit">submit</button>
        </form>
    )
}