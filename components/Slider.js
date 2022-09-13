export const Slider = (props) => {
    return (
        <>
            <input type="range" min="0" max="4" className="range accent-emerald-300" step="1" defaultValue="0" name={props.itemName} onChange={props.changeFn}/>
            <div className="w-full flex justify-between text-xs px-1">
                <span className="text-white">0</span>
                <span className="text-white">1</span>
                <span className="text-white">2</span>
                <span className="text-white">3</span>
                <span className="text-white">4</span>
            </div>
        </>
    )
}