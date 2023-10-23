import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

interface IPassenger {
    id: number;
    passportNumber: string;
    gender: string;
    address: string;
    flightId: number;
}

interface IFlight {
    id: number;
    number: number;
    from: string;
    to: string;
    capacity: number;
    passengers: IPassenger[];
}

const data: IFlight[] = [
    {
        id: 1,
        number: 42,
        from: "Quito",
        to: "Guayaquil",
        capacity: 200,
        passengers: [
            {
                id: 1,
                passportNumber: "AB298",
                gender: "Masculino",
                address: "Calle 12, Manta",
                flightId: 1
            },
            {
                id: 2,
                passportNumber: "CD789012",
                gender: "Femenino",
                address: "Calle 456, Ciudad Rosario",
                flightId: 1
            }
        ]
    },
    
];

async function crearElementosEnBD(data: IFlight[]): Promise<void> {
    for (const vuelo of data) {
        try {
            const nuevoVuelo = await prisma.function.create({
                data: {
                    number: vuelo.number,
                    from: vuelo.from,
                    to: vuelo.to,
                    capacity: vuelo.capacity,
                    passengers: {
                        create: vuelo.passengers 
                    }
                }
            });
            console.log(`Vuelo creado en la base de datos: ${nuevoVuelo.number}`);
        } catch (error) {
            console.error('Error al crear vuelo:', error);
        }
    }
}




crearElementosEnBD(data)
    .catch(error => {
        console.error('Error al crear elementos en la base de datos:', error);
    })
    .finally(async () => {
        
        await prisma.$disconnect();
    });
