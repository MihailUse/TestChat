import { User } from "./models/User";
import { RoomUser } from "./models/RoomUser";
import { Room } from "./models/Room";
import { Permission } from "./models/Permission";
import { Massage } from "./models/Massage";

Permission.hasMany(RoomUser, {
    foreignKey: 'permissionId'
});

User.hasMany(Massage, {
    foreignKey: 'userId'
});

Massage.hasMany(Room, {
    foreignKey: 'roomId'
});

Room.hasMany(RoomUser, {
    foreignKey: 'roomId'
});

User.hasMany(RoomUser, {
    foreignKey: 'userId'
});


User.sync({ alter: true });
RoomUser.sync({ alter: true });
Room.sync({ alter: true });
Permission.sync({ alter: true });
Massage.sync({ alter: true });
