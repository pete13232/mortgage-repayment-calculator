export const RadioInput = ({ id, type, value, name, label, checked, handleRadioSelect }) => {
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