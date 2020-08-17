import fs from 'fs';
const fileName = './data/users.json';
const manage = {}
manage.insert = (obj) => {
    let list = manage.read()
    list.push(obj)
    manage.save(list)
}
manage.read = () => {
    const fileContent = fs.readFileSync(fileName, 'utf8')
    return JSON.parse(fileContent)
}
manage.save = (list) => {
    fs.writeFileSync(fileName, JSON.stringify(list))
}
manage.emailIsExists = (email) => {
    let list = manage.read()
    for (let i in list) {
        if (list[i].email === email) {
            return true
        }
    }
    return false;
}
manage.passwordIsRight = (email, password) => {
    let list = manage.read()
    for (let i in list) {
        if (list[i].email === email && list[i].password === password) {
            return true
        }
    }
    return false;
}
export default manage