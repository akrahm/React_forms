import React from "react";
import clsx from "clsx";
import { Tooltip } from "@material-ui/core";
import { InfoOutlined } from "@material-ui/icons";
import useStyles from "./style";

export default function ModalIcon(props) {
    const data = props?.data;
    const iserror = props?.iserror;
    const classes = useStyles();
    return (
        <>
            {data &&
                <Tooltip
                    title={
                        <div>
                            {Array.isArray(data) && data.map(el => {
                                return <div key={el}>{el}</div>;
                            })}
                            {!Array.isArray(data) && <div>{data}</div>}
                        </div>
                    }
                    placement='top-end'
                    arrow
                >
                    <InfoOutlined style={{ marginLeft: "10px" }} className={clsx(classes.fontSize20,{
                        [classes.error]:iserror
                    })} />
                </Tooltip>}
            {!data && <InfoOutlined style={{ marginLeft: "10px" }} className={clsx(classes.fontSize20)} />}
        </>
    );
}