
import axios from 'axios';

async function getUserFromGithub(user) {

    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response);
    }
    catch(err){
        console.log('Usuário não existe');
    }
 }
 
getUserFromGithub('eduardorssr');

getUserFromGithub('eduardorsrsrs');
