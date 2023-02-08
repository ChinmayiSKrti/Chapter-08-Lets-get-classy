// import { useEffect
//  } from "react";
const Profile = (props) => {
    // useEffect(()=> {
    //     console.log("Inside useEffect");
    //     const timer = setTimeout(()=> {
    //         console.log("Namaster React Functional Timer");
    //     },1000);

    //     return () => {
    //         clearInterval(timer);
    //         console.log("Functional component unmounted");
    //     }
    // },[]);

    // console.log("Inside render");

    return (
        <div>Profile Functional Component By - {props.name}</div>
    );
}

export default Profile;