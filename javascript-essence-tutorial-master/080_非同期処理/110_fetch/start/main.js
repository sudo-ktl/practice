// fetch('users.json').then(function(response){
//     console.log(response);
//     return response.json();
// }).then(function(json){
//     console.log(json);
//     for(const user of json) {
//         console.log(`I'm ${user.name}`)
//     }
// })

async function fetchUsers() {
    const response  = await fetch('users.json');
    console.log(response)
    const json = await response.json();
    for(const user of json) {
        console.log(user.name)
    }
    console.log(json)
}

fetchUsers();