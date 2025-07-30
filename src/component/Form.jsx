import { Button } from './Button'
import { Input } from './Input'
import { RadioForm } from './RadioForm'
import { Result } from './Result'
import { CalculatorIcon } from './CalculatorIcon'

import { useEffect, useState } from 'react'

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
    const [type, setType] = useState({
        value: null,
        isEmpty: false,
    })


    const [hasTypo, setHasTypo] = useState(false)
    const [isValid, setIsValid] = useState(false)

    const [hasSubmit, setHasSubmit] = useState(false)

    const [monthlyPayment, setMonthlyPayment] = useState(0)
    const [totalPayment, setTotalPayment] = useState(0)


    const handleRadioSelect = (value) => {
        setType(prev => ({
            ...prev,
            value: value,
            isEmpty: !value,
        }))
    }

    const setEmpty = (setFuntion) => {
        setFuntion(prev => {
            return ({
                ...prev,
                isEmpty: !prev.value
            })
        })
    }

    const handleEmpty = () => {
        setEmpty(setAmount)
        setEmpty(setTerm)
        setEmpty(setInterest)
        setEmpty(setType)
    }

    const handleTypo = (value, setFunction) => {
        const trimmed = value.trim()
        const regex = /[^0-9,.]+/g
        const isTypo = regex.test(trimmed)
        setFunction(prev => ({
            ...prev,
            value: trimmed,
            isError: isTypo,
        }))

        setHasTypo(isTypo)

        if (hasSubmit) {
            handleEmpty()
        }
    }

    const convertToNumber = (input) => {
        const { value, isEmpty } = input

        if (isEmpty || value === null) return null

        if (typeof value === "string") return parseFloat(value.replaceAll(",", ''))

        return parseFloat(value)
    }


    const onReset = () => {
        setAmount({
            value: null,
            isError: false,
            isEmpty: false
        })
        setTerm({
            value: null,
            isError: false,
            isEmpty: false
        })
        setInterest({
            value: null,
            isError: false,
            isEmpty: false
        })
        setType({
            value: null,
            isEmpty: false,
        })

        setHasSubmit(false)
        setMonthlyPayment(0)
        setTotalPayment(0)
    }

    const onValidate = () => {
        const hasEmpty =
            !amount.value ||
            !term.value ||
            !interest.value ||
            !type.value

        handleEmpty()
        const isValid = !hasEmpty && !hasTypo
        setIsValid(isValid)

        return isValid
    }

    useEffect(() => {
        const hasEmpty =
            !amount.value ||
            !term.value ||
            !interest.value ||
            !type.value

        const isValid = !hasEmpty && !hasTypo
        setIsValid(isValid)
    }, [amount, interest, type, term, hasTypo])


    const onCalculate = (e) => {
        e.preventDefault()
        const isValid = onValidate()

        if (isValid) {
            const amountNum = convertToNumber(amount, setAmount)
            const termNum = convertToNumber(term, setTerm)
            const interestNum = convertToNumber(interest, setInterest)

            const P = amountNum
            const n = termNum * 12
            const r = interestNum / 12 / 100
            let monthly, total

            if (type.value === "Repayment") {
                monthly = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
                total = monthly * n
            }
            if (type.value === "Interest Only") {
                monthly = P * r;
                total = monthly * n + P;
            }
            setMonthlyPayment(Number(monthly))
            setTotalPayment(Number(total))
        } else {
            return
        }

    }


    return <div className="form-container">
        <div className='form'>
            <div className="form__header group-row">
                <h1 className='form-title'>Mortgage Calculator</h1>
                <p className='clear-form' onClick={onReset}>Clear All</p>
            </div>
            <form className="form__body" action="" onSubmit={(e) => {
                onCalculate(e)
                setHasSubmit(true)
            }}>
                <Input
                    id="mortgage-amount"
                    input={amount}
                    label="Mortgage Amount"
                    type="text"
                    placeholder="200,000"
                    symbol="£"
                    position="prefix"
                    handleTypo={handleTypo}
                    setValue={setAmount}
                />
                <div className="group-row">
                    <Input
                        id="mortgage-term"
                        input={term}
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
                        input={interest}
                        label="Interest Rate"
                        type="text"
                        placeholder="5"
                        symbol="%"
                        position="suffix"
                        handleTypo={handleTypo}
                        setValue={setInterest}
                    />
                </div>
                <RadioForm
                    type={type}
                    handleRadioSelect={handleRadioSelect}
                />

                <Button
                    type="submit"
                    disabled={hasSubmit && !isValid}
                >

                    <CalculatorIcon />
                    Calculate Repayments
                </Button>
            </form>
        </div>
        <Result
            monthlyPayment={monthlyPayment}
            totalPayment={totalPayment}
        />
    </div>

}