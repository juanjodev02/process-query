import { verificarCedula } from 'udv-ec';


export const validateEcuadorianID = (id: string) => verificarCedula(id);