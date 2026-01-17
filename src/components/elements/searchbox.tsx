import React from "react";
import { TextField, Autocomplete } from "@mui/material";

type Room = {
  id: string;
  name: string;
  floor: number;
  building: string;
};

type Props = {
  label: string;
  value: Room | null;
  inputValue: string;
  onChange: (room: Room | null) => void;
  onInputChange: (text: string) => void;
  options: Room[];
};

const SearchBox: React.FC<Props> = ({label, value, inputValue, onChange, onInputChange, options}) => {
  return (
    <Autocomplete
    freeSolo
    options={options}
    value={value}
    inputValue={inputValue}
    getOptionLabel={(option) =>
      typeof option === "string" ? option : option.name
    }
    isOptionEqualToValue={(option, value) =>
      option.id === value.id
    }
    onChange={(_, newValue) => {
    // 候補選択 or クリア
      onChange(typeof newValue === "string" ? null : newValue);
    }}
    onInputChange={(_, newInput) => {
      onInputChange(newInput);
    }}
    renderInput={(params) => (
      <TextField {...params} label={label} variant="outlined" fullWidth/>
    )}
    />
  );
};

export default SearchBox;
