import React, { useEffect, useState } from 'react';
import UserModel from '../types/models';
import User from './User';

const Users = () => {
    const [users, setUsers] = useState<UserModel[]>([]);
    const [team, setTeam] = useState<UserModel[]>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    const handeleAddUser = (user: UserModel) => {
        const newTeam = [...team, user];
        setTeam(newTeam)
    }
    return (
        <div>
            <h2>My Users</h2>
            <h3>Team size: {team.length}</h3>
            {/* <User name='Tony' age={5} addUser={handeleAddUser} /> */}
            {
                users.map(user => <User user={user} addUser={handeleAddUser}></User>)
            }
        </div>
    );
};

export default Users;