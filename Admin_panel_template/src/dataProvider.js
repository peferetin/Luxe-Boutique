import simpleRestProvider from "ra-data-simple-rest";
import { fetchUtils } from "ra-core";


const apiUrl = 'http://localhost:8000/api'

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(apiUrl, httpClient)

const myDataProvider = {
  ...dataProvider,
  getList: (resource, params) => {
    return dataProvider.getList(resource, params).then(({ data, total }) => ({
      data: data.map(record => ({ ...record, id: record._id })),
      total,
    }));
  },
  getOne: (resource, params) => {
    return dataProvider.getOne(resource, params).then(({ data }) => ({
      data: { ...data, id: data._id }
    }))
  },
  getMany: (resource, params) => {
    return dataProvider.getMany(resource, params).then(({ data }) => ({
      data: data.map(record => ({ ...record, id: record._id }))
    }))
  },
  update: (resource, params) => {
    return dataProvider.update(resource, {
      ...params,
      data: { ...params.data, _id: params.data.id }
    }).then(({ data }) => ({
      data: { ...data, id: data._id }
    }))
  },
  create: (resource, params) => {
    return dataProvider.create(resource, {
      ...params,
      data: { ...params.data, _id: params.data.id }
    }).then(({ data }) => ({
      data: { ...data, id: data._id }
    }))
  }
}

export default myDataProvider