import * as React from 'react';
import { client } from './../contenful'

interface IProps {
}

const Test: React.FunctionComponent<IProps> = () => (
    <form action="">
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" />
        </div>
        <div>
            <button>Submit</button>
        </div>
    </form>
);

export {
    Test
};
