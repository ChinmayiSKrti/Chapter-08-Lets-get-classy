import React from 'react';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     count: 0
        // }

        this.state = {
            userInfo: {
              login: "Dummy Name",
              type: "Dummy User"
            }
          }

        console.log("Child - Inside constructor - "+ this.props.name);
    }

    async componentDidMount () {
        const data = await fetch('https://api.github.com/users/ChinmayiSKrti');
        const jsonData = await data.json();
        console.log("jsonData - "+jsonData);
        this.setState({userInfo: jsonData});
        console.log("Child - componentDidMount - "+ this.props.name);
        // this.timer = setInterval(() => {
        //     console.log("Namaste React Interval");
        // }, 1000);
    }

    componentDidUpdate() {
        console.log("Component Did Update");
    }

    componentWillUnmount() {
        // clearInterval(this.timer);
        console.log("Component Will Unmount");
    }

    render() {
        console.log("Child - render - "+ this.props.name);
        return (
            <div>
                {/* <h1>Profile Class Component - {this.props.name}</h1>
                <h3>Count: {this.state.count}</h3>
                <button onClick={() => {this.setState({count: 1})}}>Increment</button> */}
                <h1>Profile Class Component</h1>
                <h2>Name - {this.state?.userInfo?.login}</h2>
                <h2>Type - {this.state?.userInfo?.type}</h2>
            </div>
        )
    }
}

export default Profile;