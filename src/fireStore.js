import { app } from './auth';
import { getDatabase, ref, set } from 'firebase/database';

const database = getDatabase(app);
