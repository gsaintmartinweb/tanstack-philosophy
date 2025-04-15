import { useFieldContext } from "../hooks/form-context";
import { FieldInfo } from "./field-info";

export default function NumberField({ label }: { label: string }) {
    const field = useFieldContext<number>()

    return (
        <div>
            <label>
                <h1 className="font-bold">{label}</h1>
                <input
                    value={field.state.value}
                    className="w-full border border-gray-300 rounded-md p-2"
                    onChange={(e) => field.handleChange(Number(e.target.value))}
                />
            </label>
            <FieldInfo field={field} />
        </div>
    )


}