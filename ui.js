//! Html kodları ekrana yansıtma
class htmlCard{
    constructor (){
        this.profile = document.querySelector("#user-card");
        this.repos = document.querySelector("#repos");
        this.alertModal = document.querySelector("#alert");
        this.headerImage = document.querySelector("#header-img");
    }

    showCard(data){
        //console.log(data)
        this.profile.innerHTML =`
        <div class="row d-flex flex-wrap justify-content-between p-4">
            <div class="d-flex flex-column col-md-3">
                <img class="rounded-circle img-fluid" src=${data.avatar_url} alt="">
                <a target=_blank class="btn btn-primary w-100 my-4" href=${data.html_url}><i class="fa-regular fa-user pe-2"></i>Show User Profile</a>
            </div>
            <div class="d-flex flex-column col-md-9 p-4">
                <div class="d-flex flex-row  justify-content-center pb-4 gap-3">
                    <span class=" btn btn-primary fs-6"><i class="fa-solid fa-book-open pe-2"></i>Repositories ${data.public_repos}</span>
                    <span class="btn btn-info fs-6"><i class="fa-solid fa-book-open pe-2"></i>Overview ${data.public_gists}</span>
                    <span class="btn btn-success fs-6"><i class="fa-solid fa-users pe-2"></i>Followers ${data.followers}</span>
                    <span class="btn btn-danger fs-6"><i class="fa-solid fa-users pe-2"></i>Following ${data.following}</span>
                </div>
                <div class="flex-column flex-column">
                    <ul class="list-group">
                        <li class="list-group-item"><i class="fa-regular fa-address-card pe-2"></i><b>About: </b>${data.bio}</li>
                        <li class="list-group-item"><i class="fa-regular fa-building pe-2"></i><b>Company: </b>${data.company}</li>
                        <li class="list-group-item"><i class="fa-solid fa-globe pe-2"></i><b>Web Site: </b>${data.blog}</li>
                        <li class="list-group-item"><i class="fa-solid fa-location-dot pe-2"></i><b>Location: </b>${data.location}</li>
                        <li class="list-group-item"><i class="fa-regular fa-calendar-days pe-2"></i><b>Created date: </b>${new Date(data.created_at).toLocaleDateString()}</li>
                    </ul>
                </div>
            </div>
        </div>
        
        `

    }
    showRepo(repo){
        //console.log(repo);
        repo.forEach((item)=> {
        //console.log(item);
        //console.log(item.id, repo["0"].id)
        if(item.id === repo["0"].id){
        this.repos.innerHTML += `
        <h1 class="pb-2 text-center">User's Latest Repositories</h1>
        <div class="row border rounded-2 p-3 my-2">    
            <div class="col-md-7">
                <a href="" class="fs-5 text-decoration-none">${item.name}</a>
            </div>
            <div class="col-md-5 d-flex justify-content-between gap-2">
                <span class=" btn btn-primary fs-6"><i class="fa-regular fa-eye pe-2"></i>Unwatch ${item.watchers_count}</span>
                <span class="btn btn-info fs-6"><i class="fa-solid fa-code-fork pe-2"></i></i>Fork ${item.forks_count}</span>
                <span class="btn btn-success fs-6"><i class="fa-regular fa-star pe-2"></i></i>Star ${item.stargazers_count}</span>
            </div>
        </div>
        `
        }else{
            this.repos.innerHTML += `
            <div class="row border rounded-2 p-3 my-2">    
                <div class="col-md-7">
                    <a href="" class="fs-5 text-decoration-none">${item.name}</a>
                </div>
                <div class="col-md-5 d-flex justify-content-between gap-2">
                    <span class=" btn btn-primary fs-6"><i class="fa-regular fa-eye pe-2"></i>Unwatch ${item.watchers_count}</span>
                    <span class="btn btn-info fs-6"><i class="fa-solid fa-code-fork pe-2"></i></i>Fork ${item.forks_count}</span>
                    <span class="btn btn-success fs-6"><i class="fa-regular fa-star pe-2"></i></i>Star ${item.stargazers_count}</span>
                </div>
            </div>
            `
        }
    });
}

    showAlert(msj, color) {
        const alertDiv = document.createElement('div');
        alertDiv.classList.add("alert");
        alertDiv.classList.add(color);
        alertDiv.innerText = msj;
        this.alertModal.innerHTML = "";
        this.alertModal.appendChild(alertDiv);

        setTimeout(() => {
            alertDiv.remove();
            }, 2000 );

    }
    showImg(src) {
        //const image = this.headerImage.src;
       // this.headerImg.src = `${src.avatar_url}`;
        const image = `${src.avatar_url}`
        headerImg.src = image;
        console.log(image);
        console.log(src.avatar_url);
    }
    showImg(src) {
        const headerImg = document.getElementById('header-img');
        const imageSource = src.avatar_url;
        headerImg.src = imageSource;
    }
}

export default htmlCard;

