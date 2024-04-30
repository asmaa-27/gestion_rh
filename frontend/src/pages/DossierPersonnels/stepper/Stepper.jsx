import  { useState } from "react";
import "./Stepper.css";
import { TiTick } from "react-icons/ti";

import AdminInfoForm from "../forms/AdminInfoForm"
import AffectationForm from "../forms/AffectationForm"
import DiplomeForm from "../forms/DiplomeForm"
import FamilyInfoForm from "../forms/FamilyInfoForm";
import MouvementForm from "../forms/MouvementForm";
import NotationForm from "../forms/NotationForm";
import PersonalInfoForm from "../forms/PersonalInfoForm";
import PrevoyanceSocialeForm from "../forms/PrevoyanceSocialeForm"
import DocumentForm from "../forms/DocumentForm";
import SanctionForm from "../forms/SanctionForm";
import { useNavigate } from "react-router-dom";
const Stepper = () => {
 const steps = [" Personnels", " Familiales", " Administrative", "  Sociale Prev"," Notation"," Diplome"," Mouvements"," Affectations","Sanctions"," Documents"];
 const [currentStep, setCurrentStep] = useState(1);
 const [complete, setComplete] = useState(false);
 const navigate = useNavigate();

 const renderForm = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoForm />;
      case 2:
        return <FamilyInfoForm />;
      case 3:
        return <AdminInfoForm />;
      case 4:
        return <PrevoyanceSocialeForm />;
      case 5:
      return <NotationForm />;
      case 6:
        return <DiplomeForm />;
      case 7:
        return <MouvementForm />;
      case 8:
        return <AffectationForm />;
      case 9:
        return <SanctionForm/>
      case 10:
        return <DocumentForm/>
      default:
        return null;
    }
 };

 return (
    <main className="flex flex-col gap-8 h-screen ">
     <div className="flex flex-col sm:flex-row justify-between items-center  mt-16) ">


        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
      <div>
 {renderForm()}
 <div className="flex items-center justify-center mb-24 space-x-8">

      <button
        className="btn btn-previous"
        onClick={() => {
          currentStep > 1 ? setCurrentStep((prev) => prev - 1) : null;
        }}
        disabled={currentStep === 1}
      >
        Previous
      </button>

      {!complete && (
          <button
            className={`btn btn-next ${currentStep === steps.length ? "btn-finish" : ""}`}
            onClick={() => {
              if (currentStep === steps.length) {
                setComplete(true);
                navigate('/AffichageFonctionnaires');
              } else {
                setCurrentStep((prev) => prev + 1);
              }
            }}
            disabled={false}
          >
            {currentStep === steps.length ? "Finish" : "Next"}
          </button>
        )}
    </div>
 </div>
</main>

 );
};

export default Stepper;
