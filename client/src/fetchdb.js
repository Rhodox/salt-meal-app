
const fetchdb = path => {
  console.log('Fetching data from endpoint: ', path);
  
  return fetch(path).then(response => response.json());
}
export default fetchdb;
