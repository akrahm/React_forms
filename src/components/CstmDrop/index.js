import React, { useState } from 'react';
import {
    Paper, InputBase, ClickAwayListener
} from '@material-ui/core';
import {
    ExpandLess, ExpandMore
} from '@material-ui/icons';
import clsx from 'clsx';
import UseStyle from './style';

function CstmDrop(props) {
    let {
        placeholder,
        selectvalue,
        listarr,
        returnvalue,
        width: cstmWidth,
    } = props;
    const classes = UseStyle();
    const [select, setSelect] = useState(false);
    const [dropvalue, setdropvalue] = useState(false);

    return (
        <ClickAwayListener onClickAway={() => {
            setdropvalue(false);
            setSelect(false);
        }}>
            <Paper
                elevation={0}
                component='form'
                style={{
                    width: cstmWidth,
                }}
                className={clsx(classes.search, {
                    [classes.selected]: select === true || dropvalue === true
                })}
                onClick={() => setdropvalue(prev => prev === true ? false : true)}
            >
                <InputBase
                    className={clsx(classes.input)}
                    placeholder={placeholder ? placeholder : 'Select limit'}
                    onClick={() => setSelect(true)}
                    style={{ color: selectvalue && 'black' }}
                    value={selectvalue?.label || selectvalue}
                />
                {dropvalue === true ?
                    <ExpandLess className={clsx(classes.iconButton)} />
                    :
                    <ExpandMore className={clsx(classes.iconButton)} />
                }
                <Paper elevation={5} component='form' style={{ visibility: dropvalue ? 'visible' : 'hidden' }} className={clsx(classes.search1)} >
                    {listarr?.map((el) => {
                        return (
                            <div key={el.label} onClick={() => {
                                if (selectvalue?.label === el.label || selectvalue === el.value);
                                else returnvalue(el);
                            }} className={clsx(classes.options, {
                                [classes.option2]: selectvalue?.label === el.label || selectvalue === el.value
                            })}>{el?.label}</div>
                        );
                    })}
                </Paper>
            </Paper>
        </ClickAwayListener>
    );
};

export default CstmDrop;