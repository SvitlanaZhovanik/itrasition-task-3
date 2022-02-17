import { getDatabase, ref, get, set } from "firebase/database";

const db = getDatabase();

export const getUsers = () => {
  const usersRef = ref(db, "users");
  return get(usersRef);
};

export function writeUserData(userId, email, name, createProfile, lastLogin) {
  set(ref(db, "users/" + userId), {
    email: email,
    block: false,
    name: name,
    createProfile,
    lastLogin: new Date(lastLogin),
  });
}
