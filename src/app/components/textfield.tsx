import { HTMLInputTypeAttribute } from 'react'
import { useFieldContext } from '../hooks/form-context'
import { FieldInfo } from './field-info'
import { Input } from './input'
import { CircleFadingPlus } from 'lucide-react'




export default function InputField({ label, type, isLongText }: { label: string, type: HTMLInputTypeAttribute | undefined, isLongText?: boolean }) {
    const field = useFieldContext<string | number>()
    const style = "w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-500"

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = type === "number" ? Number(e.target.value) : e.target.value
        field.handleChange(value)
    }

    return (
        <div>
            <Input.Field>
                <Input.Group>
                    <Input.Label>{label}</Input.Label>
                    <Input.Root value={field.state.value}
                        className={style}
                        type={type}
                        variantSize={isLongText ? "lg" : "md"}
                        onChange={handleChange}
                    />
                    <Input.RightElement className='flex items-center pt-6 '>
                        <CircleFadingPlus className='' />
                    </Input.RightElement>
                </Input.Group>

            </Input.Field>


            <FieldInfo field={field} />
        </div>
    )
}