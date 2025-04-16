import { createFormHook } from '@tanstack/react-form'
import { fieldContext, formContext } from './form-context'
import NumberField from '../components/numberfield'
import SelectField from '../components/select';
import { SubscribeButton } from '../components/submit-button';
import InputField from '../components/textfield';



export const { useAppForm, withForm } = createFormHook({
    fieldComponents: {
        InputField,
        NumberField,
        SelectField
    },
    formComponents: {
        SubscribeButton,
    },
    fieldContext,
    formContext,
})