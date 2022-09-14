import Barcode from "react-barcode";
import { useState } from "react";
import { getMeal } from '../lib/days';
import { pushCount } from "../lib/pushCount";
import { useUser } from '@auth0/nextjs-auth0';

export const BarCodeButton = (props) => {

    const [showBarcode, setShowBarcode] = useState(false);
    const [btn, setBtn] = useState(false);

    let curDate = new Date();
    let newMeal = getMeal(curDate.getHours());
    let oldMeal = sessionStorage.getItem("meal");
    console.log(`${oldMeal} ${newMeal}`);

    if (oldMeal != newMeal && oldMeal != null) {
        setShowBarcode(false);
        setBtn(false);
    }

    function toggleBarcode() {
        setShowBarcode(true);
        setBtn(true);
        sessionStorage.setItem("meal", newMeal);
        pushCount(curDate, props.hall, newMeal).then((res) => {console.log("Logged meal")});
    }

    return (
        <>
            <button onClick={toggleBarcode} disabled={btn ? btn : ""} className="inline-block px-5 my-3 mx-3 py-3 bg-emerald-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-emerald-500 hover:shadow-lg focus:bg-emerald-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-600 active:shadow-lg transition duration-150 ease-in-out">Generate</button>
            <div style={{
                display: showBarcode ? "block" : "none"
            }}>
                <Barcode
                    value={props.value}
                    height={60}
                    width={1}
                    format={"CODE39"}
                    fontOptions="600"
                    textMargin={4}
                    margin={5}
                    background="#ffffff"
                />
            </div>
            <hr className="my-2" />
        </>
    );
}