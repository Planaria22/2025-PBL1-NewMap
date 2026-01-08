import {useState} from 'react';
import Toggle from '../components/elements/toggle';
import SearchBox from '../components/elements/searchbox';
import Title from '../components/elements/title';
import locationData from '../data/locations.json';
import ArrowDownward from "@mui/icons-material/ArrowDownward"
import {Button, CircularProgress} from "@mui/material"

const TopPage = () => {
    const [isChecked, setIsChecked] = useState('left');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const validateInputs = () => {
        if(!from || !to) {
            return "出発地と目的地を入力してください。"
        }
        if (from === to) {
            return "出発地と目的地が同じです。"
        }
        return ""
    }

    const handleSearch = async () => {
        const message = validateInputs();
        if (message) {
            setError(message);
            return;
        }
        setError("");
        setLoading(true);
        try {
            console.log("検索中", { from, to });
            await new Promise((resolve) => setTimeout(resolve, 1500));
        } finally {
            setLoading(false);
        }
    };

    const isDisabled = loading || !!validateInputs();

    return(
        <div className="flex flex-col w-screen items-center justify-center">
            <Title>ホーム(ルート検索)</Title>
            <p className="text-4xl text-center py-24 text-black">
                初めてご利用される方は<br /><a className="text-blue-700 underline" href="/guide">地図の見方</a>をご覧ください。
            </p>
            <Toggle
            value={isChecked}
            onChange={setIsChecked} />
            <p className="text-black">現在のトグル: {isChecked}</p>
            <div className="flex flex-col w-3/4 gap-4 my-8">
                <SearchBox
                label="出発地を入力"
                value={from}
                onChange={setFrom}
                options={locationData}
                />
                <ArrowDownward className="self-center" sx={{fontSize: 40, color: "black"}} />
                <SearchBox
                label="目的地を入力"
                value={to}
                onChange={setTo}
                options={locationData}
                />
            </div>
            {error && <p className="text-red-600">{error}</p>}
            <Button
            variant="contained"
            disabled={isDisabled}
            onClick={handleSearch}
            startIcon={loading ? <CircularProgress size={18} color="inherit" /> : null}>
                {loading ? "検索中..." : "検索"}
            </Button>
        </div>
    )
}
export default TopPage;