import { DesktopNavigation } from "./desktopnavigation/DesktopNavigation"
import { MobileNavigation } from "./mobilenavigation/MobileNavigation"
import { useWindowDiemensions } from "../../hooks/useWindowDiemensions"

export const Navigation = () => {
    const {width} = useWindowDiemensions()

    const navigationViewPort = () => {
        return width <= 1000 ? <MobileNavigation /> : <DesktopNavigation />
    }

    return navigationViewPort()
}