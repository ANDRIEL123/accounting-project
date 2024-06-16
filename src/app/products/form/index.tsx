import { Input } from '@/components/ui/input';
import { FormChildrenProps } from '@/types/FormChildrenProps';

function Form(props: FormChildrenProps) {
    const {
        errors,
        register
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
                step="0.01"
                errorMessage={errors.purchasePrice?.message}
                {...register('purchasePrice')}
            />
            <Input
                placeholder="Preço de venda"
                label="Informe o preço de venda"
                type='number'
                step="0.01"
                errorMessage={errors.sellingPrice?.message}
                {...register('sellingPrice')}
            />
        </>
    )
}

export default Form