//Object Destructuring
{
    const user = {
        id: 23,
        displayName: 'Netinho',
        fullName: {
            firstName: 'Neto',
            lastName: 'Flavio'
        }
    };
}

function userId({ id }) {
    return id;
}

function getFullName({ fullName: { firstName: first, lastName: last } }) {}
userId(user)
    //23
getFullName(user)
    //Neto Flavio