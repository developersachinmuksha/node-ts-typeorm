One "Question" can have many "Categories"  and vice versa 

Steps:
    - Define ManyToMany relation in Question model
    - Define ManyToMany relation in Category model
    - IMPORTANT! : In @JoinTable() this attribute keep the table name same in both models. Otherwise two tables will be automatically created. But we want only one
    - After defining relation in both model a third table will be automatically created.
    - Cross verify if this table in database after restarting your serve. Table's name should be exact to the name we defined in @JoinTable() attribute