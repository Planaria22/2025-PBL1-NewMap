import Title from "../components/elements/title";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import { useState, useId } from "react";

const imageMap: Record<string, string> = {
  全体: "/images/maps/zentai.png",
  管理棟: "/images/maps/kanri.png",
  教養棟: "/images/maps/kyouyou.png",
  専門棟1: "/images/maps/senmon1.png",
  専門棟2: "/images/maps/senmon2.png",
  テクノセンター: "/images/maps/techno.png",
  工場棟: "/images/maps/koujou.png",
  図書館: "/images/maps/toshokan.png",
};

const MapPage = () => {
  const [selected, setSelected] = useState("全体");
  const labelId = useId();

  return (
    <div className="flex flex-col w-screen items-center gap-6 px-4">
      <Title>地図</Title>
      <div className="text-black text-center text-xl m-2">
        建物の詳細を見ることができます。
      </div>
      <FormControl fullWidth>
        <InputLabel id={labelId}>建物を選択</InputLabel>
        <Select
          labelId={labelId}
          value={selected}
          label="表示エリア"
          onChange={(e) => setSelected(e.target.value)}
        >
          {Object.keys(imageMap).map((key) => (
            <MenuItem key={key} value={key}>
              {key}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <div className="w-full max-w-3xl">
        <img
          src={imageMap[selected]}
          alt={selected}
          className="w-full rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default MapPage;
