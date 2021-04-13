const TwoColumnLayoutTwo = props => {
    return (
        <div className={`${props.style} py-24`}>
            <div className="flex flex-col space-x-0 lg:space-x-14 lg:flex-row m-auto justify-between items-center max-w-7xl">
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