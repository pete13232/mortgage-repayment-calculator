export const Button = ({ children, className, type, disabled }) => {

    console.log('button', disabled)
    return <button
        className={className}
        type={type}
        disabled={disabled}
    >
        {children}
    </button>
}