import ComboBoxInput from '@/components/ComboBoxInput';
import { SelectInput } from '@/components/SelectInput';
import { Input } from '@/components/ui/input';
import { FormProps } from '@/types/FormProps';

function Form(props: FormProps) {
    const {
        errors,
        register,
        item,
        setValue,
        createMode
    } = props

    return (
        <>
            <Input
                placeholder="Código"
                label="Informe o código"
                errorMessage={errors.code?.message}
                {...register('code')}
            />
            <Input
                placeholder="Nome"
                label="Informe o nome"
                errorMessage={errors.name?.message}
                {...register('name')}
            />
            <SelectInput
                label="Selecione o tipo"
                options={[
                    { label: 'Ativo', value: 0 },
                    { label: 'Passivo', value: 1 },
                    { label: 'Patrimônio Líquido', value: 2 }
                ]}
                register={register('type')}
                initialValue={item?.type}
                errorMessage={errors.type?.message}
            />
            <SelectInput
                label="Selecione o tipo de circulante"
                options={[
                    { label: 'Ativo Circulante', value: 0 },
                    { label: 'Ativo não Circulante', value: 1 },
                    { label: 'Passivo Circulante', value: 2 },
                    { label: 'Passivo não Circulante', value: 3 }
                ]}
                register={register('current')}
                initialValue={item?.current}
                errorMessage={errors.current?.message}
            />
            {
                createMode || (item && item.matchAccountId) ? (
                    <ComboBoxInput
                        endpoint='accounts'
                        label='Conta Contábil de contra partida'
                        register={register('matchAccountId')}
                        errorMessage={errors.matchAccountId?.message}
                        setValue={setValue}
                        item={item}
                    />
                ) : null
            }
        </>
    )
}

export default Form