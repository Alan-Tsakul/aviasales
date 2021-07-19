export default class Api {
  URL = 'https://front-test.beta.aviasales.ru';

  getRequest = async (url) => {
    const res = await fetch(`${this.URL}${url}`);
    if (!res.ok) {
      console.clear();
    }
    const result = await res.json();
    return result;
  };

  getSearchId = async () => {
    const response = await this.getRequest(`/search`);
    return response;
  };

  getAllTickets = async (searchId) => {
    const response = await this.getRequest(`/tickets?searchId=${searchId}`).then((result) =>
      result.stop === false ? result : Promise.reject(result)
    );
    return response;
  };
}
