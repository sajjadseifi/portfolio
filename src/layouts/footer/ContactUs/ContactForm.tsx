import React from "react"
import { Input } from "../../../components/Form/Input"
import { TextArea } from "../../../components/Form/TextArea"

export const ContactForm = () => {
    return (
        <div>
            <form>
                <Input 
                    name="fullname" 
                    display="Full Name"
                    placeholder="sajjad seifi"
                 />
                <Input 
                    name="email" 
                    display="Email" 
                    placeholder="sajjadseifi@gmail.com"
                />
                <TextArea 
                    name="recom" 
                    display="Your Recomendation"
                    placeholder="bla bla bla..."
                />
            </form>
        </div>
    )
}