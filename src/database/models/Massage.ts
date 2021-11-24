import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeDB from '../sequelize'


interface MassageAttributes {
    id: number;
    roomId: number;
    userId: number;
    message: string;
}


export interface MassageInput extends Optional<MassageAttributes, 'id'> { }
export interface MassageOuput extends Required<MassageAttributes> { }


export class Massage extends Model<MassageAttributes, MassageInput> implements MassageAttributes {
    id: number;
    roomId: number;
    userId: number;
    message: string;

    // timestamps
    public readonly sendedAt: Date;
}

Massage.init({
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
    message: {
        type: DataTypes.TEXT,

    },
},
    {
        sequelize: sequelizeDB,
        timestamps: true,
        paranoid: true
    }
);
