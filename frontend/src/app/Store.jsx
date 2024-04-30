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
        PrevoyenceSocialeReducer
    }
})

export default Store;
