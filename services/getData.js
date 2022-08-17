import { AXIOS } from 'services';
const getData = async (url, name) => {
  try {
    const { data } = await AXIOS.get(url);
    return data[name];
  } catch (error) {
    console.log(error);
    return [];
  }
};
export default getData;
