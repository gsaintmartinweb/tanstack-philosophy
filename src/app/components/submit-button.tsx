import { useFormContext } from "../hooks/form-context";

export function SubscribeButton({ label }: { label: string }) {
    const form = useFormContext(); // Access the form context

    return (
        <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
            {([canSubmit, isSubmitting]) => (
                <button
                    type="submit"
                    disabled={!canSubmit}
                    className={`px-4 py-2 rounded-md transition duration-300 ${canSubmit
                        ? 'bg-blue-500 text-white hover:bg-blue-600 hover:cursor-pointer' // valid
                        : 'bg-gray-400 text-white cursor-not-allowed' // not valid
                        }`}
                >
                    {isSubmitting ? '...' : label}
                </button>
            )}
        </form.Subscribe>
    );
}
