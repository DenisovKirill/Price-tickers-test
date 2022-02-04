import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { io } from "socket.io-client";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { setData } from "../../store/actions/dataActions";
import PriceTicker from "../priceTicker/PriceTicker";

const ENDPOINT = "http://localhost:4000";

const useStyles = makeStyles({
    aapl: {
        background: "#666666",
    },
    googl: {
        background: "#ED161E",
    },
    msft: {
        background: "#737373",
    },
    amzn: {
        background: "#C26C03",
    },
    fb: {
        background: "#4267B2",
    },
    tsla: {
        background: "#E31937",
    },
});

const PriceTickerBar = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const { tickers } = useSelector(({ data: { tickers } }) => ({
        tickers,
    }));

    useEffect(() => {
        const socket = io(ENDPOINT);
        socket.emit("start");

        socket.on("ticker", (data) => {
            dispatch(setData(data));
        });
    }, []);

    const renderTicker = (arr) => {
        return arr.map((item, i) => {
            const {
                ticker,
                exchange,
                price,
                change,
                change_percent,
                dividend,
                last_trade_time,
                yield: profitability,
            } = item;
            return (
                <PriceTicker
                    key={i}
                    className={`${classes[ticker.toLowerCase()]}`}
                    ticker={ticker}
                    exchange={exchange}
                    price={price}
                    change={change}
                    change_percent={change_percent}
                    dividend={dividend}
                    profitability={profitability}
                    last_trade_time={last_trade_time}
                />
            );
        });
    };

    return (
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                {renderTicker(tickers)}
            </Grid>
    );
};

export default PriceTickerBar;
