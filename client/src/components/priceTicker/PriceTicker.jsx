import { Grid } from "@mui/material";
import useChangeStatus from "../../userHooks/useChangeStatus";
import PriceTickerItem from "../priceTickerItem/PriceTickerItem";

const PriceTicker = ({
    ticker,
    exchange,
    price,
    change,
    change_percent,
    dividend,
    profitability,
    last_trade_time,
    className,
}) => {
    const priceChange = useChangeStatus(price);
    const percenChange = useChangeStatus(change_percent);
    const profitabilityChange = useChangeStatus(profitability);

    return (
        <Grid container justifyContent="center" alignItems="center">
            <PriceTickerItem value={ticker} classNames={className} />
            <PriceTickerItem value={exchange} />
            <PriceTickerItem value={price} attr={priceChange} />
            <PriceTickerItem value={change} />
            <PriceTickerItem value={change_percent} attr={percenChange} />
            <PriceTickerItem value={dividend} />
            <PriceTickerItem value={profitability} attr={profitabilityChange} />
            <PriceTickerItem value={last_trade_time.split("T")[0]} />
        </Grid>
    );
};

export default PriceTicker;
