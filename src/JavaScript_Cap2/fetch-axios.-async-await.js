const getName = async () => {
  const response = await fetch('https://api.github.com/users/brunomacedo');
  const data = await response.json();
  return data.name;
}
getName().then(name => console.log(name));

const pokemon = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/berry/{1}/');
  console.log(response);
  const data = await response.json();
  return data.id;
}
pokemon().then(id => console.log(id));

const getRepos = async () => {
  const users = await fetch('https://63a2728da543280f776fa958.mockapi.io/api/v1/users');
  const res = await users.json();
  return res;
}
getRepos().then(res => console.log(res));

const getRepost = async () => {
  const users = await axios('https://63a2728da543280f776fa958.mockapi.io/api/v1/users');
  const rest = await users.json();
  return rest;
}
getRepos().then(res=> console.log(res));
