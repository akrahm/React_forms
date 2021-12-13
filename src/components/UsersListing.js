import React from 'react';
import UserCard from './UserCard';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { getAllUsers, selectedUser } from '../features/userSlice';

const useStyles = makeStyles((theme) => ({
    box:{
        border:"1px solid black",
        borderRadius:"2px",
        margin:"5px"
    }

}));

const UsersListing = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { users } = useSelector(getAllUsers);

    return (
        <div style={{ backgroundColor: "grey", width: "25%", height:"100vh" }}>
            {
                users?.length > 0 ? users?.length > 0  && users?.map((user) => {
                    return (
                        <div className={classes.box}>
                            <UserCard
                                name={user?.nameVal}
                                Email={user?.emailVal}
                                number={user?.phnVal}
                                country={user?.countryVal}
                            />
                            <button  onClick={() => dispatch(selectedUser(user))} >View user Detail</button>
                        </div>
                    )
                })
                    :
                    <div style={{marginTop:"60px"}}>
                        <h1>Please Add user</h1>
                    </div>
            }
        </div>
    )
}

export default UsersListing
