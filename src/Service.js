import axios from 'axios'
const baseUrl="http://localhost:3001/courses"
 
class CourseService {
 
static postApi(url,data){
return axios.post(baseUrl + url, data);
}
 
static getApi(url){
return axios.get(baseUrl + url);
}
 
static deleteApi(url){
return axios.delete(baseUrl + url);
}
}
 
export default CourseService