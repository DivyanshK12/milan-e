import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import dynamic from 'next/dynamic'

const CountPage = () => {
    const DynamicPlot = dynamic(import('../components/CountLineGraph').then((mod) => mod.LineChart), {
        ssr: false
    }) // workaround for SSR

    return (
        <>
            <DynamicPlot />
        </>
    )
}
export default withPageAuthRequired(CountPage);