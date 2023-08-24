/** @format */

function GetPostsUsers() {
    let Request = new XMLHttpRequest();
    Request.open("GET", "https://jsonplaceholder.typicode.com/users");
    Request.responseType = "json";
    Request.send();
    Request.onload = function () {
        if (Request.status >= 200 && Request.status < 300) {
            let Users = Request.response;
            let section1 = document.getElementsByClassName("section-1")[0];
            for (let User of Users) {
                section1.innerHTML += `<div class="div-1" id="div${User.id}" onclick="UserClicked(${User.id})">
                                            <h2>${User.name}</h2>
                                            <p class="p-1">${User.email}</p>
                                        </div>`;
            }
        } else {
            alert(`Error ${Request.status}: Users Not Found!`);
        }
    };
}

function GetPosts(id) {
    let Request = new XMLHttpRequest();
    Request.open(
        "GET",
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    Request.responseType = "json";
    Request.send();
    Request.onload = function () {
        if (Request.status >= 200 && Request.status < 300) {
            let Posts = Request.response;
            let section2 = document.getElementsByClassName("section-2")[0];
            section2.innerHTML = ""; // Clear the previous posts
            for (let Post of Posts) {
                section2.innerHTML += `<div class="div-2">
                                        <h2>${Post.title}</h2>
                                        <hr>
                                        <p class="p-2">${Post.body}</p>
                                        </div>`;
            }
        } else {
            alert(`Error ${Request.status}: Posts Not Found!`);
        }
    };
}

GetPosts(1);
function UserClicked(iduser) {
    GetPosts(iduser);
}
// Call GetPostsUsers to fetch and display user data
GetPostsUsers();
