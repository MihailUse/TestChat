// import { ApplicationError } from "../../ApplicationError";
// import { HTTPStatus } from "../../utils";
// import { User, UserInput, UserOuput, GetAllUsersFilters } from "../models/User";
// import { Op } from "sequelize";

// export const create = async (payload: UserInput): Promise<UserOuput> => {
//     const user = await User.create(payload)
//     return user
// }

// export const update = async (id: number, payload: Partial<UserInput>): Promise<UserOuput> => {
//     const user = await User.findByPk(id)
//     if (!user) {
//         throw new ApplicationError(HTTPStatus.NOT_FOUND,  'User not found')
//     }
//     const updatedUser = await (user as User).update(payload)
//     return updatedUser
// }

// export const getById = async (id: number): Promise<UserOuput> => {
//     const user = await User.findByPk(id)
//     if (!user) {
//         throw new Error('not found')
//     }
//     return user
// }

// export const deleteById = async (id: number): Promise<boolean> => {
//     const deleteduserCount = await User.destroy({
//         where: { id }
//     })
//     return !!deleteduserCount
// }

// export const getAll = async (filters?: GetAllUsersFilters): Promise<UserOuput[]> => {
//     return User.findAll({
//         where: {
//             ...(filters?.isDeleted && { deletedAt: { [Op.not]: null } })
//         },
//         ...((filters?.isDeleted || filters?.includeDeleted) && { paranoid: true })
//     })
// }