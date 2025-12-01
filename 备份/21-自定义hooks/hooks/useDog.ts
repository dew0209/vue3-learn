import {computed, ref,reactive,onMounted} from 'vue'
import axios from 'axios'

export default function(){
    let dogList = reactive(['https://images.dog.ceo//breeds//pembroke//n02113023_2390.jpg']);

    async function addOneDog(){
        try{
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random');
            dogList.push(result.data.message);
        }catch(error){
            console.log(error);
        }
    }
    return {dogList,addOneDog};
}