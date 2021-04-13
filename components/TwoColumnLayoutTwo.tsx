const TwoColumnLayoutTwo = props => {
    return (
        <div className={`${props.style}`}>
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center max-w-7xl m-auto">
                <div className="w-full lg:w-3/6 px-14 2xl:px-0">
                    {props.child1}
                </div>
                <div className="w-full lg:w-3/6 px-14 2xl:px-0">
                    {props.child2}
                </div>
            </div>
        </div>
    )
}

export default TwoColumnLayoutTwo