import { useState } from 'react';
import Plot from "react-plotly.js";


export const CountLineGraph = (props) => {
    const data = props.data;

    const [udh, setUdh] = useState({
        type: "scatter",
        x: [],
        y: [],
    });

    const [ldh, setLdh] = useState({
        type: "scatter",
        x: [],
        y: [],
    });

    // Splitting based on LDH and UDH
    let ldhItems = [];
    let udhItems = [];
    data.forEach((item) => {
        if (item.hall == "LDH") {
            ldhItems.push(item);
        }
        else {
            udhItems.push(item)
        }
    }
    )

    // Sorting based on time
    ldhItems.sort((a, b) => a.date > b.date);
    udhItems.sort((a, b) => a.date > b.date);

    // Populating the state (udh, ldh) handling plots
    ldhItems.forEach((item) => {
        ldh.x.push(item.date)
        ldh.y.push(item.count)
    });

    udhItems.forEach((item) => {
        udh.x.push(item.date)
        udh.y.push(item.count)
    });

    return (
        <>
            <Plot data={[udh, ldh]} />
        </>
    )
}