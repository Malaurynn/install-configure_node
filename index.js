import 'dotenv/config';
import cowsay from 'cowsay';


const name = process.env.NAME;
const campus = process.env.CAMPUS;


console.log(
  cowsay.say({
    text: `Hello I am ${name} from ${campus}!`,

  })
);