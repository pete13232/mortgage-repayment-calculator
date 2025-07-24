import { Button } from './Button'
import { Input } from './Input'
import { RadioInput } from './RadioInput'
import { Result } from './Result'
import { CalculatorIcon } from './CalculatorIcon'

import { useEffect, useRef, useState } from 'react'

export const Form = () => {

    const [amount, setAmount] = useState({
        value: null,
        isError: false,
        isEmpty: false
    })
    const [term, setTerm] = useState({
        value: null,
        isError: false,
        isEmpty: false
    })
    const [interest, setInterest] = useState({
        value: null,
        isError: false,
        isEmpty: false
    })

    const amountRef = useRef()
    const termRef = useRef()
    const interestRef = useRef()

    const handleTypo = (value, setError) => {
        const regex = /[^0-9,]+/g
        const isTypo = regex.test(value) // true or false
        setError(prev => ({
            ...prev,
            isError: isTypo
        }))
    }

    const setEmpty = (setFuntion) => {
        setFuntion(prev => ({
            ...prev,
            isEmpty: !prev.value
        }))
    }

    const handleEmpty = () => {
        setEmpty(setAmount)
        setEmpty(setTerm)
        setEmpty(setInterest)
    }

    const onCalculate = (e) => {
        e.preventDefault()
        handleEmpty()
    }

    useEffect(() => {
        console.log("Amount", amount)
        console.log("Term", term)
        console.log("Interest", interest)
    }, [amount, term, interest])

    return <div className="form-container">
        <div className='form'>
            <div className="form__header group-row-on-large">
                <h1 className='form-title'>Mortgage Calculator</h1>
                <p className='clear-form'>Clear All</p>
            </div>
            <form className="form__body" action="" onSubmit={onCalculate}>
                <Input
                    id="mortgage-amount"
                    value={amount.value}
                    ref={amountRef}
                    label="Mortgage Amount"
                    type="text"
                    placeholder="200,000"
                    symbol="£"
                    position="prefix"
                    handleTypo={handleTypo}
                    setValue={setAmount}
                />
                <div className="group-row-on-large">
                    <Input
                        id="mortgage-term"
                        value={term.value}
                        ref={termRef}
                        label="Mortgage Term"
                        type="text"
                        placeholder="10"
                        symbol="years"
                        position="suffix"
                        handleTypo={handleTypo}
                        setValue={setTerm}
                    />
                    <Input
                        id="interest-rate"
                        value={interest.value}
                        ref={interestRef}
                        label="Interest Rate"
                        type="text"
                        placeholder="5"
                        symbol="%"
                        position="suffix"
                        handleTypo={handleTypo}
                        setValue={setInterest}
                    />
                </div>
                <fieldset className='radio-fieldset'>
                    <legend>Mortgage Type</legend>
                    <div className='radio-wrapper'>
                        <RadioInput
                            id="repayment"
                            label="Repayment"
                            name="mortgage-type"
                            type="radio"
                        />
                        <RadioInput
                            id="interest-only"
                            label="Interest Only"
                            name="mortgage-type"
                            type="radio"
                        />
                    </div>
                </fieldset>
                <Button
                    type="submit"
                // onCalculate={onCalculate}
                >
                    <CalculatorIcon />
                    Calculate Repayments
                </Button>
            </form>
        </div>
        <Result />
    </div>

}