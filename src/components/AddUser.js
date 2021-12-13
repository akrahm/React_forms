import React, { useEffect, useState } from 'react';
import { Modal, Grid, OutlinedInput, Button } from '@material-ui/core';
import CstmDrop from './CstmDrop';
import { Country_type } from '../utils/constant';
import UseStyles from './style';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/userSlice';
import formData from "./form";
import { validateArr } from "../utils/helper";
import ModalIcon from './error';


const AddUser = (props) => {
  const classes = UseStyles();
  const userArr = [];
  const dispatch = useDispatch();
  const [newFormData, setnewFormData] = React.useState([]);
  const [userlist, setuserlist] = useState([]);
  const [File, setFile] = useState(null);

  useEffect(() => {
    setnewFormData(formData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleuserdata(data) {
    console.log("data===>", data);
    userArr.push(data);
    setuserlist(userlist.concat(userArr));
  }

  const AddClickButton = () => {
    let arr = validateArr(newFormData);
    setnewFormData(arr);
    let allvalidate = arr.filter(el => {
      return el.error === true;
    });
    if (allvalidate.length < 1) {
      let data = {
        nameVal: arr[0]?.value,
        emailVal: arr[1]?.value,
        phnVal: arr[2]?.value,
        countryVal: arr[3]?.value,
        fileval: File
      };
      console.log("datausercreated", data);
      handleuserdata(data);
    }
  };

  useEffect(() =>{
    if(userlist?.length > 0){
      dispatch(addUser(userlist));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[userlist]);

  function onChangeHandle(id, value) {
    let newArr = [...newFormData];
    let objIndex = newArr.findIndex((obj => obj.id === id));
    newArr[objIndex].value = value;
    setnewFormData(newArr);
  }

  function onChangeDrop(id, value) {
    let newArr = [...newFormData];
    let objIndex = newArr.findIndex((obj => obj.id === id));
    newArr[objIndex].value = value.value;
    newArr[objIndex].label = value.label;
    setnewFormData(newArr);
  }

  console.log("userarrayu", userArr, userlist);


  const body = (
    <div className={classes.paper}>
      <form onSubmit={AddClickButton}>
        <Grid container xs={12} className={clsx(classes.AddSurc, classes.fontSize22)}>
          Add User Details
        </Grid>
        <Grid container xs={12} direction="row" justify="space-between" alignItems="center">
          <Grid container xs={12} className={clsx(classes.fontSize20)}>
            Name
          </Grid>
          <Grid container direction='row' alignItems='center' className={classes.container}>
            <OutlinedInput
              className={clsx(classes.height40, classes.fontSize17, classes.Input)}
              style={{ paddingRight: "5px", width: "90%" }}
              error={newFormData[0]?.error}
              id="outlined-error-helper-text"
              placeholder={newFormData[0]?.placeholder}
              variant="outlined"
              onChange={(e) => onChangeHandle(newFormData[0]?.id, e.target.value)}
              value={newFormData[0]?.value}
            />
            <ModalIcon data={newFormData[0]?.error ? newFormData[0]?.errorMsg : newFormData[0]?.Msg} iserror={newFormData[0]?.error} />
          </Grid>
          <Grid container xs={12}>
            Email
          </Grid>
          <Grid container direction='row' alignItems='center' className={classes.container}>
            <OutlinedInput
              className={clsx(classes.height40, classes.fontSize17, classes.Input)}
              style={{ paddingRight: "5px", width: "90%" }}
              error={newFormData[1]?.error}
              id="outlined-error-helper-text"
              placeholder={newFormData[1]?.placeholder}
              variant="outlined"
              onChange={(e) => onChangeHandle(newFormData[1]?.id, e.target.value)}
              value={newFormData[1]?.value}
            />
            <ModalIcon data={newFormData[1]?.error ? newFormData[1]?.errorMsg : newFormData[1]?.Msg} iserror={newFormData[1]?.error} />
          </Grid>
          <Grid container xs={12}>
            Phone No.
          </Grid>
          <Grid container direction='row' alignItems='center' className={classes.container}>
            <OutlinedInput
              className={clsx(classes.height40, classes.fontSize17, classes.Input)}
              style={{ paddingRight: "5px", width: "90%" }}
              error={newFormData[2]?.error}
              id="outlined-error-helper-text"
              placeholder={newFormData[2]?.placeholder}
              variant="outlined"
              onChange={(e) => onChangeHandle(newFormData[2]?.id, e.target.value)}
              value={newFormData[2]?.value}
            />
            <ModalIcon data={newFormData[2]?.error ? newFormData[2]?.errorMsg : newFormData[2]?.Msg} iserror={newFormData[2]?.error} />
          </Grid>
          <Grid container xs={12} direction="row" alignItems="center">
            Country
          </Grid>
          <Grid container direction='row' alignItems='center' className={classes.container}>
            <CstmDrop
              selectvalue={newFormData[3]?.label}
              listarr={Country_type}
              returnvalue={val => {
                onChangeDrop(newFormData[3]?.id, val);
              }}
              placeholder={newFormData[3]?.placeholder}
              width={"90%"}
              border={"1px solid"}
              borderColor={"#bebebe"}
              error={newFormData[3]?.error}
            />
            <ModalIcon data={newFormData[3]?.error ? newFormData[3]?.errorMsg : newFormData[3]?.Msg} iserror={newFormData[3]?.error} />
          </Grid>
          <Grid item xs={12} direction="row" alignItems="center" className={classes.container}>
            <div onClick={() => setFile(null)}>
              <input type="file" onChange={e =>
                setFile(e.target.files[0])} required />
            </div>
          </Grid>
        </Grid>
        <Grid container xs={12} direction="row" justify="flex-end">
          <Button title='Cancel' onClick={props?.onClose} >Cancel</Button>
          <Button title='Add' onClick={() => AddClickButton()} >Add</Button>
        </Grid>
      </form>
    </div>
  );

  return (
    <div>
      <Modal
        className={classes.modal}
        {...props}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default AddUser;