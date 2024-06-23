import ComboBoxInput from '@/components/ComboBoxInput';
import { SelectInput } from '@/components/SelectInput';
import { Input } from '@/components/ui/input';
import { FormProps } from '@/types/FormProps';

function Form(props: FormProps) {
    const {
        errors,
        register,
        setValue,
        item
    } = props

    return (
        <>
            <Input
                placeholder="Nome"
                label="Informe o nome"
                errorMessage={errors.name?.message}
                {...register('name')}
            />
            <Input
                placeholder="Preço de compra"
                label="Informe o preço de compra"
                type='number'
                errorMessage={errors.purchasePrice?.message}
                {...register('purchasePrice')}
            />
            <Input
                placeholder="Preço de venda"
                label="Informe o preço de venda"
                type='number'
                errorMessage={errors.sellingPrice?.message}
                {...register('sellingPrice')}
            />
            <SelectInput
                label="Tipo"
                options={[
                    { label: 'Bens', value: 0 },
                    { label: 'Produtos', value: 1 }
                ]}
                register={register('type')}
                initialValue={item?.type}
                errorMessage={errors.type?.message}
            />
            <ComboBoxInput
                endpoint='accounts'
                label='Conta Contábil'
                register={register('accountId')}
                errorMessage={errors.accountId?.message}
                setValue={setValue}
                item={item}
            />
        </>
    )
}

export default Form