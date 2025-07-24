export const Button = ({ children, className, type, onCalculate }) => {
    return <button
        className={className}
        type={type}
    // onSubmit={onCalculate}
    >
        {children}
    </button>
}