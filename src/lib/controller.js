export const logIn = (email, password) => 
    firebase.auth().signInWithEmailAndPassword(email, password)
  
export const signUp = (email, password) =>
    firebase.auth().createUserWithEmailAndPassword(email, password)

export const checkEmail = () => 
  firebase.auth().currentUser.sendEmailVerification()

export const signOut = () => 
    firebase.auth().signOut()
 
export const googleLogIn = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
  } 

export const showPost = (post, like, privacity) => {
    firebase.firestore().collection('users').add({
    comment: post,
    reaction: like,
    filter: privacity
  })
}

export const getPost = (callback, user) => { 
  if (user !== null) {
   return firebase.firestore().collection('users')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() })
      });
      callback(data);      
    })
  } else if (user == null) {
    return firebase.firestore().collection('users')
    .where('filter', '==', 'publico' )
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() })
      });
      callback(data);      
    })
  }
  };

export const authUser = () => 
firebase.auth().currentUser;

export const deletePost = (id) =>
  firebase.firestore().collection('users').doc(id).delete();

export const editPost = (id, text) => {
    return firebase.firestore().collection('users').doc(id).update({
      comment: text,
  });
};

export const likePost = (id, like) => {
  return firebase.firestore().collection('users').doc(id).update({
    reaction: like
});
};
 
