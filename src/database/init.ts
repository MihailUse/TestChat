import sequelizeDB from './sequelize';
import { User } from "./models/User";
import { RoomUser } from "./models/RoomUser";
import { Room } from "./models/Room";
import { Permission } from "./models/Permission";
import { Massage } from "./models/Massage";

User.sync({ alter: true })
RoomUser.sync({ alter: true })
Room.sync({ alter: true })
Permission.sync({ alter: true })
Massage.sync({ alter: true })

// sequelizeDB.sync({ alter: true }).then(result => {
//     console.log(result);
// }).catch(err => console.log(err));

