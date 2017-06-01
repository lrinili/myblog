export default {
  count:1,
  token:JSON.parse(sessionStorage.getItem("user"))?JSON.parse(sessionStorage.getItem("user")).token:null
}
