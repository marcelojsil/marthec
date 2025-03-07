     
    const handleSubmit = async (e, name, email, whatsapp) => {
        
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, whatsapp }),
        });
        const result = await response.json();
        alert(result.message);
    };

    export default handleSubmit;
