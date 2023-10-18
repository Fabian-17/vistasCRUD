import { getAllPassengers,
        getPassengerById,
        createPassenger,
        updatePassenger,
        deletePassenger,
        getPassengerByEmailAndPassword } from "../services/passengerServices.js";
import { createJWT } from "../helpers/jsonwebtoken.js";



// Controller to get all users
export const ctrlGetAllPassengers = async (req, res) => {
    try {
      const passengers = await getAllPassengers()
  
      if (!passengers) {
         res.status(404)
      }
  
      res.status(200).json(passengers)
    } catch (error) {
      res.status(500).json(error.message)
    }
};


// Controller to get a single user by ID
export const ctrlGetPassenger = async (req, res) => {
    try {
      const passengerId = req.params.id;
      const onePassenger = await getPassengerById(passengerId)
  
      if (!onePassenger) {
         res.status(404)
      }
  
      res.status(200).json(onePassenger)
    } catch (error) {
      res.status(500).json(error.message)
    }
};


// Controller to create a new user
export const ctrlCreatePassenger = async (req, res) => {
    try {
        const passenger = await createPassenger(req.body)
    
        const token = await createJWT({ user: passenger.id })
    
        res.status(200).json({ message: "Passenger created", token })
      } catch (error) {
        res.status(500).json(error.message)
      }
};


// Controller to delete a user by ID
export const ctrlDeletePassenger = async (req, res) => {
    try {
        const deletedPassenger = await deletePassenger(req.params.id);
        
        if (!deletedPassenger) {
             res.status(404);
        }
        
        res.status(200).json(deletedPassenger);
    } catch (error) {
        res.status(500).json(error.message);
    }
};


// Controller to update a user's information by ID
export const ctrlUpdatePassenger = async (req, res) => {
  try {
    const passengerId = req.params.id;
    const updatedPassenger = await updatePassenger(passengerId, req.body);

    if (!updatedPassenger) {
       res.status(404).json({ error: 'Passenger not found' });
    }

    res.status(200).json(updatedPassenger);
  } catch (error) {
    res.status(500).json(error.message);
  }
};


// Controller for user login
export const ctrlLoginPassenger = async (req, res) => {
    try {
      const passenger = await getPassengerByEmailAndPassword(req.body)
  
      if (!passenger) {
         res.status(404).json({ error: 'Passenger not found' });
      };

      const token = await createJWT({ user: passenger.id })
  
      res.status(200).json(token)
    } catch (error) {
      res.status(500).json(error.message)
    }
};