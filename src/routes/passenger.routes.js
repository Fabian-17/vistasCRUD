import { Router } from 'express';
import { ctrlCreatePassenger,
    ctrlDeletePassenger,
    ctrlGetAllPassengers,
    ctrlGetPassenger,
    ctrlUpdatePassenger,
    ctrlLoginPassenger } from '../controllers/passenger.controller.js';
import { createPassengerSchema, loginPassengerSchema } from '../models/Schema/user.Schema.js';
import {validator} from '../middlewares/validator.js';

const passengerRouter = Router();

// Route to get all users
passengerRouter.get('/', ctrlGetAllPassengers);

// Route to get a user by ID
passengerRouter.get('/:id', ctrlGetPassenger);

// Route to register a new user, with validation middleware
passengerRouter.post('/register', createPassengerSchema, validator, ctrlCreatePassenger);

// Route to login a user, with validation middleware
passengerRouter.post('/login', loginPassengerSchema, validator, ctrlLoginPassenger);

// Route to update an existing user by ID
passengerRouter.put('/:id', ctrlUpdatePassenger);

// Route to delete a user by ID
passengerRouter.delete('/:id', ctrlDeletePassenger);

export { passengerRouter };