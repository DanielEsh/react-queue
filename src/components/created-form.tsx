import { ChangeEvent, FormEvent, useState, useContext } from "react"
import { QueueContext } from "./queue-context.tsx";

export const CreatedForm = () => {
    const { addQueueItem } = useContext(QueueContext);

    const formDefaultValues = {
        message: '',
        checkbox: true,
        duration: '',
    }

    const [formValues, setFormValues] = useState(formDefaultValues)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name , value, type, checked } = event.target
        const newValue = type === 'checkbox' ? checked : value;

        setFormValues({
            ...formValues,
            [name]: newValue,
        })
    }

    

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        addQueueItem({
            id: Date.now(),
            message: formValues.message,
            autoClose: formValues.checkbox,
            duration: Number(formValues.duration),
        })

        setFormValues(formDefaultValues)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <span>Message</span>
                    <input 
                        type="text"
                        name="message" 
                        value={formValues.message} 
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div>
                <label>
                    <span>AutoClose</span>
                    <input 
                        type="checkbox"
                        name="checkbox" 
                        checked={formValues.checkbox} 
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div>
                <label>
                    <span>Duration</span>
                    <input 
                        type="text"
                        name="duration" 
                        value={formValues.duration} 
                        onChange={handleChange}
                    />
                </label>
            </div>

            <button type="submit">submit</button>
        </form>
    )
}