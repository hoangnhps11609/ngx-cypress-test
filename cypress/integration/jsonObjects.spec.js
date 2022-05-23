

describe ('JSON objects', () => {

    it('JSON objects', () =>{
        cy.openHomePage()

        const simpleObject = {"key": "value", "key2": "value2"}

        const simpleArrayOfValues = ["one", "two", "three"]

        const arrayOfObjects = [{"key": "value"}, {"key2": "value2"}, {"key3": "value3"}]

        const typesOfData = {"string": "this is a string", "number":10}

        const mix ={
            "FirstName": "Hoang",
            "LastName": "Nguyen",
            "Age": 28,
            "Students": [
                {
                    "firstName": "ST1",
                    "lastname": "LN1"
                },
                {
                    "firstName": "ST2",
                    "lastname": "LN2"
                }
            ]
        }

        console.log(simpleObject.key2);
        console.log(simpleObject["key2"]);
        console.log(simpleArrayOfValues[1]);
        console.log(arrayOfObjects[2].key3);
        console.log(mix.Students[0].firstName);
    })
})