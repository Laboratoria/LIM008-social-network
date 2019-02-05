export const createPostFireStore = (idCollection, idCollectionPost, idUser, idPost, key, value) => {
  return firebase.firestore().collection(idCollection).doc(idUser)
    .collection(idCollectionPost).doc(idPost).set({[key]: value}, { merge: true});
};

export const readPostFireStore = (idCollection, idCollectionPost, idUser, idPost) => {
  return firebase.firestore().collection(idCollection).doc(idUser)
    .collection(idCollectionPost).doc(idPost).get();
};

export const updatePostFireStore = (idCollection, idCollectionPost, idUser, idPost, key, value) => {
  return firebase.firestore().collection(idCollection).doc(idUser)
    .collection(idCollectionPost).doc(idPost).update({[key]: value});
};

export const deletePostFireStore = (idCollection, idCollectionPost, idUser, idPost) => {
  firebase.firestore().collection(idCollection).doc(idUser)
    .collection(idCollectionPost).doc(idPost).delete()
    .then(() => console.log('Se elimino correctamente el Blog'))
    .catch((err) => console.log('error eliminando Collectio= ' + err.message));
};