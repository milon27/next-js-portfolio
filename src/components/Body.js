export default function Body({ children }) {
    return (
        <div className="m-auto px-auto" style={{ minHeight: "70vh", maxWidth: '1000px' }}>
            {children}
        </div>
    )
}
