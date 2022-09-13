import { Slider } from './Slider'

export const MenuFormTable = (props) => {
    return (
        <>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="table-fixed max-w-md w-auto">
                                <thead className="border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Item
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Rating
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="w-full">
                                    {props.items.map((item, index) => {
                                        return (
                                            <tr key={index} className="border-b">
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    {item}
                                                </td>
                                                <td className="px-3 py-1">
                                                    <Slider itemName={item} changeFn={props.changeFn}/>
                                                </td>
                                            </tr>
                                        )})
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}