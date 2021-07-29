import { auth, googleAuthProvider } from "../lib/firebase";
import { useContext } from "react";
import { UserContext } from "../lib/context";

function Enter() {
  const { user, username } = useContext(UserContext);
  console.log(user, username);
  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}

export default Enter;

function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={"/google.png"} alt="" /> Sign in with Google
    </button>
  );
}
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}
function UsernameForm() {
  return <div>NO USERNAME</div>;
}
