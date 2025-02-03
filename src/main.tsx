import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {OkrProvider} from "./providers/OkrProvider.tsx";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById("root")!).render(
    <StrictMode>

        <OkrProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </OkrProvider>

    </StrictMode>
);
