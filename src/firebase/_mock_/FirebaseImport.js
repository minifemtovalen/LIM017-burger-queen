export const initializeApp = jest.fn(() => {});

export const getFirestore = jest.fn(() => {});

export const db = jest.fn();

export const getAuth = jest.fn(() => ({
    currentUser: {
    email: "email@email.com"
    },
}));

export let signInWithEmailAndPassword = jest.fn(
    (auth, email, password) =>
    new Promise((resolve, reject) => {
        if (password !== "") {
        resolve({});
        } else {
        reject({ error: "no se inicio sesion" });
        }
    })
);

export const signOut = jest.fn(
    (auth) =>
    new Promise((resolve, reject) => {
        if (auth !== null) {
        resolve({});
        } else {
        reject({ error: "no se cerro sesion" });
        }
    })
);