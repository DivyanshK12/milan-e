import { Switch } from './Switch';
import { useState } from 'react';
import { dayEnum, getMeal } from '../lib/days';
import MealForm from '../components/MealForm';

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
        passedData = hallData[1][day].Breakfast;
    }

    passedData.forEach((item) => {
        mealForm[item] = "0";
    });

    return (
        <>
            <div className="flex flex-row items-center justify-center">
                <i className='px-2'>LDH</i>
                <Switch isOn={switchValue} handleToggle={() => switchSetValue(!switchValue)} onColor='#6ee7b7' />
                <i className='px-2'>UDH</i>
                <button type="submit" className="inline-block px-5 mx-5 py-3 bg-emerald-300 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-emerald-400 hover:shadow-lg focus:bg-emerald-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-500 active:shadow-lg transition duration-150 ease-in-out" form="meal-rating-form">
                    Submit
                </button>
            </div>
            <MealForm formId="meal-rating-form" items={passedData} hall={switchValue ? 'UDH' : 'LDH'} meal={meal} date={date} mealForm={mealForm}  />
        </>
    )
}
// props.data gives the menu data