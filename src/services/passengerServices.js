import { PassengerModel } from '../models/passenger.js';
import { hashPassword } from '../helpers/hash.js';
import bcrypt from 'bcrypt';


// Retrieves all users from the database
export async function getAllPassengers() {
    try {
      const passengers = await PassengerModel.findAll();
  
      if (!passengers || passengers.length === 0) {
        throw new Error ('No passengers were found in the database.');
      };
  
      return passengers;
    } catch (error) {
      throw new Error (error.message);
    }
};


// Creates a new user in the database
export async function createPassenger(passengerToCreate) {
    try {
      const existingPassenger = await PassengerModel.findOne({ where: { email: passengerToCreate.email } });
      if (existingPassenger) {
        throw new Error ('Passenger already exists');
      };
  
      const hashedPassword = await hashPassword(passengerToCreate.password);

      const newPassenger = await PassengerModel.create({ ...passengerToCreate, password: hashedPassword });
      return newPassenger;
    } catch (error) {
      throw new Error (error.message);
    }
};


// Retrieves a single user by ID from the database
export async function getPassengerById(passengerId) {
    try {
      const passenger = await PassengerModel.findByPk(passengerId);
      if (!passenger) {
        throw new Error ('Passenger not found');
      }
      return passenger;
    } catch (error) {
      throw new Error (error.message);
    }
};


// Deletes a user from the database
export async function deletePassenger(id) {
    try {
        const updatedCount = await PassengerModel.update({ estado: false }, { where: { id } });
        if (updatedCount[0] === 0) {
          throw new Error ('User not found for soft deletion');
        };

        return 'User soft deleted successfully';
      } catch (error) {
        throw new Error (error.message);
      };
};


// Updates user information in the database
export async function updatePassenger(passengerId, updatedPassengerData) {
    try {
      if (updatedPassengerData.password) {
        const hashedPassword = await hashPassword(updatedPassengerData.password);
        updatedPassengerData.password = hashedPassword;
      };
  
      const [updatedCount] = await PassengerModel.update(updatedPassengerData, {
        where: { id: passengerId },
      });
  
      if (updatedCount === 0) {
        throw new Error ('undefined');
      };
  
      const updatedPassenger = await getUserById(passengerId);
  
      return updatedPassenger;
    } catch (error) {
      throw new Error (error.message);
    }
};


// Checks if a user with the given email and password exists in the database
export async function getPassengerByEmailAndPassword({ email, password }) {
    try {
      const passenger = await PassengerModel.findOne({ where: { email } });
  
      if (!passenger) {
        throw new Error ('Passenger not found');
      }
  
      const isPasswordValid = await bcrypt.compare(password, passenger.password);
  
      if (!isPasswordValid) {
        throw new Error ('Incorrect password');
      }
  
      return passenger;
    } catch (error) {
      throw new Error (error.message);
    }
};