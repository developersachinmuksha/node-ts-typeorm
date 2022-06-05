import { Router } from "express"
import { User } from "../entity/User"
const router = Router()
import { AppDataSource } from "../data-source"
import { UserAddress } from "../entity/UserAddress"
import { Category } from "../entity/Category"
import { Question } from "../entity/Question"

router.get('/get/:id', async (req, res) => {
    const id = Number(req.params.id)
    const user = await AppDataSource.manager.findOne(User, {
        relations: ["addresses"],
        where: { id }
    })
    return res.json(user)
})

router.get('/get', async (req, res) => {
    const users = await AppDataSource.manager.find(User, {
        relations: ["addresses"],

        //uncomment this select object if you want to get only selected columns. Set their value to true 
        // select: {
        //     firstName: true,
        //     addresses: {
        //         address: true
        //     }
        // }
    })
    return res.json(users)
})

router.post('/save', async (req, res) => {
    let user = new User()
    user = Object.assign(user, req.body)

    let { addresses } = req.body

    let temp = [];

    for (let index = 0; index < addresses.length; index++) {
        const element = addresses[index];

        let address = new UserAddress()
        address = Object.assign(address, element)

        await AppDataSource.manager.save(address)

        temp.push(address)
    }

    user.addresses = temp

    let savedUser = await AppDataSource.manager.save(user)
    return res.json(savedUser)
})

router.post('/address/save', async (req, res) => {
    let userAdress = new UserAddress()
    userAdress = Object.assign(userAdress, req.body)
    let savedAddress = await AppDataSource.manager.save(userAdress)
    return res.json(savedAddress)
})

router.get('/address/get', async (req, res) => {
    let addresses = await AppDataSource.manager.find(UserAddress, {
        relations: ["user"]
    })
    return res.json(addresses)
})

router.post('/save-many-to-many', async (req, res) => {
    const category1 = new Category();
    category1.name = "animals";
    await AppDataSource.manager.save(category1);

    const category2 = new Category();
    category2.name = "zoo";
    await AppDataSource.manager.save(category2);

    const question = new Question();
    question.title = "dogs";
    question.text = "who let the dogs out?";
    question.categories = [category1, category2];
    await AppDataSource.manager.save(question);

    return res.json("Saved")
})

router.get('/get-questions', async (req, res) => {
    let questions = await AppDataSource.manager.find(Question, {
        relations: ['categories']
    })

    return res.json(questions);
})

router.get('/get-categories', async (req, res) => {
    let categories = await AppDataSource.manager.find(Category, {
        relations: ['questions']
    })

    return res.json(categories);
})

router.post('/user/bulk-save', async (req, res) => {
    let { users } = req.body;

    let usersData: User[] = []

    users.map(user => {
        let userData = new User()
        userData = Object.assign(userData, user)
        usersData.push(userData)
    })

    let savedUsers = await AppDataSource.manager.save(usersData)

    return res.json(savedUsers)

})

export default router