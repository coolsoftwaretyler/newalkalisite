const TwoColumnLayout = props => {
    const flexType = () => {
        return `${props.flexType === 'reverse' ? 'flex-col-reverse' : 'flex-col'} flex space-x-0 lg:space-x-14 lg:flex-row m-auto justify-between items-center max-w-7xl`
    }

    return (
        <div className={`${props.style} py-24 px-14 xl:px-0`}>
            <div className={flexType()}>
                <div className="w-full lg:w-3/6">
                    {props.child1}
                </div>
                <div className="w-full lg:w-3/6">
                    {props.child2}
                </div>
            </div>
        </div>
    )
}

export default TwoColumnLayout