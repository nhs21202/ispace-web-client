import { useContext } from "react";
import { AuthContext } from "./context";
import AuthProvider from "./Provider";
import type { AuthContextType } from "./context";

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
export type { AuthContextType };
