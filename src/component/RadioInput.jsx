export const RadioInput = ({ id, label, name, className, type, placeholder }) => {
    return <>
        <label className="radio form-group">
            <input id={id} type={type} name={name} />
            {label}
        </label>
    </>
}