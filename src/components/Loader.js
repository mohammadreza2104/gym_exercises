import React from 'react';
import {Stack} from "@mui/material";
import {InfinitySpin} from "react-loader-spinner";

const Loader = () => {
    return (
        <Stack direction="row" justifyContent="center" alignContent="ceter" width="100%">
            <InfinitySpin color="gray"  width="50px"/>

        </Stack>
    );
};

export default Loader;