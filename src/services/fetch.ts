import { ref } from 'vue'

interface IUseFetch {
    method: string,
    headers: object,
}



export function useFetch(url:string,method:string):any {
    const data = ref(null)
    const error = ref(null)

    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then((res) => res.json())
        .then((json) => (data.value = json))
        .catch((err) => (error.value = err))

    return { data, error }
}
