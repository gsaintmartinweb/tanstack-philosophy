import { useFormContext } from "../hooks/form-context";
import { Button } from "./button";

export function SubscribeButton({ label }: { label: string }) {
    const form = useFormContext(); // Access the form context

    return (
        <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
            {([canSubmit, isSubmitting]) => (
                <Button disabled={!canSubmit || isSubmitting} variant="primary"  >{label}</Button>)}
        </form.Subscribe>
    );
}