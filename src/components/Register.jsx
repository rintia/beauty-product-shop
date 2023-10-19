import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { updateProfile } from "firebase/auth";



const Register = () => {
    const {createUser, signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
   
    
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(() => {
          navigate('/'),
          toast.success('Sign in Successful')
        })
        .catch(error => console.error(error))
      }
    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        console.log(name, email, password);
        if(password.length < 6){
            toast.warning('Password should be 6 character or longer')
            return;
          }
  
          else if(!/[A-Z]/.test(password)){
            toast.warning('Your password should have at least one upper class character ');
            return;
          }
          else if(!/[!@#$%^&*]/.test(password)){
            toast.warning('Your password should have at least one special character');
            return;
          }
        createUser(email, password)
        .then(result => {
           
              console.log(result.user)
              updateProfile(result.user,{
                displayName: name,
                photoURL: photo
              })
              .then(() => location.reload(),
              navigate('/'),
              toast.success('Registered Successfully')
              
              )
              .catch(error => console.error(error))
            
        })
        .catch(error=> 
            console.log(error))

    }
    return (
        <div style={{backgroundImage: 'url(https://i.ibb.co/pn2yhk5/bg.jpg)'}} className="hero min-h-screen ">
          <div className="hero-overlay"></div>
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl text-dark font-bold">Register now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparent">
      <form onSubmit={handleRegister} className="card-body">
      <div className="form-contro">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Photo</span>
          </label>
          <input type="text" name="photo" placeholder="your photo url" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn border-none bg-dark text-while (condition) {
            
          } hover:bg-[#D988B9] btn-primary">Register</button>
          <p className="text-center mt-4">Or</p>
          <p className="text-center">Sign in with <button onClick={handleGoogleSignIn} className="btn text-light btn-link">Google</button></p>
        </div>
        <p>Already have an account? Please <Link to='/login'><button className="btn text-light btn-link">Login</button></Link></p>
       
      </form>
      <ToastContainer></ToastContainer>
    </div>
  </div>
</div>
    );
};

export default Register;