export default function ProductsDetailsLayouts(
    { children }
        : {
            children: React.ReactNode
        }
) {
    return (
        <>
            {children}
            <h2>Feature Products</h2>
        </>
    )
}