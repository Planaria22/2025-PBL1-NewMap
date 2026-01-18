import { ToggleButton, ToggleButtonGroup } from '@mui/material';

type RouteType = 'left' | 'center' | 'right';
type Props = {
    value: RouteType;
    onChange: (value: RouteType) => void;
}

const Toggle: React.FC<Props> = ({value, onChange}) => {
  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    newCheck: RouteType | null,
  ) => {
    if (newCheck !== null) {
      onChange(newCheck);
    }
  };
  
  return(
    <ToggleButtonGroup
      color="primary"
      value={value}
      exclusive
      onChange={handleChange}
      aria-label="Platform">
      <ToggleButton value="left">最短</ToggleButton>
      <ToggleButton value="center">避難</ToggleButton>
      <ToggleButton value="right">バリアフリー</ToggleButton>
    </ToggleButtonGroup>
  )
}
export default Toggle;