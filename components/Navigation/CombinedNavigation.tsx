import TempMobileNav from '../Navigation/TempMobileNav'
import TempDesktopNav from '../Navigation/TempDesktopNav'

const CombinedNavigation = props => {
    return (
        <div>
            <div className="contents lg:hidden">
                <TempMobileNav
                />
            </div>
            <div className="hidden lg:contents">
                <TempDesktopNav
                    headerColor={props.headerColor}
                />
            </div>
        </div>
    )
}
export default CombinedNavigation