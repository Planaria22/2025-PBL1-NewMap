import { ToggleButton, ToggleButtonGroup } from '@mui/material';

type Props = {
    value: string;
    onChange: (value: string) => void;
}

const Toggle: React.FC<Props> = ({value, onChange}) => {
    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newCheck: string,
    ) => {
        if (newCheck !== null){
            onChange(newCheck);
        }
    };
    
    return(
        <>
        <ToggleButtonGroup
            color="primary"
            value={value}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
        >
            <ToggleButton value="left">最短</ToggleButton>
            <ToggleButton value="center">避難</ToggleButton>
            <ToggleButton value="right">バリアフリー</ToggleButton>
        </ToggleButtonGroup>
        </>
    )
}
export default Toggle;