CREATE TABLE IF NOT EXISTS papugi (
    id INT8 NOT NULL,
    name VARCHAR(255),
    color VARCHAR(255),
    PRIMARY KEY (id)
);

INSERT INTO papugi (id, name, color, weight) VALUES (1, 'Sebusia', 'BLUE', 2137);
INSERT INTO papugi (id, name, color, weight) VALUES (2, 'Marcel', 'GREEN', 69);
