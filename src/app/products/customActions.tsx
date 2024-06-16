import { SelectInput } from "@/components/SelectInput";
import { Button } from "@/components/ui/button";
import { useDialogContext } from "@/contexts/Dialog";
import { formatCurrency } from "@/utils/formatters";
import { Calculate, Sell } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { toNumber } from "lodash";

type CustomActionsProps = {
    item: any
}

function CustomActions(props: CustomActionsProps) {
    const { item } = props
    const { openDialog } = useDialogContext()
    let typeSell = 0

    return (
        <>
            <Tooltip title="Cálculos">
                <Calculate
                    className="hover:cursor-pointer ml-4"
                    onClick={() => {
                        openDialog({
                            dialogContent: (
                                <>
                                    <h1 className="text-lg">Custo: {formatCurrency(item.cost)}</h1>
                                    <h1 className="text-lg">Lucro: {formatCurrency(item.profit)}</h1>
                                </>
                            ),
                            title: 'Cálculos',
                            withButtonConfirm: false
                        })
                    }}
                />
            </Tooltip>
            <Tooltip title="Vender">
                <Sell
                    className="hover:cursor-pointer ml-4"
                    onClick={() => {
                        openDialog({
                            dialogContent: (
                                <>
                                    <SelectInput
                                        label="Selecione o tipo"
                                        options={[
                                            { label: 'À Vista', value: 0 },
                                            { label: 'À Prazo', value: 1 }
                                        ]}
                                        onChange={(e: any) => {
                                            const valueHandle = toNumber(e.target.value)
                                            typeSell = valueHandle
                                        }}
                                        initialValue={typeSell}
                                    />
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => openDialog({
                                            title: "Resultado da venda do produto",
                                            dialogContent: <h1 className="text-green-600">Produto {item.name} foi vendido {typeSell === 0 ? 'à vista' : 'à prazo'} com sucesso!</h1>,
                                            withButtonConfirm: false
                                        })}
                                    >
                                        Vender
                                    </Button>
                                </>
                            ),
                            title: `Venda do produto ${item.name}`,
                            withButtonConfirm: false
                        })
                    }}
                />
            </Tooltip>
        </>
    )
}

export default CustomActions;
