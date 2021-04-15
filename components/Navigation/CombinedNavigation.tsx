import MobileNavigation from '../Navigation/MobileNavigation'
import DesktopNavigation from '../Navigation/DesktopNavigation'

const CombinedNavigation = props => {
    return (
        <div>
            <div className="contents lg:hidden">
                <MobileNavigation />
            </div>
            <div className="hidden lg:contents ">
                <DesktopNavigation />
            </div>
        </div>
    )
}
export default CombinedNavigation