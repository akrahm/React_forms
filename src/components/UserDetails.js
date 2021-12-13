import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddUser from './AddUser';
import { Grid, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getAllUsers } from '../features/userSlice';

const useStyles = makeStyles((theme) => ({
    detail_field: {
        marginTop: "10%",
        marginLeft: "10%",
        border: "1px solid grey"
    },
    selected:{
        marginTop: "20%",
        marginLeft: "20%",
    },
    user_detail: {
        padding: "20px"
    }

}));

const UserDetails = () => {
    const { userbyId } = useSelector(getAllUsers);
    let addInfo = "(Allow alphabets, numbers & special characters are full stop, comma, at sign and Underscore only.)";
    const classes = useStyles();
    const [openModal, setopenModal] = useState(false);
    const [userval, setuserval] = useState(false);

    function getData() {
        if (userbyId) {
            let keys = Object.keys(userbyId);
            if (keys?.length > 0) {
                setuserval(true);
            }
            else setuserval(false);
        }
    }

    useEffect(() => {
        if (userbyId) {
            getData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userbyId]);



    return (
        <div>
            <AddUser open={openModal}
                onClose={() => setopenModal(false)} />
            <Grid container xs={12} direction='row' justify='center'>
                <Button style={{ backgroundColor: "grey", marginTop: "10px" }}
                    onClick={() => setopenModal(true)} >Add User </Button>
            </Grid>
            {
                userval && userval === true ?

                    <div className={classes.detail_field}>
                        <div className={classes.user_detail}>
                            <h1>Selected User Details</h1>
                            <div>
                                <h4>{`Customer Name : ${userbyId?.nameVal}`}</h4>
                                <h4>{`Email : ${userbyId?.emailVal}`}</h4>
                                <h4>{`Phone : ${userbyId?.phnVal}`}</h4>
                                <h4>{`Country : ${userbyId?.countryVal}`}</h4>
                                <h6>{`Additional Info : ${addInfo}`}</h6>
                                <a href={userbyId?.fileval?.name} download={userbyId?.fileval?.name}>Dowload</a>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={classes.selected}>
                        <h3>"Add user and selct from user listing to view"</h3>
                    </div>
            }
        </div>
    )
}

export default UserDetails
