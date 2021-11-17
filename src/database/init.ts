import sequelizeDB from './sequelize';
import { User } from "./models/User";

User.sync({ alter: true })

// sequelizeDB.sync({ alter: true }).then(result => {
//     console.log(result);
// }).catch(err => console.log(err));

