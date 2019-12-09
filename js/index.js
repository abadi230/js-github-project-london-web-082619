const form = document.querySelector('#github-form');
const divGethubContainer = document.querySelector('#github-container')
const userList = document.querySelector('#user-list');
const reposList = document.querySelector('#repos-list');
/*************** API ***************/
BASE_URL= "https://api.github.com"
USERS_URL= `${BASE_URL}/users`
SEARCH_URL= `https://api.github.com/users/abadi230/repos`


function get(url){
    return fetch(url ,{
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/vnd.github.v3+json"
        }
    }).then(resp => resp.json())
}

const handleForm= (event)=>{

    event.preventDefault()
    let user = event.target.search.value
    get(`https://api.github.com/search/users?q=${user}`)
    .then(userInfo => renderUser(userInfo))
        
}
form.addEventListener('submit', handleForm)

function renderUser(user){
    
    const pro = user.items[0]
    let li = document.createElement('li')
    li.innerText = pro.login
    
    li.innerHTML = `
    <li> username: ${pro.login}
    <li><img src="${pro.avatar_url}" alt="${pro.login}">
    <li><a href="${pro.html_url}">Profile</a>
    `
    userList.append(li)
    
}

function renderAllUsers(users){
    users.forEach(user => renderUser(user))
}