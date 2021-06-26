import { SideNav } from "../lib/SideNav/SideNav"

export const ComponentBox = ({ children }) => {
    return (
        <div className="h-screen flex o-h">
            <SideNav />
            <div className="flex-column py-1 px-1 o-y-auto w-100" style={{ height: "90%" }}>
                {children}
            </div>
        </div>
    );
}