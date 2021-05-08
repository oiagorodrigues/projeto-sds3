import axios from 'axios'
import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { SaleSuccess } from 'types/Sale'
import { round } from 'utils/format'
import { BASE_URL } from 'utils/requests'

interface Series {
    name: string
    data: number[]
}

interface Labels {
    categories: string[]
}

interface ChartData {
    labels: Labels
    series: Series[]
}

const options = {
    plotOptions: {
        bar: {
            horizontal: true,
        },
    },
}

const DEFAULT_CHART_DATA: ChartData = {
    labels: {
        categories: [],
    },
    series: [
        {
            name: '',
            data: [],
        },
    ],
}

const BarChart = () => {
    const [chartData, setChartData] = useState<ChartData>(DEFAULT_CHART_DATA)

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/success-by-seller`).then(response => {
            const data = response.data as SaleSuccess[]
            setChartData({
                labels: {
                    categories: data.map(x => x.sellerName),
                },
                series: [
                    {
                        name: '% Success',
                        data: data.map(x =>
                            round((100.0 * x.deals) / x.visited, 1)
                        ),
                    },
                ],
            })
        })
    }, [])

    return (
        <Chart
            options={{ ...options, xaxis: chartData.labels }}
            series={chartData.series}
            type='bar'
            height='240'
        />
    )
}

export default BarChart
