import { Form, useFetcher } from "react-router-dom"
import { CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { useEffect, useRef } from "react";
const AddBudgetForm =()=>{
    const fetcher= useFetcher();
    const isSubmitting= fetcher.state==="submitting";
    const formRef = useRef();
    const focusRef = useRef();
    useEffect(()=>{
        if(!isSubmitting){
            formRef.current.reset()
            focusRef.current.focus()
         }
    }, [isSubmitting])

    return(
        
        <div className="form-wrapper">
            <h2 className="h3">
                Create Budget
            </h2>
            <fetcher.Form
             method="post" ref={formRef} className="grid-sm">
                <div className="grid-xs" >
                    <label htmlFor="newBudget">Budget name</label>
                    <input type="text" name="newBudget" ref={focusRef} id="newBudget" placeholder="eg. Accessories"></input>
                </div>
                <div className="grid-xs" >
                    <label htmlFor="newBudgeAmmount">Budget Ammount</label>
                    <input type="number" step="0.01" name="newBudgetAmmount" id="newBudgetAmmount" required inputMode="decimal" placeholder="eg. $500"></input>
                </div>
                <input type="hidden" name="_action" value="createBudget" />
                <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
                    {isSubmitting ? <span>Creating budget ...</span> 
                        : (
                            <>
                                <span>Create budget</span>
                                <CurrencyDollarIcon width={20} />
                            </>
                        )
                    }
                   
                </button>
            </fetcher.Form>
        </div>
    )
}
export default AddBudgetForm