import axios from "axios"
const BASE_URL = import.meta.env.VITE_BASE_URL

export const getData = async (path) => {
    const res = await axios.get(BASE_URL + path)

    return res
}


export const getSymbols = async () => {
    let symbols = JSON.parse(localStorage.getItem('symbols'))

    if(!symbols) {
        const res = await axios.get("https://api.apilayer.com/fixer/symbols", {
            headers: {apikey: import.meta.env.VITE_API_KEY}
        })

        const data = await res.data.symbols
        
        if(data) {
            localStorage.setItem('symbols', JSON.stringify(res.data.symbols))
        }

        return data
    }

    return symbols
} 

export const postData = async (path, body) => {
    const res = await axios.post(BASE_URL + path, body)

    return res
} 

export const patchData = async (path, body) => {
    const res = await axios.patch(BASE_URL + path, body)
    return res
} 