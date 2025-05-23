"use client"

import { AnyFieldApi } from "@tanstack/react-form";
import { z } from "zod";
import { useAppForm } from "../hooks/form";

const ZodSchema = z.object({
    firstName: z
        .string()
        .min(3, '[Zod] You must have a length of at least 3')
        .startsWith('A', "[Zod] First name must start with 'A'"),
    lastName: z.string().min(3, '[Zod] You must have a length of at least 3'),
})

function FieldInfo({ field }: { field: AnyFieldApi }) {
    return (
        <>
            {field.state.meta.isTouched && field.state.meta.errors.length ? (
                <em>{field.state.meta.errors.map((err) => err.message).join(',')}</em>
            ) : null}
            {field.state.meta.isValidating ? 'Validating...' : null}
        </>
    )
}

export default function FormPage() {
    const form = useAppForm({
        defaultValues: {
            firstName: '',
            lastName: '',
        },
        validators: {
            onChange: ZodSchema,

        },
        onSubmit: async ({ value }) => {
            // Do something with form data
            console.log(value)
        },
    })


    return (
        <div>
            <h1>Standard Schema Form Example</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    form.handleSubmit()
                }}
            >
                <div>
                    {/* A type-safe field component*/}
                    <form.Field
                        name="firstName"
                        // eslint-disable-next-line react/no-children-prop
                        children={(field) => {
                            // Avoid hasty abstractions. Render props are great!
                            return (
                                <>
                                    <label htmlFor={field.name}>First Name:</label>
                                    <input
                                        id={field.name}
                                        name={field.name}
                                        value={field.state.value}
                                        onBlur={field.handleBlur}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                    />
                                    <FieldInfo field={field} />
                                </>
                            )
                        }}
                    />
                </div>
                <div>
                    <form.Field
                        name="lastName"
                        // eslint-disable-next-line react/no-children-prop
                        children={(field) => (
                            <>
                                <label htmlFor={field.name}>Last Name:</label>
                                <input
                                    id={field.name}
                                    name={field.name}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                                <FieldInfo field={field} />
                            </>
                        )}
                    />
                </div>
                <form.Subscribe
                    selector={(state) => [state.canSubmit, state.isSubmitting]}
                    // eslint-disable-next-line react/no-children-prop
                    children={([canSubmit, isSubmitting]) => (
                        <button type="submit" disabled={!canSubmit}>
                            {isSubmitting ? '...' : 'Submit'}
                        </button>
                    )}
                />
            </form>
        </div>
    )
}
