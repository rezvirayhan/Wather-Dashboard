import { useEffect, useState } from "react";
const useWather = () => {
    const [watherData, setWatherData] = useState({
        location: "",
        climate: "",
        temperature: "",
        maxTemperature: "",
        minTemperature: "",
        humidity: "",
        cloudPercentage: "",
        wind: "",
        time: "",
        longitude: "",
        latitude: "",
    })
    const [loading, setLoading] = useState({
        state: false,
        message: "",
    });
    const [error, setError] = useState(null);

    const fetchWatherData = async (latitude, longitude) => {
        try {
            setLoading({
                ...loading,
                state: true,
                message: "Fatching Wather Data...."

            })
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`);
            if (!response.ok) {
                const errorMassage = `Faatching Wather Data Failed....: ${response.status}`
                throw new Error(errorMassage)
            }
            const data = await response.json();
            const updateWatherData = {
                ...watherData,
                location: data?.name,
                climate: data?.weather[0]?.main,
                temperature: data?.main?.temp,
                maxTemperature: data?.main?.temp_max,
                minTemperature: data?.main?.temp_min,
                humidity: data?.main?.humidity,
                cloudPercentage: data?.clouds?.all,
                wind: data?.wind?.speed,
                time: data?.dt,
                longitude: longitude,
                latitude: latitude,
            }
            setWatherData(updateWatherData)

        } catch (error) {
            setError(error)
        }
        finally {
            setLoading({
                ...loading,
                state: false,
                message: ""

            })
        }

    };
    useEffect(() => {
        setLoading({
            loading: true,
            message: "Finding Location....."
        })
        navigator.geolocation.getCurrentPosition(function (posigion) {
            fetchWatherData(posigion.coords.latitude, posigion.coords.longitude)
        })
    }, [])

    return {
        watherData,
        loading,
        error
    }

}


export default useWather;