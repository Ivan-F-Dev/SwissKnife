import {useCallback, useEffect, useState} from 'react';
import {useAxios} from "../../hooks/useAxios";

export const Todos = () => {

    const [state, setState] = useState({})

    const request = useAxios()

    const fetch = useCallback(async () => {
        const fetched = await request()
        setState(fetched)
    }, [request])

    useEffect(  () => {
        fetch()
    }, [fetch])

    return (
        <>
            <span>{JSON.stringify(state)}</span>
        </>
    )
}
