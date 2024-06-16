import ApiRoute from "./ApiRoute"

const usePostAppointment = (onSubmitSuccess: () => void) => {
    return (data: any) => {
        console.log(JSON.stringify(data));

        fetch(`${ApiRoute}/Tiquete`, {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => {
            if (response.message) {
                alert(`Error: ${response.message}`);
            } else {
                alert("El tiquete fue añadido exitosamente");
                onSubmitSuccess();
            }
        })
        .catch(e => {
                alert(`Error: ${e.message}`);
            }
        )
    }
}

export default usePostAppointment;