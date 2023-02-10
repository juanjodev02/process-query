export type Process = {
  id: string;
  processNumber: string;
  registryDate: string;
  infraction: string;
  defendant: string; // demandado
  plaintiff: string; // demandante
  jurisdictionDependency: string;
  actions: {
    id: string;
    title: string;
    history: {
      id: string;
      date: string;
      badgeLabel: string;
      content: string;
    }[]
  }[];
}

export type QueryResult = {
  id: string;
  processNumber: string;
  registryDate: string;
  infraction: string;
  defendant: string; // demandado
  plaintiff: string; // demandante
}[]

export const searchByIdentityNumber = async (identityNumber: string, options?:any): Promise<QueryResult> => {
  return new Promise((resolve) => setTimeout(() => resolve(
      [
        {
          id: 'dfsfe-234234-234234',
          processNumber: '123456789',
          plaintiff: 'John Doe',
          defendant: 'Jane Doe',
          infraction: 'Infraction 1',
          registryDate: '2020-01-01'
        },
        {
          id: 'dfsfe-234234-21343',
          processNumber: '123456789',
          plaintiff: 'John Doe',
          defendant: 'Jane Doe',
          infraction: 'Infraction 1',
          registryDate: '2020-01-01'
        },
        {
          id: 'dfsfe-2342323-sf2e23',
          processNumber: '987654321',
          plaintiff: 'Jane Doe',
          defendant: 'John Doe',
          infraction: 'Infraction 2',
          registryDate: '2020-01-01'
        }
      ]
  ), 2000))
};

