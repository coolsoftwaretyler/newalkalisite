const StandardImage = (props) => {

    const imageAngle = () => {
        return `${props.imageAngle === 'left' ? 'portfolio-image--left' : props.imageAngle === 'right rounded-md shadow-2xl' ? 'portfolio-image--right rounded-md shadow-2xl' : props.imageAngle === 'none'}`
    }

    const imageContainerAngle = () => {
        return `${props.imageAngle == ('left' || 'right') ? 'portfolio-image-container' : ''} `
    }
    
    return (
        <div>
            <div className={imageContainerAngle()}>
                <img
                    className={imageAngle()}
                    src={props.image}
                />
            </div>
        </div>
    )
}

export default StandardImage