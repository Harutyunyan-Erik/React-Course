import Login from "./Login";

function App () {
    return (
        <div>
            <h2>Hello World</h2>
            <Login
                title="Login Form"
                list={["Free Domain"]}
             />
            <hr/>
            <Login 
                title="Register Form"
                list={[
                    "Free Domain",
                    "Free Hosting",
                    "SSL Key",
                ]}
            />
        </div>
    )
}

export default App;