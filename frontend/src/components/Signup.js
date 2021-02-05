const Signup = () => {
  return(
    <form className="signup-form">
      <h1>Create an Account</h1>
      <input type="text" name="name" placeholder="Your Name"/><br/>
      <input type="text" name="email" placeholder="Email"/><br/>
      <input type="password" name="password" placeholder="Password"/><br/>
      <input type="password" name="password_confirmation" placeholder="Confirm Password"/><br/>
      <input type="submit" className="submit"/>

    </form>
  )
}

export default Signup
