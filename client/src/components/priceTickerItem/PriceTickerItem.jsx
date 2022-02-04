import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Item = styled(Grid)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    margin: 5,
    borderRadius: 3,
    position: "relative",
}));

const useStyles = makeStyles({
    equal: {
        background: "#FFF",
    },
    increase: {
        background: "#3A6A9B",
    },
    decrease: {
        background: "#EF9A9A",
    },
    arrow: {
        position: "absolute",
        right: "3px",
        bottom: "7px",
    },
});

const PriceTickerItem = ({ value, attr, classNames }) => {
    const classes = useStyles();
    return (
        <Item item xs={1} className={`${classes[attr]} ${classNames}`}>
            {value}
            {attr === "increase" && <ArrowUpwardIcon className={classes.arrow} />}
            {attr === "decrease" && <ArrowDownwardIcon className={classes.arrow} />}
        </Item>
    );
};

export default PriceTickerItem;
