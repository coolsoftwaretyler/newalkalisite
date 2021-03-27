const SectionIntro = props => {
    return (
        <div>
            <p className="text-alkaligrey-400 uppercase font-open text-xl text-center font-bold">{props.client}</p>
            <h1 className="text-center text-5xl md:text-7xl font-play font-bold max-w-3xl m-auto leading-tight pt-4">{props.title}</h1>
            <p className="text-center text-alkaligrey-400 font-open font-bold text-xl md:text-2xl font-normal max-w-5xl m-auto px-10 py-12">{props.sub}</p>
        </div>
    )
}
export default SectionIntro