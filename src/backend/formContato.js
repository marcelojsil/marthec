     
    const handleSubmit = async (e, name, email) => {
        
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email }),
        });
        const result = await response.json();
        alert(result.message);
    };

    export default handleSubmit;
