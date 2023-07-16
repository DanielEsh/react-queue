import { ChangeEvent, FormEvent, useState } from "react"
import { addItem } from '../store';

export const FormMessage = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await addItem({
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