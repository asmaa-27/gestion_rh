import { useState, useEffect } from "react";
import { FaExclamationCircle, FaRegCheckCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addInfoAdmin } from "../../../features/AdminInfoSlice";

const AdminInfoForm = () => {
    const dispatch = useDispatch();
    const [additionalFields, setAdditionalFields] = useState(false);
    const [formData, setFormData] = useState({
        cin: "",
        ppr: 0,
        numero_poste_budgetaire: 0,
        date_recrutement: "",
        diplome_recrutement: "",
        administration_recrutement: "",
        date_titularisation: "",
        grade: "",
        anciennete_grade: "",
        echelle: "",
        anciennete_echelle: "",
        echelon: 0,
        anciennete_echelon: 0,
        indice: 0,
        statut_administratif: "",
        situation_administrative: "",
        fin_periode_detachement: "",
        integre_apres_detachement: 0,
        integre_apres_mise_disposition: 0,
        affectation: "",
        fonction: "",
        poste: "",
        type_sortie: "",
        date_sortie: "",
        administration_accueil: "",
        statut_activite: "",
    });

    const handleChange = (e) => {
        const { name, value, type  } = e.target;
        let newValue = value; // Default behavior

        if (type === "radio") {
            newValue = value === "true" ? 1 : 0;
        }

        const newFormData = { ...formData };
        newFormData[name] = newValue;
        setFormData(newFormData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            cin: "",
            ppr: 0,
            numero_poste_budgetaire: 0,
            date_recrutement: "",
            diplome_recrutement: "",
            administration_recrutement: "",
            date_titularisation: "",
            grade: "",
            anciennete_grade: "",
            echelle: "",
            anciennete_echelle: "",
            echelon: 0,
            anciennete_echelon: 0,
            indice: 0,
            statut_administratif: "",
            situation_administrative: "",
            fin_periode_detachement: "",
            integre_apres_detachement: 0,
            integre_apres_mise_disposition: 0,
            affectation: "",
            fonction: "",
            poste: "",
            type_sortie: "",
            date_sortie: "",
            administration_accueil: "",
            statut_activite: "",
        });
        dispatch(addInfoAdmin(formData));

    };

    useEffect(() => {
        const calculateDifferenceInYears = (startDate, endDate) => {
            const start = new Date(startDate);
            const end = new Date(endDate);

            // Ensure both dates are valid
            if (!start || !end) return;

            // Calculate the difference in milliseconds between the two dates
            var diff = (end.getTime() - start.getTime()) / 1000;
            // Convert the difference from milliseconds to days
            diff /= 60 * 60 * 24;
            // Calculate the approximate number of years by dividing the difference in days by the average number of days in a year (365.25)
            return Math.abs(Math.round(diff / 365.25));
        };

        // Check if date_recrutement has been set
        if (formData.date_recrutement) {
            const yearsDifference = calculateDifferenceInYears(
                formData.date_recrutement,
                new Date().toISOString()
            );
            console.log("Difference in years:", yearsDifference);
            if (yearsDifference > 3) {
                setAdditionalFields(true);
            } else {
                setAdditionalFields(false);
            }
        }
    }, [formData.date_recrutement]);

    return (
        <>
            <div className="flex items-center justify-center p-4 mt-4 text-2xl font-bold ">
                <h1>Les informations administratives :</h1>
            </div>

            <div className="flex items-center justify-center min-h-screen">
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 mb-5 block w-1/2 p-2 border border-gray-300 rounded-md"
                >
                    <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950 ">
                        <label
                            htmlFor="cin"
                            className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            CIN
                        </label>
                        <input
                            type="text"
                            name="cin"
                            id="cin"
                            value={formData.cin}
                            onChange={handleChange}
                            className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950">
                        <label
                            htmlFor="ppr"
                            className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            {" "}
                            Numéro immatriculation :
                        </label>
                        <input
                            type="number"
                            name="ppr"
                            id="ppr"
                            value={formData.ppr}
                            onChange={handleChange}
                            className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950">
                        <label
                            htmlFor="numero_poste_budgetaire"
                            className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            N° poste budgétaire :
                        </label>
                        <input
                            type="number"
                            name="numero_poste_budgetaire"
                            id="numero_poste_budgetaire"
                            value={formData.numero_poste_budgetaire}
                            onChange={handleChange}
                            className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950">
                        <label
                            htmlFor="date_recrutement"
                            className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            Date de recrutement :
                        </label>
                        <input
                            type="date"
                            name="date_recrutement"
                            id="date_recrutement"
                            value={formData.date_recrutement}
                            onChange={handleChange}
                            className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950">
                        <label
                            htmlFor="diplome_recrutement"
                            className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            Diplôme de recrutement :
                        </label>
                        <input
                            type="text"
                            name="diplome_recrutement"
                            id="diplome_recrutement"
                            value={formData.diplome_recrutement}
                            onChange={handleChange}
                            className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950">
                        <label
                            htmlFor="administration_recrutement"
                            className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            Administration de recrutement :
                        </label>
                        <input
                            type="text"
                            name="administration_recrutement"
                            id="administration_recrutement"
                            value={formData.administration_recrutement}
                            onChange={handleChange}
                            className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950">
                        <label
                            htmlFor="date_titularisation"
                            className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            Date de titularisation :
                        </label>
                        <input
                            type="date"
                            name="date_titularisation"
                            id="date_titularisation"
                            value={formData.date_titularisation}
                            onChange={handleChange}
                            className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950">
                        <label
                            htmlFor="grade"
                            className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            Grade :
                        </label>
                        <input
                            type="number"
                            name="grade"
                            id="grade"
                            value={formData.grade}
                            onChange={handleChange}
                            className=":mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950">
                        <label
                            htmlFor="anciennete_grade"
                            className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            Ancienneté grade :
                        </label>
                        <input
                            type="number"
                            name="anciennete_grade"
                            id="anciennete_grade"
                            value={formData.anciennete_grade}
                            onChange={handleChange}
                            className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950">
                        <label
                            htmlFor="echelle"
                            className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            Echelle :
                        </label>
                        <input
                            type="number"
                            name="echelle"
                            id="echelle"
                            value={formData.echelle}
                            onChange={handleChange}
                            className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950">
                        <label
                            htmlFor="anciennete_echelle"
                            className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            Ancienneté échelle :
                        </label>
                        <input
                            type="number"
                            name="anciennete_echelle"
                            id="anciennete_echelle"
                            value={formData.anciennete_echelle}
                            onChange={handleChange}
                            className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950">
                        <label
                            htmlFor="echelon"
                            className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            echelon :
                        </label>
                        <input
                            type="number"
                            name="echelon"
                            id="echelon"
                            value={formData.echelon}
                            onChange={handleChange}
                            className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950">
                        <label
                            htmlFor="anciennete_echelon"
                            className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            Ancienneté échelon :
                        </label>
                        <input
                            type="number"
                            name="anciennete_echelon"
                            id="anciennete_echelon"
                            value={formData.anciennete_echelon}
                            onChange={handleChange}
                            className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950">
                        <label
                            htmlFor="indice"
                            className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            Indice :
                        </label>
                        <input
                            type="number"
                            name="indice"
                            id="indice"
                            value={formData.indice}
                            onChange={handleChange}
                            className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950">
                        <label
                            htmlFor="statut_administratif"
                            className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            Statut administrative :
                        </label>
                        <input
                            type="text"
                            name="statut_administratif"
                            id="statut_administratif"
                            value={formData.statut_administratif}
                            onChange={handleChange}
                            className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950">
                        <label
                            htmlFor="situation_administrative"
                            className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            Situation administrative :
                        </label>
                        <select
                            name="situation_administrative"
                            id="situation_administrative"
                            value={formData.situation_administrative}
                            onChange={handleChange}
                            className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Sélectionnez un choix :</option>
                            <option value="enFonction">En fonction</option>
                            <option value="detacheEntrant">
                                Détaché entrant
                            </option>
                            <option value="detacheSortant">
                                Détaché sortant
                            </option>
                        </select>
                    </div>
                    <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950 ">
                        <label
                            htmlFor="fin_periode_detachement"
                            className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            fin_periode_detachement
                        </label>
                        <input
                            type="date"
                            name="fin_periode_detachement"
                            id="fin_periode_detachement"
                            value={formData.fin_periode_detachement}
                            onChange={handleChange}
                            className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    {additionalFields && (<>
                      <div className="bg-white shadow-md rounded-lg m-6 p-6 dark:bg-primary-950">
                        <label className="block text-sm font-medium text-gray-700 dark:text-white">
                            Intégré après détachement
                        </label>
                        <div className="flex items-center space-x-8">
                            <input
                                type="radio"
                                id="integre_apres_detachement_true"
                                name="integre_apres_detachement"
                                value="true"
                                checked={
                                    formData.integre_apres_detachement === 1
                                }
                                onChange={handleChange}
                                className="form-radio text-blue-500"
                            />
                            <label
                                htmlFor="integre_apres_detachement_true"
                                className="text-sm text-gray-700 dark:text-white"
                            >
                                true
                            </label>
                            <input
                                type="radio"
                                id="integre_apres_detachement_false"
                                name="integre_apres_detachement"
                                value="false"
                                checked={
                                    formData.integre_apres_detachement === 0
                                }
                                onChange={handleChange}
                                className="form-radio text-blue-500"
                            />
                            <label
                                htmlFor="integre_apres_detachement_false"
                                className="text-sm text-gray-700 dark:text-white"
                            >
                                false
                            </label>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg m-6 p-6 dark:bg-primary-950">
                        <label className="block text-sm font-medium text-gray-700 dark:text-white">
                            Intégré après mise disposition
                        </label>
                        <div className="flex items-center space-x-8">
                            <input
                                type="radio"
                                id="integre_apres_mise_disposition_true"
                                value="true"
                                name="integre_apres_mise_disposition"
                                checked={
                                    formData.integre_apres_mise_disposition ===
                                    1
                                }
                                onChange={handleChange}
                                className="form-radio text-blue-500"
                            />
                            <label
                                htmlFor="integre_apres_mise_disposition_true"
                                className="text-sm text-gray-700 dark:text-white"
                            >
                                true
                            </label>
                            <input
                                type="radio"
                                id="integre_apres_mise_disposition_false"
                                value="false"
                                name="integre_apres_mise_disposition"
                                checked={
                                    formData.integre_apres_mise_disposition ===
                                    0
                                }
                                onChange={handleChange}
                                className="form-radio text-blue-500"
                            />
                            <label
                                htmlFor="integre_apres_mise_disposition_false"
                                className="text-sm text-gray-700 dark:text-white"
                            >
                                false
                            </label>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950 ">
                        <label
                            htmlFor="affectation"
                            className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            affectation
                        </label>

                        <select
                            name="affectation"
                            id="affectation"
                            value={formData.affectation}
                            onChange={handleChange}
                            className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Sélectionnez un choix :</option>
                            <option value="divisions3">Divisions3</option>
                            <option value="cabinet1">cabinet1</option>
                            <option value="secrétariat général2">
                                secrétariat général2
                            </option>
                            <option value="annexes6">annexes6</option>
                            <option value="cercles5">cercles5</option>
                            <option value="administratives">
                                administratives
                            </option>
                            <option value="service_ou_bureau4">
                                service ou bureau4
                            </option>
                        </select>
                    </div>

                    <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950 ">
                        <label
                            htmlFor="fonction"
                            className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            fonction
                        </label>

                        <select
                            name="fonction"
                            id="fonction"
                            value={formData.fonction}
                            onChange={handleChange}
                            className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Sélectionnez un choix :</option>
                            <option value="chef_de_division">
                                chef de division
                            </option>
                            <option value="chef_de_service">
                                chef_de_service
                            </option>
                            <option value="sans_fonction">sans fonction</option>
                        </select>
                    </div>

                    <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950 ">
                        <label
                            htmlFor="poste"
                            className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            poste
                        </label>
                        <input
                            type="textarea"
                            name="poste"
                            id="poste"
                            value={formData.poste}
                            onChange={handleChange}
                            className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950 ">
                        <label
                            htmlFor="type_sortie"
                            className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            type de sortie
                        </label>
                        <input
                            type="text"
                            name="type_sortie"
                            id="type_sortie"
                            value={formData.type_sortie}
                            onChange={handleChange}
                            className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950 ">
                        <label
                            htmlFor="date_sortie"
                            className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            date de sortie
                        </label>
                        <input
                            type="date"
                            name="date_sortie"
                            id="date_sortie"
                            value={formData.date_sortie}
                            onChange={handleChange}
                            className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    </>)}

                    <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950 ">
                        <label
                            htmlFor="administration_accueil"
                            className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            administration_accueil
                        </label>
                        <input
                            type="text"
                            name="administration_accueil"
                            id="administration_accueil"
                            value={formData.administration_accueil}
                            onChange={handleChange}
                            className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950 ">
                        <label
                            htmlFor="statut_activite"
                            className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            statut activite
                        </label>
                        <input
                            type="text"
                            name="statut_activite"
                            id="statut_activite"
                            value={formData.statut_activite}
                            onChange={handleChange}
                            className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="rounded-lg m-6 p-6 flex items-center justify-start space-x-4">
                        <div className="flex items-center">
                            <FaExclamationCircle className="text-red-500 mr-2 text-2xl" />
                            <span className="text-red-500 font-bold">
                                Veuillez vérifier les informations avant de
                                continuer
                            </span>
                            <button className="bg-cyan-400 text-white px-6 py-3 rounded ml-4 relative flex">
                                <span className="pr-4">Soumettre</span>
                                <span className="inset-0 flex items-center justify-end pr-4">
                                    <FaRegCheckCircle className="text-2xl" />
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AdminInfoForm;
