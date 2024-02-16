export const waait=()=> new Promise(res=>setTimeout(res, Math.random() * 2000))
export const fetchData=(key)=> {
  return JSON.parse(localStorage.getItem(key));
}
export const createBudget = ({
    name,amount
})=>{
    const newItem={
        id: crypto.randomUUID(),
        name: name,
        createAt: Date.now(),
        amount: +amount,
    }
    const existingBudgets = fetchData("budgets") ?? [];
    return localStorage.setItem("budgets",JSON.stringify([...existingBudgets,newItem]))
}

export const deleteItem=({key})=> {
    return localStorage.removeItem(key)
}