import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeDB from '../sequelize'


interface RoomAttributes {
    id: number;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}


export interface RoomInput extends Optional<RoomAttributes, 'id'> { }
export interface RoomOuput extends Required<RoomAttributes> { }


export class Room extends Model<RoomAttributes, RoomInput> implements RoomAttributes {
    id: number;
    description: string;

    // timestamps
    public readonly createdAt: Date;
    public readonly updatedAt: Date;
    public readonly deletedAt: Date;
}


Room.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    }
},
    {
        sequelize: sequelizeDB,
        timestamps: true,
        paranoid: true
    }
);
