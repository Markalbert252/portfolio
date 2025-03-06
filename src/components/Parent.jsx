// react
import { useState } from "react";

// components
import FormInput from "./FromInput";

const Parent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    return (
        <>
            <FormInput
                title="Name"
                type="name"
                value={name}
                onChange={setName}
            />

            <FormInput
                title="Email"
                type="email"
                value={email}
                onChange={setEmail}
            />
        </>
    )
}

export default Parent;