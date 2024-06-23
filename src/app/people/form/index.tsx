import { SelectInput } from '@/components/SelectInput';
import { Input } from '@/components/ui/input';
import { FormProps } from '@/types/FormProps';

function Form(props: FormProps) {
    const {
        errors,
        register,
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
                placeholder="CPF/CNPJ"
                label="Informe o CPF/CNPJ"
                errorMessage={errors.cpfCnpj?.message}
                {...register('cpfCnpj')}
            />
            <Input
                placeholder="Cidade"
                label="Informe a cidade"
                errorMessage={errors.city?.message}
                {...register('city')}
            />
            <Input
                placeholder="Estado"
                label="Informe o estado"
                errorMessage={errors.state?.message}
                {...register('state')}
            />
            <SelectInput
                label="Selecione o tipo"
                options={[
                    { label: 'Cliente', value: 0 },
                    { label: 'Fornecedor', value: 1 }
                ]}
                register={register('type')}
                initialValue={item?.type}
                errorMessage={errors.type?.message}
            />
        </>
    )
}

export default Form