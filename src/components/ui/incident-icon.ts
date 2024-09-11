import m, { FactoryComponent } from "mithril";
import plaag from "../../assets/icons/crisis_types/plagen-en-dierziekten.svg";
import epidemie from "../../assets/icons/crisis_types/verstoring-ziektegolf.svg";
import spoor from "../../assets/icons/crisis_types/spoorvervoerincidenten.svg";
// import winter from "../../assets/ocha/snowfall.svg";
// import buien from "../../assets/ocha/heavy-rain.svg";
// import hittegolf from "../../assets/ocha/heatwave.svg";
// import koudegolf from "../../assets/ocha/cold-wave.svg";
// import storm from "../../assets/ocha/storm.svg";
import aardbeving from "../../assets/icons/crisis_types/aardbeving.svg";
import natuurbrand from "../../assets/icons/crisis_types/natuurbrand.svg";
import overstroming from "../../assets/ocha/flood.svg";
// import rivier from "../../assets/ocha/";
// import vloedgolf from "../../assets/ocha/flash-flood.svg";
import drinkwater from "../../assets/icons/crisis_types/verstoring-drinkwatervoorziening.svg";
import elektriciteit from "../../assets/icons/crisis_types/verstoring-elektriciteitsvoorziening.svg";
import gas from "../../assets/icons/crisis_types/verstoring-gasvoorziening.svg";
import riool from "../../assets/icons/crisis_types/verstoring-riool-en-afvalwaterzuivering.svg";
import voedsel from "../../assets/icons/crisis_types/verstoring-voedselvoorziening.svg";
// import cybercrime from "../../assets/icons/crisis_types/cybercrime.svg";
import ict from "../../assets/icons/crisis_types/verstoring-telecommunicatie-en-ict.svg";
import water from "../../assets/ocha/drowned.svg";
// import tunnel from "../../assets/ocha/tunnel.svg";
import luchtvaart from "../../assets/icons/crisis_types/luchtvaartincidenten.svg";
import scheepvaart from "../../assets/icons/crisis_types/scheepvaartincidenten.svg";
import wegverkeer from "../../assets/icons/crisis_types/wegvervoerincidenten.svg";
import stof from "../../assets/icons/crisis_types/incident-met-gevaarlijke-stoffen.svg";
// import giftig from "../../assets/ocha/detergent.svg";
import explosie from "../../assets/ocha/mine.svg";
// import brandstichting from "../../assets/icons/noun-lighter-2109464.svg";
// import technologicalDisaster from "../../assets/ocha/technological-disaster.svg";
// import sabotage from "../../assets/icons/noun-destroy-4380930.svg";
import instorting from "../../assets/ocha/building-facility-affected.svg";
import brand from "../../assets/icons/crisis_types/gebouwbranden-en-instorting.svg";
// import paniek from "../../assets/ocha/group.svg";
// import vandalisme from "../../assets/icons/noun-graffiti-3194142.svg";
import voo from "../../assets/icons/crisis_types/verstoring-openbare-orde.svg";
// import onrust from "../../assets/ocha/affected-population.svg";
import afval from "../../assets/icons/crisis_types/verstoring-afvalverwerking.svg";
import help from "../../assets/ocha/help.svg";
import { IncidentType } from "../../template/llf";

export const IncidentIcon: FactoryComponent<{
  incident?: IncidentType;
  label?: string;
  className?: string;
}> = () => {
  const incidentToSvg = (incident?: IncidentType) => {
    switch (incident) {
      case "plaag":
      case "dierziekte":
        return plaag;
      case "infectieziekte":
        return epidemie;
      case "aardbeving":
        return aardbeving;
      case "natuurbrand":
        return natuurbrand;
      case "overstroming":
      case "wateroverlast":
        return overstroming;
      case "drinkwater":
        return drinkwater;
      case "elektriciteit":
        return elektriciteit;
      case "gas":
        return gas;
      case "riool":
        return riool;
      case "voedsel":
        return voedsel;
      case "ict":
        return ict;
      case "waterincident":
        return water;
      case "luchtvaart":
        return luchtvaart;
      case "waterincident":
        return scheepvaart;
      case "spoor":
        return spoor;
      case "wegverkeer":
        return wegverkeer;
      case "stof":
        return stof;
      case "explosie":
        return explosie;
      case "instorting":
        return instorting;
      case "brand":
        return brand;
      case "voo":
        return voo;
      case "afval":
        return afval;
      default:
        return help;
    }
  };

  return {
    view: ({ attrs: { incident, label, className } }) => {
      const src = incidentToSvg(incident);
      return m("img", {
        src,
        alt: label || incident,
        width: 32,
        height: 32,
        className,
        style: "margin-right: 12px",
      });
    },
  };
};
