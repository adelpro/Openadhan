import {
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select
} from "@mui/material";
import * as React from "react";
import logo from "../assets/logo.svg";
import { useContext } from "react";
import { Box } from "@mui/system";
import { AdhanParamContext } from "../context/AdhanParamContext";
export default function Adhanconfig() {
  const {
    madhab,
    setmadhab,
    calculationMethod,
    setcalculationMethod
  } = useContext(AdhanParamContext);
  return (
    <div className="card">
      <img src={logo} alt="logo" />
      <h2>Adhan Configuration</h2>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          p: 1,
          m: 1,
          bgcolor: "background.paper"
        }}
      >
        <FormControl component="fieldset">
          <FormLabel component="legend">Madhab</FormLabel>
          <RadioGroup
            row
            aria-label="Madhab"
            name="row-radio-buttons-group"
            value={madhab}
            onChange={(e) => setmadhab(e.target.value)}
          >
            <FormControlLabel
              value="Hanafi"
              control={<Radio />}
              label="Hanafi"
            />
            <FormControlLabel value="Shafi" control={<Radio />} label="Shafi" />
          </RadioGroup>
        </FormControl>
        <Divider />
        <FormControl>
          <InputLabel id="CalculationMethod">Calculation Method</InputLabel>
          <Select
            sx={{ minWidth: 200 }}
            labelId="CalculationMethod-label"
            id="CalculationMethod-select"
            value={calculationMethod}
            label="CalculationMethod"
            onChange={(e) => setcalculationMethod(e.target.value)}
          >
            <MenuItem value={"MuslimWorldLeague"}>MuslimWorldLeague</MenuItem>
            <MenuItem value={"Egyptian"}>Egyptian</MenuItem>
            <MenuItem value={"Karachi"}>Karachi</MenuItem>
            <MenuItem value={"UmmAlQura"}>UmmAlQura</MenuItem>
            <MenuItem value={"Dubai"}>Dubai</MenuItem>
            <MenuItem value={"MoonsightingCommittee"}>
              MoonsightingCommittee
            </MenuItem>
            <MenuItem value={"Kuwait"}>Kuwait</MenuItem>
            <MenuItem value={"Qatar"}>Qatar</MenuItem>
            <MenuItem value={"Singapore"}>Singapore</MenuItem>
            <MenuItem value={"Tehran"}>Tehran</MenuItem>
            <MenuItem value={"Turkey"}>Turkey</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
