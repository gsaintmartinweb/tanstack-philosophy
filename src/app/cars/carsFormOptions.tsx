import { formOptions } from "@tanstack/react-form";
import { z } from "zod";

// Define the Zod schema
export const carSchema = z.object({
    brand: z.string().min(2, 'Brand name is required').nonempty(),
    model: z.string().min(1, 'Model name is required'),
    year: z.number().min(1886, 'Year is required'),
    color: z.string().min(1, 'Color is required'),
    price: z.number().min(1, 'Price is required'),
    performance: z.object({
        horsepower: z.number().min(1, 'Horsepower is required'),
        torque: z.number().min(1, 'Torque is required'),
        zerotohundred: z.number().min(1, 'Zero to hundred is required')
    }),
    technicalCaracteristics: z.string().min(1, 'Technical characteristics are required'),
});


export const carsFormOptions = formOptions({
    defaultValues: {
        brand: "",
        model: "",
        year: 1886,
        color: "",
        price: 0,
        performance: {
            horsepower: 0,
            torque: 0,
            zerotohundred: 0,
        },
        technicalCaracteristics: ""
    },
    validators: { onChange: carSchema },
});


