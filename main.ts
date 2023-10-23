
import { IFlight, IPassenger } from "./interfaces/IFuncion";

const vuelos: IFlight[] = [
    {
        id: 1,
        number: 42,
        from: "Quito",
        to: "Guayaquil",
        capacity: 200,
        passenger: [
            {
                id: 1,
                passportNumber: "AB298",
                gender: "Masculino",
                address: "Calle 12, Manta",
                flighId: 1
            },
            {
                id: 2,
                passportNumber: "CD789012",
                gender: "Femenino",
                address: "Calle 456, Ciudad Rosario",
                flighId: 1
            }
        ]
    },
    {
        id: 2,
        number: 456,
        from: "Bogota",
        to: "Cali",
        capacity: 150,
        passenger: [
            {
                id: 3,
                passportNumber: "EF345678",
                gender: "Femenino",
                address: "Calle 9, Ciudad Buenos Aires",
                flighId: 2
            }
        ]
    },
    {
        id: 3,
        number: 789,
        from: "Barcelona",
        to: "Villareal",
        capacity: 300,
        passenger: [

            {
                id: 4,
                passportNumber: "EF1212",
                gender: "Femenino",
                address: "Calle 10, Ciudad Los rios",
                flighId: 3

            }
        ]
    }
];


function eliminarPasajeroDeVuelo(vuelos: IFlight[], idVuelo: number, idPasajero: number, callback: (pasajeroEliminado: IPassenger) => void): void {
    const vuelo = vuelos.find(vuelo => vuelo.id === idVuelo);
    if (vuelo) {
        const indicePasajero = vuelo.passenger.findIndex(pasajero => pasajero.id === idPasajero);
        if (indicePasajero !== -1) {
            const pasajeroEliminado = vuelo.passenger.splice(indicePasajero, 1)[0];
            callback(pasajeroEliminado);
        } else {
            console.log('Pasajero no encontrado en el vuelo.');
        }
    } else {
        console.log('Vuelo no encontrado.');
    }
}


function mostrarAtributosPasajero(pasajeroEliminado: IPassenger): void {
    console.log('Pasajero eliminado:');
    console.log(pasajeroEliminado);
}

eliminarPasajeroDeVuelo(vuelos, 1, 2, mostrarAtributosPasajero);


