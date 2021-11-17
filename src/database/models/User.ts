import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeDB from '../sequelize'


interface UserAttributes {
    id: number;
    name: string;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface GetAllUsersFilters {
    isDeleted?: boolean
    includeDeleted?: boolean
}

export interface UserInput extends Optional<UserAttributes, 'id'> { }
export interface UserOuput extends Required<UserAttributes> { }


export class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    id: number;
    name: string;
    description: string;

    // timestamps
    public readonly createdAt: Date;
    public readonly updatedAt: Date;
    public readonly deletedAt: Date;
}

User.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.TEXT,
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
