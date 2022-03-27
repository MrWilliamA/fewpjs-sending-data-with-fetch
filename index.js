// Add your code here

const submitData = (name, email) => {
    let formData = {
        name: "Steve",
        email: "steve@steve.com"
    }

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",  
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }
  
return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {  
        return response.json();    
    })
    .then(function(object) {    
        const formDataText = document.createElement("p");     
        let formDataName = object.name;
        let formEmail = object.email;
        formDataText.innerText = `${formDataName} - ${formEmail}`;
        document.body.appendChild(formDataText);     
    })
    .catch(function(error) {     
        console.log(error.message);
        alert("Bad things! Ragnarők!");
      });    
    }