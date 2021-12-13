import { makeStyles } from "@material-ui/core/styles";

const UseStyles = makeStyles((theme) => ({
    search: {
        display: "flex",
        alignItems: "center",
        border:"0.5px solid #bebebe",
        borderRadius: "3px",
        position:"relative",
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        "& input":{
            padding:"0px"
        },
        fontSize:"small"
    },
    iconButton: {
        color: "grey"
    },
    search1: {
        width: "100%",
        cursor:"pointer",
        border: "0.5px solid #bebebe",
        borderRadius: "3px",
        boxShadow: theme.shadows[5],
        zIndex: 10,
        position:"absolute",
        display:"block",
        top:"105%"
    },
    options:{
        display:"flex",
        alignItems:"center",
        paddingLeft:"10px",
        "&:hover":{
            backgroundColor: "#fdede5",
        },
    },
    option2:{
        cursor:"default",
    },
}));

export default UseStyles;
