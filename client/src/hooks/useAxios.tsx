import {useState} from 'react';
import axios from 'axios'

export const useAxios = () => {

    const [loading, setLoading] = useState(false)

    const request = async () => {
        setLoading(true)
        const response = axios.get('http://localhost:5000/api').then( (res) => res.data)
        const data: object = response

        setLoading(true)

        return data
    }

    return request
}


