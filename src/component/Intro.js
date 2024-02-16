import { Form } from "react-router-dom"
import { UserPlusIcon } from '@heroicons/react/24/solid'
import illustration from "../photo/illustration.jpg"
const Intro=()=>{
    return(
        <div className="intro">
            <div>
            <h1>Take Control of<span className="accent">Your Money</span></h1>
            <p>Personal budgeting is the secret to financial freedom. Start your journey today.</p>
            <Form
                method="post"
            >
                <input 
                    name="userName"
                    type="text"
                    required
                    placeholder="what's your name?"
                    aria-label="Your Name"
                    autoComplete="given-name"
                    ></input>
                <input type="hidden" name="_action" value="newUser" />
                <button type="submit" className="btn btn--dark">
                    <span>Create Account</span>
                    <UserPlusIcon width={20}/>
                </button>
                
            </Form>
            <img src={illustration} alt="Person with money" width={600} />
            </div>
            
        </div>
    )
}
export default Intro