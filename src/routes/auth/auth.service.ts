import { prisma, User } from "@prisma/client";



export const createOrLogin = async (email: string, name: string): Promise<User> => {
	const user = await prisma.user.findUnique({
		where: {
			email: email
		}
	});

	if(!user) {
		await prisma.user.create({
			data: {
				name: name,
				email: email,
				recipes: []
			}
		});
	}
	return user;
};


export const update = async (user: User) {

}