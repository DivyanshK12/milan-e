export const Slider = (props) => {
    return (
        <>
            <input type="range" min="0" max="4" className="range accent-emerald-300" step="1" defaultValue="0" name={props.itemName} onChange={props.changeFn}/>
            <div className="w-full flex justify-between text-xs px-1">
                <span>0</span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
            </div>
        </>
    )
}