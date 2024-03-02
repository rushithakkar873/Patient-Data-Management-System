import { ActionTypes } from './actionTypes';
import { GlobalState, GlobalStateAction } from "../types";

export const initialState: GlobalState = {
    patientProfile: {
        name: '',
        date_of_birth: null,
        age: null,
        gender: null,
        city: '',
        state: '',
        email: '',
        role: '',
    },
    token: null,
    isLoggedIn: false,
    medicalHistory: {
        _id: '',
        allergies: '',
        past_medical_history: '',
        family_medical_history: '',
        current_medication: '',
        vaccination_history: []
    },
    lifestyle: {
        _id: '',
        smoking: '',
        alcohol: '',
        sleep_time: ''
    }
};

export const globalStateReducer = (state: GlobalState, action: GlobalStateAction) => {
    switch (action.type) {
        case ActionTypes.SET_INITIAL_STATE:
            return {
                ...state,
                ...action.payload,
            };
        case ActionTypes.SET_PATIENT_PROFILE:
            return {
                ...state,
                patientProfile: action.payload,
            };
        case ActionTypes.UPDATE_PATIENT_PROFILE:
            return {
                ...state,
                patientProfile: action.payload,
            };
        case ActionTypes.UPDATE_MEDICAL_HISTORY:
            return {
                ...state,
                medicalHistory: action.payload,
            };
        case ActionTypes.UPDATE_LIFE_STYLE:
            return {
                ...state,
                lifeStyle: action.payload,
            };

        default:
            return state;
    }
};