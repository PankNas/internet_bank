import React from "react";
import {AccountType} from "./types";

export const SubmitContext = React.createContext({onSubmit: (_acc:AccountType) => {}});
