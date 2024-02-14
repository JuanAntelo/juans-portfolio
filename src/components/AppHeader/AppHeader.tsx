import './AppHeader.css'

interface AppHeaderProps {
    headerName: string
}

function AppHeader({ headerName } : AppHeaderProps ) {
    return (
        <div className="app-section-header">
            <p>{headerName}</p>
        </div>
    )
}

export default AppHeader;
