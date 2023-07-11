import { usersUrl } from '../config';

async function makeRequest(url) {
  const response = await fetch(url);
  return response.json();
}

const cache = new Map();

export async function fetchUsers(search) {
  const searchUserUrl = `${usersUrl}?search=${search}`;
  if (cache.has(searchUserUrl)) {
    return cache.get(searchUserUrl);
  }
  const { results: users } = await makeRequest(searchUserUrl);
  cache.set(searchUserUrl, users);
  return users;
}
