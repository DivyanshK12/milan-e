import { Meal } from './Meal.js';
export const Hall = (props) => {
    return (
        <>
            <div>
               {Object.keys(props.data).map((item, index) => {
                    return (
                        <div key={index}>
                            <h3 style={{color:"blue"}}>{item}</h3>
                            <Meal data={Object.values(props.data).at(index)}/>
                        </div>
                    )
                })} 
            </div>
        </>
    );
}