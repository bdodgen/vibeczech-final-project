import React from 'react';

export default function App() {


    const showModal = () => {
        const modal = document.getElementById("modal");
        console.log(modal);
        modal.style.display = "block";
        console.log(modal.style);
    }

    const hideModal = (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    }

    return (
        <div>
            <form>
                <label htmlFor='username'>Username</label>
                <br />
                <input type='text' id='username' name='username' />
                <br /><br />

                <label htmlFor='password'>Password</label>
                <br />
                <input type='password' id='password' name='password' />
                <br /><br />

                <button id='login' name='login'>Login</button>
                <br /><br />

                <a href='#' id='register' onClick={showModal}>Register</a>
            </form>

            <div id='modal' className='modal' onClick={hideModal} style={{ display: "none" }}>
                <div className='modal__content'>
                    <p>Modal</p>
                </div>
            </div>
        </div>
    )
}