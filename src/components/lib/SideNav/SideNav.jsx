export const SideNav = () => {
    return (
        <>
            <div className="o-y-auto" style={{height : "90% "}}>
                <div className="side-bar">
                    <div className="sidebar-list">
                        <span className="sidebar-list-name">Getting Started</span>
                        <ul className="sidebar-items">
                            <li className="sidebar-item"><a href="/documentation">Installation</a></li>
                        </ul>
                    </div>
                    <div className="sidebar-list">
                        <span className="sidebar-list-name">Components</span>
                        <ul className="sidebar-items">
                            <li className="sidebar-item"><a href="/avatar">Avatar</a></li>
                            <li className="sidebar-item"><a href="/alert">Alert</a></li>
                            <li className="sidebar-item"><a href="/badge">Badge</a></li>
                            <li className="sidebar-item"><a href="/button">Button</a></li>
                            <li className="sidebar-item"><a href="/card">Card</a></li>
                            <li className="sidebar-item"><a href="/form">Form</a></li>
                            <li className="sidebar-item"><a href="/image">Image</a></li>
                            <li className="sidebar-item"><a href="/list">List</a></li>
                            <li className="sidebar-item"><a href="/navigation">Navigation</a></li>
                            <li className="sidebar-item"><a href="/modal">Modal</a></li>
                            <li className="sidebar-item"><a href="/typography">Typography</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}