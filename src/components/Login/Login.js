import React, { useContext } from "react";
import { UserContext } from "../../App";
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebase.config";
import "./Login.css";

const Login = () => {
	const { user } = useContext(UserContext);
	const [loggedInUser, setLoggedInUser] = user;

	// Initialize Firebase
	if (firebase.apps.length === 0) {
		firebase.initializeApp(firebaseConfig);
	}

	// Google Sign in
	const handleGoogleSignIn = () => {
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(function(result) {
				const { displayName, email } = result.user;
				const signedInUser = { name: displayName, email };
				setLoggedInUser(signedInUser);
				storeAuthToken();
			})
			.catch(function(error) {
				const errorMessage = error.message;
				console.log(errorMessage);
			});
	};
	console.log(loggedInUser);

	// Setting firebase idToken on sessionStorage
	const storeAuthToken = () => {
		firebase
			.auth()
			.currentUser.getIdToken(/* forceRefresh */ true)
			.then(function(idToken) {
				sessionStorage.setItem("token", idToken);
			})
			.catch(function(error) {
				// Handle error
			});
	};

	return (
		<section className="dp-login p-lg-5 p-sm-2">
			<div className="container-fluid p-lg-5">
				<div className="row">
					<div className="col-lg-5">
						<div className="login-form bg-white p-5 ">
							<div className="form-group">
								<label htmlFor="">User Name</label>
								<input type="text" className="form-control" />
							</div>
							<div className="form-group">
								<label htmlFor="">Password</label>
								<input type="password" className="form-control" />
							</div>
							<div className="form-group">
								<label htmlFor="" className="text-danger">
									Forgot your password?
								</label>
							</div>
							<div className="from-group mt-5">
								<button className="btn btn-primary btn-block" onClick={handleGoogleSignIn}>
									Google Sign in
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
