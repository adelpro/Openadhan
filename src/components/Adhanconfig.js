import {
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import * as React from "react";
import logo from "../assets/logo.svg";
import { useContext } from "react";
import { Box } from "@mui/system";
import { AdhanParamContext } from "../context/AdhanParamContext";
export default function Adhanconfig() {
  const { lan: language } = useContext(AdhanParamContext);
  const content = {
    English: {
      title: "Adhan Configuration",
      madhab: "Madhab",
      hanafi: "Hanafi",
      shafi: "Shafi",
      calculationMethod: "Calculation method",
      MuslimWorldLeague: "MuslimWorldLeague",
      Egyptian: "Egyptian",
      UmmAlQura: "UmmAlQura",
      Dubai: "Dubai",
      MoonsightingCommittee: "MoonsightingCommittee",
      Kuwait: "Kuwait",
      Qatar: "Qatar",
      Singapore: "Singapore",
      Tehran: "Tehran",
      Turkey: "Turkey",
    },
    Arabic: {
      title: "إعدادات الأذان",
      madhab: "المذهب",
      hanafi: "حنفي",
      shafi: "شافعي",
      calculationMethod: "طريقة الحساب",
      MuslimWorldLeague: "رابطة العالم الإسلامي",
      Egyptian: "مصري",
      UmmAlQura: "أم القرى",
      Dubai: "دبي",
      MoonsightingCommittee: "لجنة الهلال",
      Kuwait: "الكويت",
      Qatar: "قطر",
      Singapore: "سنغافورا",
      Tehran: "طهران",
      Turkey: "تركيا",
    },
  };
  const { madhab, setmadhab, calculationMethod, setcalculationMethod } =
    useContext(AdhanParamContext);
  return (
    <div className="card">
      <img src={logo} alt="logo" />
      <h2>{content[`${language}`][`title`]}</h2>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
        }}
      >
        <FormControl component="fieldset">
          <FormLabel component="legend">
            {content[`${language}`][`madhab`]}
          </FormLabel>
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
              label={content[`${language}`][`hanafi`]}
            />
            <FormControlLabel
              value="Shafi"
              control={<Radio />}
              label={content[`${language}`][`shafi`]}
            />
          </RadioGroup>
        </FormControl>
        <Divider />
        <FormControl>
          <InputLabel id="CalculationMethod">
            {content[`${language}`][`calculationmethod`]}
          </InputLabel>
          <Select
            sx={{ minWidth: 200 }}
            labelId="CalculationMethod-label"
            id="CalculationMethod-select"
            value={calculationMethod}
            label="CalculationMethod"
            onChange={(e) => setcalculationMethod(e.target.value)}
          >
            <MenuItem value={"MuslimWorldLeague"}>
              {content[`${language}`][`MuslimWorldLeague`]}
            </MenuItem>
            <MenuItem value={"Egyptian"}>
              {content[`${language}`][`Egyptian`]}
            </MenuItem>
            <MenuItem value={"Karachi"}>
              {content[`${language}`][`Karachi`]}
            </MenuItem>
            <MenuItem value={"UmmAlQura"}>
              {content[`${language}`][`UmmAlQura`]}
            </MenuItem>
            <MenuItem value={"Dubai"}>
              {content[`${language}`][`Dubai`]}
            </MenuItem>
            <MenuItem value={"MoonsightingCommittee"}>
              {content[`${language}`][`MoonsightingCommittee`]}
            </MenuItem>
            <MenuItem value={"Kuwait"}>
              {content[`${language}`][`Kuwait`]}
            </MenuItem>
            <MenuItem value={"Qatar"}>{[`${language}`][`Qatar`]}</MenuItem>
            <MenuItem value={"Singapore"}>
              {content[`${language}`][`Singapore`]}
            </MenuItem>
            <MenuItem value={"Tehran"}>
              {content[`${language}`][`Tehran`]}
            </MenuItem>
            <MenuItem value={"Turkey"}>
              {content[`${language}`][`Turkey`]}
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
