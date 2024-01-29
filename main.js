const fs = require('fs');
const faker = require('faker');

// Adjust the number of records as per your requirement
const numRecords = 1000000;
const data = [];

for (let i = 0; i < numRecords; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const fullName = firstName + lastName;
    const phone = faker.phone.phoneNumber();
    const email = faker.internet.email();
    const username = faker.internet.userName();
    const id = faker.random.uuid();
    const nc = faker.random.number();

    const record = {
        fullName,
        firstName,
        lastName,
        phone,
        email,
        username,
        id,
        nc,
    };

    data.push(record);
}

const jsonString = JSON.stringify(data, null, 2);

fs.writeFile('large_data.json', jsonString, (err) => {
    if (err) {
        console.error('Error writing JSON file:', err);
    } else {
        console.log('Large JSON file generated successfully.');
    }
});
