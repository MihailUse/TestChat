import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeDB from '../sequelize'


interface RoomUserAttributes {
    id: number;
    roomId: number;
    userId: number;
    permissionId: number;
}


export interface RoomUserInput extends Optional<RoomUserAttributes, 'id'> { }
export interface RoomUserOuput extends Required<RoomUserAttributes> { }


export class RoomUser extends Model<RoomUserAttributes, RoomUserInput> implements RoomUserAttributes {
    id: number;
    roomId: number;
    userId: number;
    permissionId: number;
}


RoomUser.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    roomId: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    userId: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    permissionId: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
},
    {
        sequelize: sequelizeDB,
        timestamps: true,
        paranoid: true
    }
);


