import { useFieldContext } from '../hooks/form-context'
import { FieldInfo } from './field-info'


export default function TextField({ label, isLongText }: { label: string, isLongText?: boolean }) {
    const field = useFieldContext<string>()
    const style = "w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-500"

    return (
        <div>
            <label>
                <h1 className='font-bold  '>{label}</h1>
                {isLongText ?
                    <textarea
                        value={field.state.value}
                        className={style}
                        onChange={(e) => field.handleChange(e.target.value)}
                    />
                    :
                    <input
                        value={field.state.value}
                        className={style}
                        onChange={(e) => field.handleChange(e.target.value)}
                    />

                }
            </label>
            <FieldInfo field={field} />
        </div>
    )
}