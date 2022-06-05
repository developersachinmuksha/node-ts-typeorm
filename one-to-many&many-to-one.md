One "User" can have many "Addresses"

Steps:
    - Define OneToMany relation in parent model (User)
    - Define ManyToOne relation in child model (UserAddress)
    - In parent model while fetching data you can specify which relation model data you want
            SYNTAX: relation:["ModelName"]
    

You can do the same for ManyToOne