import { Form, Link, useActionData, useNavigation, useSearchParams } from "react-router-dom";


import classes from "./AuthForm.module.css";

function AuthForm() {

  const navigation = useNavigation()
  const [search] = useSearchParams();
  const data = useActionData();
  const isLogin = search.get("mode") === "login";
  const isSubmitting = navigation.state === 'submitting'





  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{!isLogin ? "Create a new user" : "Login"}</h1>
        {data && data.error && (
          <ul>
            {Object.values(data.errors).map((error) => (
              <li>{error}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button disabled={isSubmitting}>Save</button>
        </div>
        
      </Form>
    </>
  );
}

export default AuthForm;
