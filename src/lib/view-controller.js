
import { logIn, deletePost, signUp, checkEmail, signOut, showPost, googleLogIn, editPost, likePost, getPost, authUser } from "./controller.js";
import { changeHash }from "../route.js";
export const signInOnSubmit = () => {
    const email = document.querySelector('#email2').value;
    const password = document.querySelector('#password2').value;
    
    logIn(email, password)
        .then(() => changeHash('/home'))
        .catch((e) => {console.log(e);
         document.querySelector("#message").style.display = "block";})
}

export const signInWithGoogle = () => {
    googleLogIn()
        .then(() => changeHash('/home'))
}

export const signUpOnSubmit = () => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    signUp(email, password)
        .then(()=> {checkEmail(); changeHash('/home')} )
        .catch (() => {document.getElementById("message2").style.display = "block";})
}

export const submitPost = () => {
    const textArea = document.querySelector('#post');
    const privacity = document.querySelector('#privacity').value;
    let like = 0;
        showPost(textArea.value, like, privacity)
}

export const deleteOnClickPost = (objNote) => {
    if (confirm('De verdad quieres eliminarme?'))
    return deletePost(objNote.id)
}

export const editOnClickPost = (objNote, post) =>
editPost(objNote, post)

export const signOutOnClick = () => {
    signOut()
        .then(() => changeHash('/signin'))
}
export const submitLike = (objNote, reaction) =>
    likePost(objNote.id, reaction)

export const privacityPost = (callback) => 
    getPost(callback, authUser())
