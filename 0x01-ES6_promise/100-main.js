import asyncUploadUser from './100-await';

(async () => {
  const value = await asyncUploadUser();
  console.log(value);
})();
