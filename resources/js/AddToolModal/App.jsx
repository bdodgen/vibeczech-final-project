import React from 'react';

import { useState, useEffect } from 'react';

export default function App() {


    const [values, setValues] = useState({
        name: '',
        manufacturer: '',
        vibration_rating: '',
        noise_rating: ''
    })


    useEffect(
        () => {
            console.log(values)
        }, [values])


    const showModal = () => {
        const modal = document.getElementById("modal_add_tool");
        console.log(modal);
        modal.style.display = "block";

    }

    const hideModal = (e) => {
        const modal = document.getElementById("modal_add_tool");
        modal.style.display = "none";


    }




    const handleSubmit = async (event) => {

        event.preventDefault();

        // make the AJAX request
        const response = await fetch('/api/tools/add', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        });

        // parse the response as JSON
        const response_data = await response.json();

        // if the response code is not 2xx(success)
        if (Math.floor(response.status / 100) !== 2) {
            switch (response.status) {
                case 422:
                    // handle validation errors here
                    console.log('VALIDATION FAILED:', response_data.errors);
                    break;
                default:
                    console.log('UNKNOWN ERROR', response_data);
                    break;
            }
        }

    }

    const handleChange = (event) => {
        setValues(previous_values => {
            return ({
                ...previous_values,
                [event.target.name]: event.target.value
            });
        });
    }



    return (
        <>
            < a href='#' id='modalTrigger' onClick={showModal} > Add tools</a >
            <div id='modal_add_tool' class='modal'>
                <div className='modal__content'>
                    <h1 >Add Tools</h1>
                    <form action="/api/tools/add" method="post" onSubmit={handleSubmit} >

                        Name:<br />
                        <input type="text" name="name"
                            value={values.name}
                            onChange={handleChange}
                        />
                        <br />

                        Manufacturer:<br />
                        <input type="text" name="manufacturer"
                            value={values.manufacturer}
                            onChange={handleChange}
                        />
                        <br />

                        Vibration magnitude:<br />
                        <input type="text" name="vibration_rating"
                            value={values.vibration_rating}
                            onChange={handleChange}
                        />
                        <br />

                        Noise level:<br />
                        <input type="text" name="noise_rating"
                            value={values.noise_rating}
                            onChange={handleChange}
                        />
                        <br />

                        <button onClick={hideModal}>Add tool</button>

                    </form>
                </div>
            </div>
        </>


    )
}