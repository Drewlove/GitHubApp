'use strict'; 


function addEventListener(){
    $("#submit").on("click", function(e){
        e.preventDefault(); 
        let searchTerm = $("#search-term").val(); 
        performFetch(searchTerm)
    })
}

function displayRepoList(response){
    $(".repo-list").empty(); 
    response.forEach(repo =>{
        $(".repo-list").append(
            `
            <li> ${repo.name} <a href=${repo.html_url}>URL</a>
            </li>
            
            `
        )
    })
}

function performFetch(userName){
    let url = `https://api.github.com/users/${userName}/repos`
    fetch(url)
    // .then(response => {
    //     if(response.ok){
    //         return response.json(); 
    //     } else{
    //         throw new Error(response.statusText); 
    //     }
    // })
    // //response.json())
    .then(response => response.json())
    .then(responseJson => displayRepoList(responseJson))
    .catch(err => console.log(err))
}

function startApp(){
    addEventListener(); 
}

$(startApp)