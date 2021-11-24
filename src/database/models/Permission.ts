import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeDB from '../sequelize'


interface PermissionAttributes {
    id: number;
    name: string;
}

export interface PermissionInput extends Optional<PermissionAttributes, 'id'> { }
export interface PermissionOuput extends Required<PermissionAttributes> { }


export class Permission extends Model<PermissionAttributes, PermissionInput> implements PermissionAttributes {
    id: number;
    name: string;

    // timestamps
    public readonly createdAt: Date;
    public readonly updatedAt: Date;
    public readonly deletedAt: Date;
}

Permission.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.TEXT,
    },
},
    {
        sequelize: sequelizeDB,
        timestamps: true,
        paranoid: true
    }
);

