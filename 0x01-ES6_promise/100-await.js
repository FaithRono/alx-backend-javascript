import { uploadPhoto, createUser } from './utils';

export default async function asyncUplloadUser() {
  let photo;
  let user;
  try {
    photo = await uploadPhoto();
    user = await createUser(photo);
  } catch (error) {
    photo = null;
    user = null;
  }
  return { photo, user };
}
