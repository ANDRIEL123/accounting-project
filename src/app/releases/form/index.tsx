import ComboBoxInput from '@/components/ComboBoxInput';
import { SelectInput } from '@/components/SelectInput';
import { Input } from '@/components/ui/input';
import { FormProps } from '@/types/FormProps';

function Form(props: FormProps) {
    const {
        errors,
        register,
        item,
        setValue
    } = props

    return (
        <>
            <ComboBoxInput
                endpoint='accounts'
                label='Conta Contábil'
                register={register('accountId')}
                errorMessage={errors.accountId?.message}
                setValue={setValue}
                item={item}
            />
            <Input
                placeholder="Valor total"
                label="Informe o valor do lançamento"
                type='number'
                errorMessage={errors.totalAmount?.message}
                {...register('totalAmount')}
            />
            <SelectInput
                label="Selecione o tipo"
                options={[
                    { label: 'Débito', value: 0 },
                    { label: 'Crédito', value: 1 }
                ]}
                register={register('type')}
                initialValue={item?.type}
                errorMessage={errors.type?.message}
            />
        </>
    )
}

export default Form