import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    user_detail: {
        padding: "10px",
    },
    box:{
        border:"1px solid grey",
        borderRadius:"2px",
        margin:"5px"
    }

}));

const UserCard = (props) => {

    const classes = useStyles();
    let name = props?.name;
    let Email = props?.Email;
    let number =props?.number;
    let country = props?.country;

    return (
        <div>
            <div className={classes.user_detail}>
                <h6>{`Customer Name : ${name}`}</h6>
                <h6>{`Email : ${Email}`}</h6>
                <h6>{`Phone : ${number}`}</h6>
                <h6>{`Country : ${country}`}</h6>
            </div>
        </div>
    )
}

export default UserCard
