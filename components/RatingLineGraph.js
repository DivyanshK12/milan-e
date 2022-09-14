import React from 'react';
import plotly from 'plotly.js/dist/plotly';
import createPlotComponent from 'react-plotly.js/factory';

const Plot = createPlotComponent(plotly);

export const LineChart = (props) => {
    let dataFetch = async () => {
        let countRes = await fetch(`/api/demo/rating`, { method: 'GET' });
        let resData = await countRes.json();
        return resData;
    }
    let [data, setData] = React.useState([{}, {}]);
    let [ldh, setLDH] = React.useState([{}, {}]);
    let [udh, setUDH] = React.useState([{}, {}]);

    let ldhLayout = {title: 'LDH', xaxis: {title: 'Date'}, yaxis: {title: 'Count'}};
    let udhLayout = {title: 'UDH', xaxis: {title: 'Date'}, yaxis: {title: 'Count'}};

    dataFetch().then((res) => {
        setData(res.data);
        return res.data;
    }).then((resdata) => {
        setLDH(resdata.data.filter((item) => item.hall === 'LDH'));
        setUDH(resdata.data.filter((item) => item.hall === 'UDH'));
    });

    return (
        <>
            <Plot
                data={[
                    {
                        type: 'scatter',
                        mode: 'lines+points',
                        x: ldh.filter((d) => d.meal === 'Breakfast').map((d) => d.date),
                        y: ldh.filter((d) => d.meal === 'Breakfast').map((d) => d.rating),
                        marker: { color: 'red' },
                        name: 'Breakfast',
                    },
                    {
                        type: 'scatter',
                        mode: 'lines+points',
                        x: ldh.filter((d) => d.meal === 'Lunch').map((d) => d.date),
                        y: ldh.filter((d) => d.meal === 'Lunch').map((d) => d.rating),
                        marker: { color: 'blue' },
                        name: 'Lunch',
                    },
                    {
                        type: 'scatter',
                        mode: 'lines+points',
                        x: ldh.filter((d) => d.meal === 'Dinner').map((d) => d.date),
                        y: ldh.filter((d) => d.meal === 'Dinner').map((d) => d.rating),
                        marker: { color: 'green' },
                        name: 'Dinner',
                    },
                ]}
                layout={ldhLayout}
      />
            <Plot
                data={[
                    {
                        type: 'scatter',
                        mode: 'lines+points',
                        x: udh.filter((d) => d.meal === 'Breakfast').map((d) => d.date),
                        y: udh.filter((d) => d.meal === 'Breakfast').map((d) => d.rating),
                        marker: { color: 'red' },
                        name: 'Breakfast',
                    },
                    {
                        type: 'scatter',
                        mode: 'lines+points',
                        x: udh.filter((d) => d.meal === 'Lunch').map((d) => d.date),
                        y: udh.filter((d) => d.meal === 'Lunch').map((d) => d.rating),
                        marker: { color: 'blue' },
                        name: 'Lunch',
                    },
                    {
                        type: 'scatter',
                        mode: 'lines+points',
                        x: udh.filter((d) => d.meal === 'Dinner').map((d) => d.date),
                        y: udh.filter((d) => d.meal === 'Dinner').map((d) => d.rating),
                        marker: { color: 'green' },
                        name: 'Dinner',
                    },
                ]}
                layout={udhLayout}
            />
        </>
    )
}