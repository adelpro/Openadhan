import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
export const AdhanParamContext = createContext({});
AdhanParamContext.displayName = "AdhanParamContext";
export function AdhanParamProvider({ children }) {
  const [madhab, setmadhab] = useLocalStorage("madhab", "Shafi");
  const [calculationMethod, setcalculationMethod] = useLocalStorage(
    "CalculationMethod",
    "MuslimWorldLeague"
  );
  const [lan, setlan] = useLocalStorage("language", "English");
  return (
    <div>
      <AdhanParamContext.Provider
        value={{
          calculationMethod,
          setcalculationMethod,
          madhab,
          setmadhab,
          lan,
          setlan,
        }}
      >
        {children}
      </AdhanParamContext.Provider>
    </div>
  );
}
