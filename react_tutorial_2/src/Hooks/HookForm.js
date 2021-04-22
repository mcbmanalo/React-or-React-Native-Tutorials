import React, {useState} from 'react'
import RadioButton from '../Hooks/RadioButton'

function HookForm() {

    const [feedback, setFeedback] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        type: '',
        message: ''
    })

    const submitHandler = () => {
        alert(`Submited with values ${feedback.email}, ${feedback.firstName}, ${feedback.lastName}, ${feedback.phoneNumber}, ${feedback.type}, and ${feedback.message}`)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Email</label>
                    <input 
                        type="text"
                        value={feedback.email}
                        onChange={e => setFeedback({ ...feedback, email: e.target.value})}></input>
                </div>

                <div>
                    <label>First name</label>
                    <input 
                        type="text"
                        value={feedback.firstName}
                        onChange={e => setFeedback({ ...feedback, firstName: e.target.value})}></input>
                </div>

                <div>
                    <label>Last name</label>
                    <input 
                        type="text"
                        value={feedback.lastName}
                        onChange={e => setFeedback({ ...feedback, lastName: e.target.value})}></input>
                </div>

                <div>
                    <label>Phone number</label>
                    <input 
                        type="text"
                        value={feedback.phoneNumber}
                        onChange={e => setFeedback({ ...feedback, phoneNumber: e.target.value})}></input>
                </div>

                <div>
                    <RadioButton currentValue="Underwriter" currentType="type" updateRadio={e => setFeedback({ ...feedback, type: e.target.value})}/>
                    <RadioButton currentValue="Industry Publication" currentType="type" updateRadio={e => setFeedback({ ...feedback, type: e.target.value})}/>
                    <RadioButton currentValue="Tradeshow" currentType="type" updateRadio={e => setFeedback({ ...feedback, type: e.target.value})}/>
                    <RadioButton currentValue="Facebook" currentType="type" updateRadio={e => setFeedback({ ...feedback, type: e.target.value})}/>
                    <RadioButton currentValue="Twitter" currentType="type" updateRadio={e => setFeedback({ ...feedback, type: e.target.value})}/>
                    <RadioButton currentValue="LinkedIn" currentType="type" updateRadio={e => setFeedback({ ...feedback, type: e.target.value})}/>
                    <RadioButton currentValue="Email" currentType="type" updateRadio={e => setFeedback({ ...feedback, type: e.target.value})}/>
                    <RadioButton currentValue="Co worker" currentType="type" updateRadio={e => setFeedback({ ...feedback, type: e.target.value})}/>
                    <RadioButton currentValue="Industry partner" currentType="type" updateRadio={e => setFeedback({ ...feedback, type: e.target.value})}/>
                    <RadioButton currentValue="Other" currentType="type" updateRadio={e => setFeedback({ ...feedback, type: e.target.value})}/>
                </div>

                <div>
                    <label>Message</label>
                    <textarea 
                        type="text"
                        value={feedback.message}
                        onChange={e => setFeedback({ ...feedback, message: e.target.value})}></textarea>
                </div>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default HookForm
