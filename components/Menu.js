import { Hall } from './Hall';
import { Switch } from './Switch';
import { useState } from 'react';
import { MenuTable } from './MenuTable';
import { dayEnum, getMeal } from '../lib/days';

export const Menu = (props) => {
    const data = props.data;
    const [switchValue, switchSetValue] = useState(false);
    const date = new Date();
    const day = dayEnum[date.getDay()];
    const time = getMeal(date.getHours());
    let hallData = Object.values(data);
    // 7-11 breakfast, 12-3 lunch, 7-10 dinner
    console.log(hallData);

    let passedData = [];

    if(switchValue && hallData.length > 0) {
        passedData = hallData[0][day][time];
    }
    else if (hallData.length > 0){
       passedData = hallData[1][day].Lunch;
    }
    return (
        <>
            <div className="flex flex-row items-center justify-center">
                <i className='px-2'>LDH</i>
                <Switch isOn={switchValue} handleToggle={() => switchSetValue(!switchValue)} onColor='#06D6A0' />
                <i className='px-2'>UDH</i>
            </div>
            <div className='columns-2'>
                <MenuTable className="w-64" data={passedData} />
                {/* Can have form as the second value below */}
                <MenuTable className="w-64" data={passedData} />
            </div>
        </>
    )
}
// props.data gives the menu data