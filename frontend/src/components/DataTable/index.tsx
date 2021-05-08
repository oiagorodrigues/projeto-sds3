import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { SalePage } from 'types/Sale'
import { formatLocalDate } from 'utils/format'
import { BASE_URL } from 'utils/requests'

type SaleResponse = AxiosResponse<SalePage>

const DEFAULT_PAGE_VALUES: SalePage = {
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0,
}

const DataTable = () => {
    const [page, setPage] = useState<SalePage>(DEFAULT_PAGE_VALUES)

    useEffect(() => {
        axios
            .get(`${BASE_URL}/sales?page=3&sort=seller`)
            .then(({ data }: SaleResponse) => setPage(data))
    }, [])

    return (
        <div className='table-responsive'>
            <table className='table table-striped table-sm'>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {page.content?.map(sale => (
                        <tr key={sale.id}>
                            <td>{formatLocalDate(sale.date, 'dd/MM/yyyy')}</td>
                            <td>{sale.seller.name}</td>
                            <td>{sale.visited}</td>
                            <td>{sale.deals}</td>
                            <td>R$ {sale.amount.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable
