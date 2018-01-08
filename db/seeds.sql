create table burgers (
	id INTEGER(11) NOT NULL,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN NOT NULL,
    burgerdate DATE DEFAULT NOW(),
    PRIMARY KEY(id)
    
)