export const Input = ({ id,
    ref,
    label,
    className,
    type,
    value,
    placeholder,
    symbol,
    position,
    handleTypo,
    setValue
}) => {

    return <>
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <div className='input-wrapper'>
                <input
                    id={id}
                    ref={ref}
                    className={`input ${position}`}
                    type={type}
                    value={value}
                    onChange={(e) => {
                        handleTypo(e.target.value, setValue)
                        setValue(prev => ({
                            ...prev,
                            value: e.target.value.trim()
                        }))
                    }}
                    placeholder={placeholder}
                />
                <p className={`symbol ${position}`}>{symbol}</p>
            </div>
        </div>
    </>
}