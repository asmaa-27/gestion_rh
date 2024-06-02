import { configureStore } from "@reduxjs/toolkit";
import FonctionnairesReducer from "../features/FontionnairesSlice"
import AdminInfoReducer from "../features/AdminInfoSlice";
import AffectationReducer from "../features/AffectationSlice";
import DiplomeReducer from "../features/DiplomeSlice";
import FamilyInfoReducer from "../features/FamilyInfoSlice";
import MouvementReducer from "../features/MouvementSlice";
import NotationReducer from "../features/NotationSlice";
import PersonalInfoReducer from "../features/PersonallInfoSlice"
import PrevoyenceSocialeReducer from "../features/PrevoyanceSocialleInfoSlice"
import DemandAbsenceReducer from "../features/DemandAbsenceSlice";
import FormationSlice from "../features/FormationSlice";
const Store=configureStore({
    reducer: {
        AdminInfoReducer,
        AffectationReducer,
        DiplomeReducer,
        FamilyInfoReducer,
        fonctionnaire:FonctionnairesReducer,
        MouvementReducer,
        NotationReducer,
        PersonalInfoReducer,
        PrevoyenceSocialeReducer,
        demandeAbsence:DemandAbsenceReducer,
        formation:FormationSlice
    }
})

export default Store;
