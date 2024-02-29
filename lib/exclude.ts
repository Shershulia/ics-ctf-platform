export function exclude(users: any[], keys: string[]) {
    return users.map(user => {
        const filteredUser = {};
        for (const key in user) {
            if (!keys.includes(key)) {
                // @ts-ignore
                filteredUser[key] = user[key];
            }
        }
        return filteredUser;
    });
}
