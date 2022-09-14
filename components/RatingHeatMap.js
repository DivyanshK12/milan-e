import { useState } from 'react';
import Plot from "react-plotly.js";

import { dayEnum, mealEnum, getWeek, getMeal } from "../utils/days";
import Switch from "./Switch";

export const RatingHeatMap = (props) => {
    const data = props.data;

    // Choosing between the halls
    const [switchValue, switchSetValue] = useState(false);    // False == LDH and true == UDH

    // Choosing which week to display
    const [currWeek, setCurrWeek] = useState(0);


    const [heatmapData, setHeatMapData] = useState({
        x: ["Breakfast", "Lunch", "Dinner"],  // Meal axis
        y: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],              // Date axis
        z: [],              // Rating axis
        type: "heatmap",
        hoverongaps: false
    });

    //// PARSING THE DATA ////

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

    // Splitting based on weeks
    ldhItems.forEach((item) => {
        let currDate = new Date(item.date);
        item.day = dayEnum[currDate.getDay]; // Call by reference or call by value?

    }
    )


    return (
        <>
            <div className="flex flex-row items-center justify-center">
                <i className='px-2 text-emerald-300'>LDH</i>
                <Switch isOn={switchValue} handleToggle={() => switchSetValue(!switchValue)} onColor='#6ee7b7' />
                <i className='px-2 text-emerald-300'>UDH</i>
            </div>

            {
                <Plot data={
                    switchValue ?
                        "asd"   // LDH
                        :
                        ""      // UDH
                } />
            }
        </>
    )
}