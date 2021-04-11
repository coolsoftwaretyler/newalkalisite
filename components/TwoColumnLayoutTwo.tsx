const TwoColumnLayoutTwo = props => {
    return (
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center max-w-7xl m-auto">
            <div className="w-full lg:w-3/6">
                {props.child1}
            </div>
            <div className="w-full lg:w-3/6 px-14 2xl:px-0 ml-24">
                {props.child2}
            </div>
        </div>
    )
}

export default TwoColumnLayoutTwo