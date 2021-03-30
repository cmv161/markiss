export default class ApiService {
  async getAllPeople() {
    const res = await fetch("https://swapi.dev/api/people/1/");
    return await res.json();
  }
}
