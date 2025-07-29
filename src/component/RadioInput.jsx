export const RadioInput = ({ id, value, label, name, type, checked, handleRadioSelect }) => {
    return <>
        <label className="radio form-group">
            <input
                id={id}
                type={type}
                value={value}
                name={name}
                checked={checked}
                onChange={(e) => handleRadioSelect(e.target.value)}
            />
            {label}
        </label>
    </>
}