import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const createStateObject = (promise) => promise.then(
  (value) => ({ status: 'fulfilled', value }),
  (err) => ({ status: 'rejected', value: err.message }),
);

export default function handleProfileSignup(firstName, lastName, filename) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(filename)];
  const stateObjects = promises.map(createStateObject);
  const responses = Promise.all(stateObjects);
  return responses;
}
