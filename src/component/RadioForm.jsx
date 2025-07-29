import { RadioInput } from "./RadioInput"

export const RadioForm = ({ type, handleRadioSelect }) => {
    const { value, isEmpty } = type

    return (
        <fieldset fieldset className='radio-fieldset' >
            <legend>Mortgage Type</legend>
            <div className='radio-wrapper'>
                <RadioInput
                    id="repayment"
                    label="Repayment"
                    value="Repayment"
                    name="mortgage-type"
                    type="radio"
                    checked={value === 'Repayment'}
                    handleRadioSelect={handleRadioSelect}
                />
                <RadioInput
                    id="interest-only"
                    label="Interest Only"
                    value="Interest Only"
                    name="mortgage-type"
                    type="radio"
                    checked={value === 'Interest Only'}
                    handleRadioSelect={handleRadioSelect}
                />
            </div>
            <p className={`error-message ${isEmpty ? "empty" : null}`}>
                {isEmpty && "This field is required"}
            </p>
        </fieldset>
    )
}