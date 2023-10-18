import Sequelize from 'sequelize';
import {sequelize} from '../config/db.js';

export const TravelModel = sequelize.define('Viaje', {
  origen: {
    type: Sequelize.STRING,
    allowNull: false
  },
  destino: {
    type: Sequelize.STRING,
    allowNull: false
  },
  origen_lat: {
    type: Sequelize.DECIMAL(9, 6),
    allowNull: false
  },
  origen_lng: {
    type: Sequelize.DECIMAL(9, 6),
    allowNull: false
  }},
  {
    // Other model options go here
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'Passenger'
});

