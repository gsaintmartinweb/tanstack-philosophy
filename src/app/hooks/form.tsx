import { createFormHook } from '@tanstack/react-form'
import TextField from '../components/textfield'
import { fieldContext, formContext } from './form-context'
import NumberField from '../components/numberfield'
import SelectField from '../components/select';
import { SubscribeButton } from '../components/submit-button';



export const { useAppForm, withForm } = createFormHook({
    fieldComponents: {
        TextField,
        NumberField,
        SelectField
    },
    formComponents: {
        SubscribeButton,
    },
    fieldContext,
    formContext,
})