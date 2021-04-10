const StandardTextBlock = (props) => {
    return (
        <div className="w-full lg:w-1/2">
            <h3 className="text-4xl font-play font-bold m-auto leading-tight">{props.title}</h3>
            <p className="text-alkaligrey-400 font-open max-w-4xl text-lg font-normal pt-7">{props.text}</p>
        </div>
    )
}

export default StandardTextBlock