export default function Body({ children, ...props }) {
    return (
        <div className="flex flex-dc px-auto" style={{ alignContent: "center" }}  {...props}>
            <div style={{ margin: "auto", maxWidth: '1000px' }}>
                {children}
            </div>
        </div>
    )
}
