import { useState } from 'react'
import toast from 'react-hot-toast';

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    
    const signup = async (inputs) => {
        const success = handleInputErrors(inputs);
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(inputs)
            });

            const data = await res.json();
            console.log(data);
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false);
        }

    }

    return {loading, signup}
}

export default useSignup


function handleInputErrors({fullName,username,password,confirmPassword,gender}) {

    console.log('inputs', {fullName,username,password,confirmPassword,gender});
    console.log(!username);
    if (!fullName || !username || !password || !confirmPassword || gender) {
        toast.error('Please fill in all fields')
        return false
    }

    if (password !== confirmPassword) {
        toast.error("Password don't match")
        return false;
    }

    if (password.length < 6) {
        toast.error('')
    }
}