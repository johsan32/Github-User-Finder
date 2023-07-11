//!api istekleri bölümü
class users {
    constructor(){
        this.apiId = " kendi bilgilerinizi girin"
        this.apiSecret = "githubdan oluşturduğunuz kodu girin";
        this.repoNumber = 12;
        this.sort = "asc"
    }
    async getUsers(userName) {
    const userProfil = await fetch(`https://api.github.com/users/${userName}?client_id=${this.apiId}&client_secret=${this.apiSecret}`);
    const userRepo = await fetch(`https://api.github.com/users/${userName}/repos?per_page=${this.repoNumber}&sort=${this.sort}&client_id=${this.apiId}&client_secret=${this.apiSecret}`);
    
    const userProfile = await userProfil.json();
    const userRepos = await userRepo.json();
    //console.log(userProfile)
    return {userProfile, userRepos};
    }
    
}
//classı export etme
export default users;