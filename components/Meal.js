export const Meal = (props) => {
    return (
        <>
            <div>
               {Object.keys(props.data).map((item, index) => {
                    return (
                        <div key={index}>
                            <h4 style={{color:"orange"}}>{item}</h4>
                            <p>{Object.values(props.data).at(index)}</p>
                        </div>
                    )
                })} 
            </div>
        </>
    );
}