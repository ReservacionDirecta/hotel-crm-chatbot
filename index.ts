import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Connecting to database...');
    // Connect to the database
    await prisma.$connect();
    console.log('Connected to database.');

    // Create a new hotel
    const hotel = await prisma.hotel.create({
        data: {
            name: 'Hotel Example',
            address: '123 Main St',
        },
    });
    console.log('Hotel created:', hotel);

    // Create a new room
    const room = await prisma.room.create({
        data: {
            hotelId: hotel.id,
            roomNumber: 1,
            roomType: 'Single',
            price: 100.0,
        },
    });
    console.log('Room created:', room);

    // Create a new customer
    const customer = await prisma.customer.create({
        data: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '123-456-7890',
        },
    });
    console.log('Customer created:', customer);

    // Create a new reservation
    const reservation = await prisma.reservation.create({
        data: {
            roomId: room.id,
            customerId: customer.id,
            startDate: new Date('2024-01-01'),
            endDate: new Date('2024-01-02'),
        },
    });
    console.log('Reservation created:', reservation);

    // Get all hotels
    const hotels = await prisma.hotel.findMany();
    console.log('Hotels:', hotels);

    // Get all rooms
    const rooms = await prisma.room.findMany();
    console.log('Rooms:', rooms);

    // Get all reservations
    const reservations = await prisma.reservation.findMany();
    console.log('Reservations:', reservations);

    // Disconnect from the database
    await prisma.$disconnect();
    console.log('Disconnected from database.');
}

main()
    .catch((e) => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
