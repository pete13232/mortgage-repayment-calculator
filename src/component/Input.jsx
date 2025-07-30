export const Input = ({ id,
    label,
    input,
    type,
    placeholder,
    symbol,
    position,
    handleTypo,
    setValue
}) => {

    const { value, isError, isEmpty } = input

    return <>
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <div className={`input-wrapper
            ${isError
                    ? 'error'
                    : isEmpty
                        ? 'empty'
                        : null}`}>
                <input
                    id={id}
                    className={`input ${position}`}
                    type={type}
                    value={value ?? ""}
                    onChange={(e) => {
                        handleTypo(e.target.value, setValue)
                    }}
                    placeholder={placeholder}
                />
                <p className={`symbol ${position}`}>{symbol}</p>
            </div>
            <p className={`error-message ${isError
                ? 'error'
                : isEmpty
                    ? 'empty'
                    : null
                }`}>
                {isError
                    ? "Typo input"
                    : isEmpty
                        ? "This field is required"
                        : null
                }
            </p>
        </div>
    </>
}