import { ChangeEvent, FormEvent, useState, useContext } from "react"
import { QueueContext } from "./queue-context.tsx";

export const FormMessage = () => {
    const { addQueueItem } = useContext(QueueContext);

    const [inputValue, setInputValue] = useState('');
    const [checkBoxValue, setCheckbox] = useState(true);
    const [durationValue, setDuration] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCheckbox(event.target.checked);
    }

    const handleDurationChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDuration(event.target.value);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addQueueItem({
            id: Date.now(),
            message: inputValue,
            autoClose: Boolean(checkBoxValue),
            duration: Number(durationValue),
        })
        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange} />

            <div>
                <label>
                    <span>AutoClose</span>
                    <input type="checkbox" checked={checkBoxValue} onChange={handleCheckboxChange} />
                </label>
            </div>

            <div>
                <label>
                    <span>Duration</span>
                    <input type="text" value={durationValue} onChange={handleDurationChange} />
                </label>
            </div>

            <button type="submit">submit</button>
        </form>
    )
}