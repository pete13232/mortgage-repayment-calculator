export const RadioInput = ({ id, value, label, name, className, type, placeholder, handleRadioSelect }) => {
    return <>
        <label className="radio form-group">
            <input
                id={id}
                type={type}
                value={value}
                name={name}
                onChange={(e) => handleRadioSelect(e.target.value)}
            />
            {label}
        </label>
    </>
}