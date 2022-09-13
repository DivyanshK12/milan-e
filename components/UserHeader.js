export const UserHeader = (props) => {
    return (
        <>
            <div className="flex flex-col items-center space-x-4 py-2">
                <img className="w-16 h-16 rounded-full" src={props.src} alt="" referrerPolicy="no-referrer"/>
                    <div className="text-white">
                        <div>{props.name}</div>
                    </div>
            </div>
        </>
    )
}
