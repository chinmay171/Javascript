const username = document.querySelector("#inputArea");
const submit = document.querySelector('#submitBtn');
const overviewCrd = document.querySelector(".overviewCard");

let usernameCurr = document.querySelector("#username");
let followersCnt = document.querySelector("#followers");
let followingCnt = document.querySelector("#following");
let repoCnt = document.querySelector("#NoofRepos");
let JoinDate= document.querySelector("#joiningDate");
let updateDate= document.querySelector("#updateDate");
let img = document.querySelector('#GithubDP');

submit.addEventListener("click", function(){
    overviewCrd.style.visibility = 'visible'
    let enteredUsername = username.value;
    let url = `https://api.github.com/users/${enteredUsername}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            const data = JSON.parse(this.responseText);
            img.src = data.avatar_url;
            usernameCurr.innerHTML = data.name;
            followersCnt.innerHTML = `followers: ${data.followers}      `;
            followingCnt.innerHTML = `following: ${data.following}`;
            repoCnt.innerHTML = `No of Public Repository: ${data.public_repos}`;
            JoinDate.innerHTML = `Joining Date: ${data.created_at.substring(0 ,10)}     `;
            updateDate.innerHTML = `Last Activity Data: ${data.updated_at.substring(0 ,10)}`;
        }
    }
    xhr.send();
})
