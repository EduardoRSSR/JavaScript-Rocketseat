import axios from 'axios';

class Github {
    static async getRepositories(repo) {
     try{
     const response = await axios.get(`https://api.github.com/repos/${repo}`)
     console.log(response);
     }
     catch(err){
     console.log(err);
     console.log('Repositório não existe');
     }
 }
 }
 Github.getRepositories('juanvl/desafio-es6');