export const getById = async (id: string, options?:any): Promise<Process> => {
  return new Promise((resolve) => setTimeout(() => resolve(
      {
        id: 'dfsfe-234234-234234',
        processNumber: '17230-2021-21144',
        plaintiff: 'RAFAEL VICENTE CORREA DELGADO',
        defendant: 'RAFAEL VICENTE CORREA DELGADO',
        infraction: 'PAGARE A LA ORDEN',
        registryDate: '2020-01-01',
        jurisdictionDependency: 'UNIDAD JUDICIAL CIVIL CON SEDE EN LA PARROQUIA IÑAQUITO DEL DISTRITO METROPOLITANO DE QUITO, PROVINCIA DE PICHINCHA',
        actions: [
          {
            id: 'dfsfe-234234-234234',
            title: 'Action 1',
            history: [
              {
                id: 'dfsfe-234234-234234',
                date: '22/02/2022 11:00',
                badgeLabel: 'RECEPCION DEL PROCESO',
                content: 'RAZON: Siento como tal que con fecha 24-01-2023, se me hizo entrega de la demanda que antecede con sus respectivos anexos descritos en el acta de sorteo. Realizados los trámites administrativos de formación de expediente, verificación de partes procesales, consignación de foliatura, etc., pasa ésta al señor Juez, para los fines de Ley.- Guayaquil, Enero 25 de 2023.-'
              },
              {
                id: 'dfsfe-234234-234234',
                date: '22/02/2022 11:00',
                badgeLabel: 'ACTA DE SORTEO',
                content: 'Recibido en la ciudad de Guayaquil el día de hoy, jueves 19 de enero de 2023, a las 14:39, el proceso de Civil, Tipo de procedimiento: Ejecutivo por Asunto: Cobro de pagaré a la orden, seguido por: Banco Pichincha Ca, en contra de: Baños Hernandez Jessica Daniela, Hernandez Correa Byron Rafael. Por sorteo de ley la competencia se radica en la UNIDAD JUDICIAL CIVIL CON SEDE EN EL CANTÓN GUAYAQUIL, conformado por Juez(a): Abogado Teran Matamoros Robert Paul. Secretaria(o): Plaza Macias Isidro Efren. Proceso número: 09332-2023-00819 (1) Primera InstanciaAl que se adjunta los siguientes documentos: 1) PETICIÓN INICIAL (ORIGINAL) 2) ADJUNTA UN PAGARE POR LA CANTIDAD DE USD$ 5.000.00 DÓLARES Y SU COPIA, LIQUIDACIÓN DE CARTERA, CONDICIONES Y COSTO TOTAL DEL CRÉDITO Y RUC DE LA PARTE ACTORA (ORIGINAL) 3) ADJUNTA UNA PROCURACIÓN JUDICIAL (COPIAS CERTIFICADAS/COMPULSA) 4) COPIA DE CREDENCIAL (COPIA SIMPLE) Total de fojas: 1RAUL EDUARDO CARRERA HIDALGO Responsable de sorteo'
              },
              {
                id: 'dfsfe-12434-234234',
                date: '22/02/2022 11:00',
                badgeLabel: 'ACTA DE SORTEO',
                content: 'Recibido en la ciudad de Guayaquil el día de hoy, jueves 19 de enero de 2023, a las 14:39, el proceso de Civil, Tipo de procedimiento: Ejecutivo por Asunto: Cobro de pagaré a la orden, seguido por: Banco Pichincha Ca, en contra de: Baños Hernandez Jessica Daniela, Hernandez Correa Byron Rafael. Por sorteo de ley la competencia se radica en la UNIDAD JUDICIAL CIVIL CON SEDE EN EL CANTÓN GUAYAQUIL, conformado por Juez(a): Abogado Teran Matamoros Robert Paul. Secretaria(o): Plaza Macias Isidro Efren. Proceso número: 09332-2023-00819 (1) Primera InstanciaAl que se adjunta los siguientes documentos: 1) PETICIÓN INICIAL (ORIGINAL) 2) ADJUNTA UN PAGARE POR LA CANTIDAD DE USD$ 5.000.00 DÓLARES Y SU COPIA, LIQUIDACIÓN DE CARTERA, CONDICIONES Y COSTO TOTAL DEL CRÉDITO Y RUC DE LA PARTE ACTORA (ORIGINAL) 3) ADJUNTA UNA PROCURACIÓN JUDICIAL (COPIAS CERTIFICADAS/COMPULSA) 4) COPIA DE CREDENCIAL (COPIA SIMPLE) Total de fojas: 1RAUL EDUARDO CARRERA HIDALGO Responsable de sorteo'
              }
            ]
          },
          {
            id: 'dfsfe-234234-124532',
            title: 'Action 1',
            history: [
              {
                id: 'dfsfe-234234-gh5645',
                date: '22/02/2022 11:00',
                badgeLabel: 'RECEPCION DEL PROCESO',
                content: 'RAZON: Siento como tal que con fecha 24-01-2023, se me hizo entrega de la demanda que antecede con sus respectivos anexos descritos en el acta de sorteo. Realizados los trámites administrativos de formación de expediente, verificación de partes procesales, consignación de foliatura, etc., pasa ésta al señor Juez, para los fines de Ley.- Guayaquil, Enero 25 de 2023.-'
              },
              {
                id: 'dfsfe-234234-dfghfg45',
                date: '22/02/2022 11:00',
                badgeLabel: 'ACTA DE SORTEO',
                content: 'Recibido en la ciudad de Guayaquil el día de hoy, jueves 19 de enero de 2023, a las 14:39, el proceso de Civil, Tipo de procedimiento: Ejecutivo por Asunto: Cobro de pagaré a la orden, seguido por: Banco Pichincha Ca, en contra de: Baños Hernandez Jessica Daniela, Hernandez Correa Byron Rafael. Por sorteo de ley la competencia se radica en la UNIDAD JUDICIAL CIVIL CON SEDE EN EL CANTÓN GUAYAQUIL, conformado por Juez(a): Abogado Teran Matamoros Robert Paul. Secretaria(o): Plaza Macias Isidro Efren. Proceso número: 09332-2023-00819 (1) Primera InstanciaAl que se adjunta los siguientes documentos: 1) PETICIÓN INICIAL (ORIGINAL) 2) ADJUNTA UN PAGARE POR LA CANTIDAD DE USD$ 5.000.00 DÓLARES Y SU COPIA, LIQUIDACIÓN DE CARTERA, CONDICIONES Y COSTO TOTAL DEL CRÉDITO Y RUC DE LA PARTE ACTORA (ORIGINAL) 3) ADJUNTA UNA PROCURACIÓN JUDICIAL (COPIAS CERTIFICADAS/COMPULSA) 4) COPIA DE CREDENCIAL (COPIA SIMPLE) Total de fojas: 1RAUL EDUARDO CARRERA HIDALGO Responsable de sorteo'
              },
              {
                id: 'dfsfe-234234-dfghf12325',
                date: '22/02/2022 11:00',
                badgeLabel: 'ACTA DE SORTEO',
                content: 'Recibido en la ciudad de Guayaquil el día de hoy, jueves 19 de enero de 2023, a las 14:39, el proceso de Civil, Tipo de procedimiento: Ejecutivo por Asunto: Cobro de pagaré a la orden, seguido por: Banco Pichincha Ca, en contra de: Baños Hernandez Jessica Daniela, Hernandez Correa Byron Rafael. Por sorteo de ley la competencia se radica en la UNIDAD JUDICIAL CIVIL CON SEDE EN EL CANTÓN GUAYAQUIL, conformado por Juez(a): Abogado Teran Matamoros Robert Paul. Secretaria(o): Plaza Macias Isidro Efren. Proceso número: 09332-2023-00819 (1) Primera InstanciaAl que se adjunta los siguientes documentos: 1) PETICIÓN INICIAL (ORIGINAL) 2) ADJUNTA UN PAGARE POR LA CANTIDAD DE USD$ 5.000.00 DÓLARES Y SU COPIA, LIQUIDACIÓN DE CARTERA, CONDICIONES Y COSTO TOTAL DEL CRÉDITO Y RUC DE LA PARTE ACTORA (ORIGINAL) 3) ADJUNTA UNA PROCURACIÓN JUDICIAL (COPIAS CERTIFICADAS/COMPULSA) 4) COPIA DE CREDENCIAL (COPIA SIMPLE) Total de fojas: 1RAUL EDUARDO CARRERA HIDALGO Responsable de sorteo'
              }
            ]
          },
        ]
      }
  ), 4000))
}