import React, { useState, useRef } from "react";

function App() {
    const [username, setUsername] = useState('')
    const [chirptext, setChirptext] = useState('')

    const handleUsernameChange = e => setUsername(e.target.value)
    const handleChirpTextChange = e => setChirptext(e.target.value)

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="card-body border">
                        <input value={username} onChange={handleUsernameChange} type='text' placeholder="Enter your Username" />
                        <div>
                            <input value={chirptext} onChange={handleChirpTextChange} type="text" placeholder="Tell Us What You're Thinking" />
                            <button className="bg-primary text-white rounded-pill" onClick={()=>{this.props.postChirp(username,chirptext)}}>Chirp it!</button>
                        </div>
                    </div>
                </div>
                <div className="col-3 p-3">
                    <div className="card-body border">
                        <h4>{username}</h4>
                        <div>{chirptext}</div>
                    </div>
                </div>
                <div className="col-3 p-3">
                    <div className="card-body border">
                        <h4>Jamie Oliver</h4>
                        <div>I love food!</div>
                    </div>
                </div>
                <div className="col-3 p-3">
                    <div className="card-body border">
                        <h4>Bobby Flay</h4>
                        <div>I think food is pretty good too!</div>
                    </div>
                </div>
                <div className="col-3 p-3">
                    <div className="card-body border">
                        <h4>Another Famous Chef</h4>
                        <div>I'm someone else and I like food as well!</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App