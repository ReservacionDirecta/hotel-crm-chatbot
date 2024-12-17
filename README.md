# Hotel CRM Chatbot

This is a hotel CRM chatbot built using Prisma and TypeScript. It allows users to create and manage hotels, rooms, customers, and reservations.

## Features

* Create and manage hotels
* Create and manage rooms
* Create and manage customers
* Create and manage reservations

## Installation

1. Clone the repository
2. Install the dependencies using `npm install`
3. Start the application using `npm start`

## Usage

1. Create a new hotel by running `prisma hotel create --name "Hotel Example" --address "123 Main St"`
2. Create a new room by running `prisma room create --hotelId <hotelId> --roomNumber 1 --roomType "Single" --price 100`
3. Create a new customer by running `prisma customer create --name "John Doe" --email "john@example.com" --phone "123-456-7890"`
4. Create a new reservation by running `prisma reservation create --roomId <roomId> --customerId <customerId> --startDate "2024-01-01" --endDate "2024-01-02"`

## Bug Tracker

Please report any bugs or issues to the [issue tracker](https://github.com/yerct/hotel-crm-chatbot/issues).
