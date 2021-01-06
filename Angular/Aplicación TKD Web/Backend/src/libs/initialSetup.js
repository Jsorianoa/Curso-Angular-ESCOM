import Role from "../models/Role";
export const createRole = async () => {

    try {
        const count = await Role.estimatedDocumentCount()

        if (count > 0) return;
        
        const values = await Promise.all([
            new Role({ name: 'user'}).save(),
            new Role({ name: 'profesor'}).save(),
            new Role({ name: 'administrador'}).save()
    ])
    console.log(values);
    } catch (error) {
        console.error(error);
    }
}