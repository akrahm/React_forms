import { makeStyles } from "@material-ui/core/styles";

const UseStyles = makeStyles((theme) => ({
    height40: {
        height: "40px",
        [theme.breakpoints.up("xs")]: {
            height: "15px",
        },
        [theme.breakpoints.up("sm")]: {
            height: "20px",
        },
        [theme.breakpoints.up("md")]: {
            height: "25px",
        },
        [theme.breakpoints.up("md_ld")]: {
            height: "25px",
        },
        [theme.breakpoints.up("lg")]: {
            height: "30px",
        },
        [theme.breakpoints.up("lg_xl")]: {
            height: "35px",
        },
        [theme.breakpoints.up("xl")]: {
            height: "40px",
        },
    },
    height35: {
        height: "35px",
        [theme.breakpoints.up("xs")]: {
            height: "10px",
        },
        [theme.breakpoints.up("sm")]: {
            height: "15px",
        },
        [theme.breakpoints.up("md")]: {
            height: "20px",
        },
        [theme.breakpoints.up("md_ld")]: {
            height: "20px",
        },
        [theme.breakpoints.up("lg")]: {
            height: "25px",
        },
        [theme.breakpoints.up("lg_xl")]: {
            height: "30px",
        },
        [theme.breakpoints.up("xl")]: {
            height: "35px",
        },
    },
    fontSize17: {
        fontSize: theme.palette.primary.text15,
        [theme.breakpoints.up("xs")]: {
            fontSize: theme.palette.primary.text5,
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: theme.palette.primary.text8,
        },
        [theme.breakpoints.up("md")]: {
            fontSize: theme.palette.primary.text10,
        },
        [theme.breakpoints.up("md_ld")]: {
            fontSize: theme.palette.primary.text12,
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: theme.palette.primary.text12,
        },
        [theme.breakpoints.up("lg_xl")]: {
            fontSize: theme.palette.primary.text15,
        },
        [theme.breakpoints.up("xl")]: {
            fontSize: theme.palette.primary.text17,
        },
    },
    fontSize20: {
        fontSize: theme.palette.primary.text20,
        [theme.breakpoints.up("xs")]: {
            fontSize: theme.palette.primary.text5,
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: theme.palette.primary.text8,
        },
        [theme.breakpoints.up("md")]: {
            fontSize: theme.palette.primary.text10,
        },
        [theme.breakpoints.up("md_ld")]: {
            fontSize: theme.palette.primary.text12,
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: theme.palette.primary.text15,
        },
        [theme.breakpoints.up("lg_xl")]: {
            fontSize: theme.palette.primary.text17,
        },
        [theme.breakpoints.up("xl")]: {
            fontSize: theme.palette.primary.text20,
        },
    },
    fontSize22: {
        fontSize: theme.palette.primary.text22,
        [theme.breakpoints.up("xs")]: {
            fontSize: theme.palette.primary.text8,
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: theme.palette.primary.text10,
        },
        [theme.breakpoints.up("md")]: {
            fontSize: theme.palette.primary.text12,
        },
        [theme.breakpoints.up("md_ld")]: {
            fontSize: theme.palette.primary.text15,
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: theme.palette.primary.text17,
        },
        [theme.breakpoints.up("lg_xl")]: {
            fontSize: theme.palette.primary.text20,
        },
        [theme.breakpoints.up("xl")]: {
            fontSize: theme.palette.primary.text22,
        },
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: "none",
        width: 450,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    container:{
        marginBottom:"10px"
    },
    AddSurc: {
        padding: "10px",
        borderBottom: "1px solid #BBBBBB",
        fontWeight: "700"
    },
}));

export default UseStyles;
