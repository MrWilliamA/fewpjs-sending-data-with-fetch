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
    .then( response => response.json() ) //change on this line
    .then(function(object) {    
        document.body.innerHTML = `${object.id}`;     
    })
    .catch(function(error) {     
        console.log(error.message);
        document.body.innerHTML = error.message;     

      });    
    }
    