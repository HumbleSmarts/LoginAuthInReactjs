import ProfileForm from "./ProfileForm";
import classes from "./UserProfile.module.css";

const UserProfile = (props) => {
  console.log(props.name);
  return (
    <section className={classes.profile}>
      <h1>Update Your Password</h1>
      <ProfileForm />
    </section>
  );
};

export default UserProfile;
