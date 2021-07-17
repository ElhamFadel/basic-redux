import axios from "axios";
const placeholder =  "https://jsonplaceholder.typicode.com/todos/1";
export const getData = () =>{
     axios.get(placeholder)
  .then(function (res) {
    console.log(res.data);
  })
  .catch(function(res) {
    if(res instanceof Error) {
      console.log(res.message);
    } else {
      console.log(res.data);
    }
  });
}
