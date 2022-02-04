import { Provider } from "react-redux";
import store from "./store/store.js";

import Container from "@mui/material/Container";

import Header from "./components/header/Header.jsx";
import PriceTickerBar from "./components/priceTickerBar/PriceTickerBar";
import "./App.css";

const App = () => {
    return (
        <Provider store={store}>
            <Container>
                <div className="App">
                    <Header title="Price tickers data" />
                    <PriceTickerBar />
                </div>
            </Container>
        </Provider>
    );
};

export default App;
