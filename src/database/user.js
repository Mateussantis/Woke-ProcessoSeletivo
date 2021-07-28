import { fireStore, fireAuth } from '../config/firebase';

export const createUser = async (user, userData) => {
    try {
        await fireStore.collection('users').doc(user.uid).set(userData);

        console.log("Tudo Certo !")
        return true;
    } catch (error) {
      console.log('erro', error);
    }
  };

export const getUser = async (userId) => {
    const uid = fireAuth.currentUser.uid;
    const userData = await (await fireStore.collection('users').doc(uid).get()).data();

    return userData;
}

export const getEmailToVerify = async (user) => {
    const listUsers = [];

    await fireStore.collection('users').where('email', '==', user).get().then((data) => {
        data.docs.map((data) => listUsers.push(data.data()));
    });

    const userData = listUsers[0];
    
    if(userData) {
        return userData.nome;
    }
    else {
        return false;
    }
}