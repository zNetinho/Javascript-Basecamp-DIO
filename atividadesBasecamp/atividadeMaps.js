function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Neto', 'Admin');
usuarios.set('Bruno', 'user');
usuarios.set('Luiz', 'user');
usuarios.set('Marcos', 'user');

console.log(getAdmins(usuarios));