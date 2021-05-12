import React from 'react';
import TextField from '@material-ui/core/TextField';

const Text = ({name,onChange}) => {
    return(
        <div>
        <TextField id="outlined-basic" label={name} variant="outlined" onChange={onChange}/>
        </div>
    )
}

export default Text;