import React from "react";
import {TextField, Autocomplete} from "@mui/material";

type Props = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: string[];
};

const SearchBox: React.FC<Props> = ({label, value, onChange, options}) => {
    return(
        <Autocomplete
            freeSolo
            value={value}
            options={options}
            onInputChange={(_, newValue) => {
                onChange(newValue);
            }}
            renderInput={(params) => (<TextField {...params} label={label} variant="outlined" fullWidth/>)}
        ></Autocomplete>
    )
}

export default SearchBox;