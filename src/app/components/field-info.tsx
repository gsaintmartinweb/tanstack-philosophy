import { AnyFieldApi } from "@tanstack/react-form";
import { Input } from "./input";

export function FieldInfo({ field }: { field: AnyFieldApi }) {
    return (
        <>
            {field.state.meta.isTouched && field.state.meta.errors.length ? (
                <Input.Message error>{field.state.meta.errors.map((err) => err.message).join(',')}</Input.Message>
            ) : null}
            {field.state.meta.isValidating ? 'Validating...' : null}
        </>
    )
}
