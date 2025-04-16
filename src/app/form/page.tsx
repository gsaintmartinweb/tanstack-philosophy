"use client";
import { carsFormOptions } from "../cars/carsFormOptions";
import { useAppForm } from "../hooks/form";

function FormPage() {
    const form = useAppForm({
        ...carsFormOptions,
        onSubmit: ({ value }) => {
            console.log("Form submitted with values:", value);
            alert(JSON.stringify(value, null, 2));
        },
    }
    );


    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <form
                onSubmit={form.handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 text-cyan-800 text-shadow-cyan-600"
            >

                <form.AppField name="brand">
                    {(field) => <field.InputField label="Marque" type="text" />}
                </form.AppField>

                <form.AppField name="model">
                    {(field) => <field.InputField label="Modèle" type="text" />}
                </form.AppField>
                <form.AppField name="technicalCaracteristics">
                    {(field) => <field.InputField label="Caractéristiques techniques" type="text" isLongText />}
                </form.AppField>

                <form.AppField name="year">
                    {(field) => <field.InputField label="Date de première mise en circulation" type="number" />}
                </form.AppField>

                <form.AppField name="color">
                    {(field) => <field.SelectField label="Couleur" />}
                </form.AppField>

                <form.AppField name="price">
                    {(field) => <field.NumberField label="Prix" />}
                </form.AppField>

                <form.AppField name="performance.horsepower">
                    {(field) => <field.NumberField label="Puissance" />}
                </form.AppField>

                <form.AppField name="performance.torque">
                    {(field) => <field.NumberField label="Couple" />}
                </form.AppField>

                <form.AppField name="performance.zerotohundred">
                    {(field) => <field.NumberField label="0 à 100" />}
                </form.AppField>

                <form.AppForm>
                    <form.SubscribeButton label="Envoyer" />
                </form.AppForm>
            </form>
        </div>
    );
}

export default FormPage;