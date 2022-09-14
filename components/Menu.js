import { Switch } from './Switch';
import { useState } from 'react';
import { dayEnum, getMeal } from '../lib/days';
import MealForm from '../components/MealForm';
import { BarCodeButton } from '../components/BarCodeButton';

export const Menu = (props) => {
    const data = props.data;
    const [switchValue, switchSetValue] = useState(false);
    const date = new Date();
    const day = dayEnum[date.getDay()];
    const meal = getMeal(date.getHours());
    let hallData = Object.values(data);
    // 7-11 breakfast, 12-3 lunch, 7-10 dinner

    let passedData = [];
    let mealForm = {};

    if (switchValue && hallData.length > 0) {
        passedData = hallData[0][day][meal];
    }
    else if (hallData.length > 0) {
        passedData = hallData[1][day].Lunch;
    }

    passedData.forEach((item) => {
        mealForm[item] = "0";
    });

    return (
        <>
            <BarCodeButton value={props.value} hall={switchValue ? 'UDH' : 'LDH'} />
            <div className="flex flex-row items-center justify-center">
                <i className='px-2 text-emerald-300'>LDH</i>
                <Switch isOn={switchValue} handleToggle={() => switchSetValue(!switchValue)} onColor='#6ee7b7' />
                <i className='px-2 text-emerald-300'>UDH</i>
                <button type="submit" className="inline-block px-5 mx-5 py-3 bg-emerald-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-emerald-500 hover:shadow-lg focus:bg-emerald-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-600 active:shadow-lg transition duration-150 ease-in-out" form="meal-rating-form">
                    Submit
                </button>
            </div>
            <MealForm formId="meal-rating-form" items={passedData} hall={switchValue ? 'UDH' : 'LDH'} meal={meal} date={date} mealForm={mealForm} />
        </>
    )
}
// props.data gives the menu data