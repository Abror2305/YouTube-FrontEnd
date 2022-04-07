const avatar = window.localStorage.getItem("avatar")
const avatarImg = document.querySelector('.avatar-img')
if(avatar){
    avatarImg.src = host+"/avatar/"+avatar
}

async function renderUser() {
    let response = await requestJSON('/info', 'GET')
    console.log(response);
    if (response.users.length) {
        users.innerHTML = `<h1>YouTube Members</h1>
        <li class="channel active" data_id="main">
        <a href="#">
        <svg viewbox="0 0 24 24" focusable="false" style="pointer-events: none; display: block; width: 30px; height: 30px;"><g><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8" class="style-scope yt-icon"></path></g></svg>
        <span>Home</span>
        </a>
        </li>`
        for (let user of response.users) {
            users.innerHTML += `<li class="channel" userId=${user.userId}>
            <a href="#">
                <img src="${backendApi+'/'+user.img}" alt="channel-icon" width="30px" height="30px">
                <span>${user.username}</span>
            </a>
        </li>`
        }
    }
}
console.log("hello")