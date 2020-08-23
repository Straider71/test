const axios = require('axios');

class API {
  constructor({ url }) {
    this.url = url;
    this.endpoints = {};
  }

  createEntity(entity) {
    this.endpoints[entity.name] = this.createBasicCRUDEndpoints(entity);
  }

  createEntities(arrayOfEntity) {
    arrayOfEntity.forEach(this.createEntity.bind(this));
  }

  createBasicCRUDEndpoints({ name }) {
    let endpoints = {};

    const resourceURL = `${this.url}/${name}`;

    endpoints.getAll = ({ query } = {}) =>
      axios.get(resourceURL, { params: { query } });
    endpoints.getOne = ({ id }) => axios.get(`${resourceURL}/${id}`);

    endpoints.create = toCreate => axios.post(resourceURL, toCreate);

    endpoints.update = toUpdate =>
      axios.put(`${resourceURL}/${toUpdate.id}`, toUpdate);

    endpoints.delete = ({ id }) => axios.delete(`${resourceURL}/${id}`);

    return endpoints;
  }
}

export default API;

// const myApi = new API({ url: 'http://localhost:8080/api' });

// myApi.createEntity({ name: 'posts' });

// localhost: 8080 / api / posts;

// myApi.endpoints.posts.getAll().then(({ data }) => console.log(data));

// Object { data: Array(4), meta: Object }

// myApi.endpoints.posts.getOne({ id: 1}).then(({data}) => console.log(data))
