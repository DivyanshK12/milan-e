export const MenuTable = (props) => {
    return (
        <>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="table-fixed max-w-md w-80">
                                <thead className="border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Items
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="w-4">
                                    {props.data.map((item, index) => {
                                        return (
                                            <tr key={index} className="border-b">
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    {item}
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