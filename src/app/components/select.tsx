import { useFieldContext } from "../hooks/form-context"
import { FieldInfo } from "./field-info"

const Colors = [
    { value: "white", label: "Blanc" },
    { value: "black", label: "Noir" },
    { value: "gray", label: "Gris" },
    { value: "blue", label: "Bleu" },
    { value: "red", label: "Rouge" },
]

export default function SelectField({label}: { label: string }) {

    const field = useFieldContext<string>()

    return (
        <div>
            <label>
                <div>{label}</div>
                <select
                    value={field.state.value}
                    className="w-full border border-gray-300 rounded-md p-2"
                    onChange={(e) => field.handleChange(e.target.value)}
                >
                    <option value="">Selectionner une couleur</option>
                    {Colors.map((color, i) => (
                        <option key={`color-${i}_${color.value}`} value={color.value}>
                            {color.label}
                        </option>
                    ))}
                </select>
            </label>
         <FieldInfo field={field} />
        </div>
    )
}