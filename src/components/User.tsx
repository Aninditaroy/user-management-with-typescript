import React, { FC } from 'react';
import UserModel from './../types/models';
// interface Props {
//     name: string,
//     age: number,
//     addUser: () => void
// }
interface Props {
    user: UserModel,
    addUser: (user: UserModel) => void
}
const User: FC<Props> = ({ user, addUser }) => {
    return (
        <div>
            <h2>Hello from : {user.name} with {user.email}</h2>
            <button onClick={() => addUser(user)}>add me</button>
        </div>
    );
};

// const User: FC<{ name?: string, age?: number }> = (props) => {
//     const age = props.age
//     return (
//         <div>
//             <h2>Hello from : {props.name}</h2>
//         </div>
//     );
// };

export default User;

// watched 75-5 (6:00 min)