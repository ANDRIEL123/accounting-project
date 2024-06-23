import { httpGet } from "@/services"
import { formatCurrency } from "@/utils/formatters"
import { isEmpty, toString } from "lodash"
import { useEffect, useState } from "react"

export const PatrimonyBalanceReport = () => {
    const [data, setData] = useState<any[]>([])

    useEffect(() => {
        async function fetchData() {
            const response = await httpGet('Releases/GetPatrimonyBalance')

            setData(response);
        }

        fetchData()
    }, [])

    return (
        <div className="mt-5 flex justify-center">
            <table className="bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Conta
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Saldo
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className={`px-6 py-4 border-b border-gray-200 text-sm ${item.type === undefined ? 'font-bold' : ''}`}>
                                {item.accountName}
                            </td>
                            <td className={`px-6 py-4 border-b border-gray-200 text-sm ${item.type === undefined ? 'font-bold' : ''}`}>
                                {!isEmpty(toString(item.totalAmount)) ? formatCurrency(item.totalAmount) : null}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}