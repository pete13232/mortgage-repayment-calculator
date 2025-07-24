import { EmptyIcon } from "./EmptyIcon"

export const Result = () => {
    return (
        // <div className="result-container">
        //     <EmptyIcon />
        //     <div className="result-header">
        //         <h2>Results shown here</h2>
        //         <p className="result-description"> Complete the form and click “calculate repayments” to see what
        //             your monthly repayments would be.</p>
        //     </div>
        // </div>

        <div className="result-container has-result">
            <div className="result-header has-result">
                <h2>Your results</h2>
                <p className="result-description">Your results are shown below based on the information you provided.
                    To adjust the results, edit the form and click “calculate repayments” again.</p>
            </div>
            <div className="result-body has-result">
                <div className="result-body__top">
                    <h3>Your monthly repayments</h3>
                    <p>£1,200.50</p>
                </div>
                <div className="result-body__bottom">
                    <h3>Total you'll repay over the term</h3>
                    <p>£400,000.50</p>
                </div>
            </div>
        </div>
    )
}