import ComboBoxInput from '@/components/ComboBoxInput';
import { SelectInput } from '@/components/SelectInput';
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
            <SelectInput
                label="Operação"
                options={[
                    { label: 'À vista', value: 0 },
                    { label: 'À prazo', value: 1 }
                ]}
                register={register('operation')}
                initialValue={item?.operation}
                errorMessage={errors.operation?.message}
            />
            <SelectInput
                label="Tipo"
                options={[
                    { label: 'Compra', value: 0 },
                    { label: 'Venda', value: 1 }
                ]}
                register={register('signal')}
                initialValue={item?.signal}
                errorMessage={errors.signal?.message}
            />
            <ComboBoxInput
                endpoint='people'
                label='Cliente/Fornecedor'
                register={register('personId')}
                errorMessage={errors.personId?.message}
                setValue={setValue}
                item={item}
            />
            <ComboBoxInput
                endpoint='assets'
                label='Bem/Produto'
                register={register('assetId')}
                errorMessage={errors.assetId?.message}
                setValue={setValue}
                item={item}
            />
        </>
    )
}

export default Form