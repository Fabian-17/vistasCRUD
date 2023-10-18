import path from 'path';
import { createLogs } from '../helpers/createLogs.js';

import fileDirName from '../utils/fileDirName.js';
const { __dirname } = fileDirName(import.meta);

export const handleErrors = (err, req, res, next) => {
  console.log(err);
  const date = new Date();
  const timestamp = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  createLogs(`${timestamp}-${err.stack}\n`, path.dirname(__dirname), 'errors');
  const errorMessage = JSON.parse(err.message);
  res.status(errorMessage.status).send(errorMessage.Error);
};