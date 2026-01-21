import { useState } from 'react';
import Toggle from '../components/elements/toggle';
import SearchBox from '../components/elements/searchbox';
import Title from '../components/elements/title';
import PhotoShow from '../components/elements/photoshow';
import roomData from "../data/rooms.json";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import { Button, CircularProgress } from "@mui/material";
import { getViaImages } from '../components/elements/graph';
import type { ImgPath } from '../components/elements/graph';
import { Link } from 'react-router-dom';

type RouteType = 'left' | 'right';

type Room = {
  id: string;
  name: string;
  floor: number;
  building: string;
};

const TopPage = () => {
  const [isChecked, setIsChecked] = useState<RouteType>('left');
  const [from, setFrom] = useState<Room | null>(null);
  const [fromInput, setFromInput] = useState("");
  const [to, setTo] = useState<Room | null>(null);
  const [toInput, setToInput] = useState("");
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<ImgPath[]>([]);

  const validateInputs = () => {
    if (!from || !to) return "出発地と目的地を選択してください。";
    if (from.id === to.id) return "出発地と目的地が同じです。";
    return "";
  };

  const handleSearch = async () => {
    const message = validateInputs();
    if (message) {
      setError(message);
      return;
    }

    setError("");
    setLoading(true);

    try {
      const result = await getViaImages(
        isChecked,
        from!.id,
        to!.id
      );
      setImages(result);
    } catch {
      setError("ルート検索に失敗しました。");
    } finally {
      setLoading(false);
    }
  };

  const isDisabled = loading || !!validateInputs();

  return (
    <div className="flex flex-col w-screen items-center justify-center">
      <Title>ホーム(ルート検索)</Title>
      <p className="text-4xl text-center py-24 text-black">
        初めてご利用される方は<br />
        <Link to="/guide" className="text-blue-700 underline">
          地図の見方
        </Link>
        をご覧ください。
      </p>

      <Toggle value={isChecked} onChange={setIsChecked} />

      <div className="flex flex-col w-3/4 gap-4 my-8">
        <SearchBox
          label="出発地を入力"
          value={from}
          inputValue={fromInput}
          onChange={setFrom}
          onInputChange={setFromInput}
          options={roomData}
        />

        <ArrowDownward className="self-center" sx={{ fontSize: 40, color: "black" }} />

        <SearchBox
          label="目的地を入力"
          value={to}
          inputValue={toInput}
          onChange={setTo}
          onInputChange={setToInput}
          options={roomData}
        />
      </div>

      {error && <p className="text-red-600">{error}</p>}

      <Button
        variant="contained"
        disabled={isDisabled}
        onClick={handleSearch}
        startIcon={loading ? <CircularProgress size={18} color="inherit" /> : null}
      >
        {loading ? "検索中..." : "検索"}
      </Button>

      <div className="my-8">
        {loading ? (
          <CircularProgress />
        ) : (
          <PhotoShow images={images} />
        )}
      </div>
    </div>
  );
};

export default TopPage;
