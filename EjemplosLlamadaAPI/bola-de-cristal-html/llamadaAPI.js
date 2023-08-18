
const llamadaAPI = async () => {
    const llamada = await fetch('https://api.adviceslip.com/advice')
    const datos = await llamada.json()
    console.log("Estos son los datos",datos)
}

llamadaAPI()