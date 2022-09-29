fetch("https://reqres.in/api/users", {
    method: 'POST',
    body: JSON.stringify({
        name: "morpheus",
        job: "leader"
    }),
    headers:{
        'Content-type': 'application/json',
    },
})
.then((response)=>response.json())
