const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const fetchApi = (url: string, options: RequestInit = {}) => {
  return fetch(`${API_KEY}${url}`, {
    ...options,
  });
};

export default fetchApi;
