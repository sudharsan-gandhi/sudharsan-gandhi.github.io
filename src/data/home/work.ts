export type Company = {
    name: string,
    startDate: Date,
    endDate?: Date,
    location: string,
    projects: Array<Project>
}

export type Project = {
    name: string,
    description: string,
    techStack: string,
    position: string
}

export const workExperience: Array<Company> = [{
    name: 'Synchronize technologies',
    startDate: new Date(2015, 3, 1),
    endDate: new Date(2015, 10, 1),
    location: 'chennai',
    projects: [{
        name: 'Hit Balloons',
        description: `Worked on the whole process of android game development with the help of libgdx framework from front end to back end and also did worked on testing the application.`,
        position: 'Android Game Developer',
        techStack: 'Java, LibGdx, Sqlite'
    }]
}, {
    name: 'Cognizant technology solutions',
    startDate: new Date(2015, 10, 1),
    endDate: new Date(2018, 1, 1),
    location: 'chennai',
    projects: [{
        name: 'Insurance Now (Guidewire)',
        description: ``,
        position: 'Programmer Analyst',
        techStack: 'Java, Mysql, Velocity'
    }, {
        name: 'Insurance Now (Guidewire)',
        description: `Migrating the client projects to match the current base product without breaking the client logic`,
        position: 'Upgrade Engineer/Implementation Engineer',
        techStack: 'Java, Mysql, Velocity'
    }, {
        name: 'Insurance Now',
        description: `Interface implementations for multiple Insurance Now clients`,
        position: 'Upgrade Engineer/Implementation Engineer',
        techStack: 'Java, Mysql, Velocity'

    }]
}, {
    name: 'CES technologies',
    startDate: new Date(2018, 1, 1),
    endDate: new Date(2020, 1, 1),
    location: 'chennai',
    projects: [{
        name: 'Limos',
        description: `Development and offshore team management for Limos.com. A Limos Cab management website for weddings, parties etc.`,
        position: 'Senior Software Developer',
        techStack: 'Ruby On Rails'
    }, {
        name: 'Ridepaul',
        description: `Team lead for ridepaul development team in offshore`,
        position: 'Team Lead',
        techStack: 'Node, Angular'
    }, {
        name: 'Weather forecast image streamer',
        description: `This project was the frontend for integrating with third party tools to razterize and provide weather forecast images for broadcasting along with provided data`,
        position: 'Angular Developer',
        techStack: 'Angular, Node, MySQL'
    }]
}, {
    name: 'Ogon Consulting',
    location: 'Chennai',
    startDate: new Date(2020, 1, 1),
    endDate: new Date(2022, 5, 1),
    projects: [{
        name: 'Migration Insurance Now',
        description: `Migrated base product of 4 major versions into the customer base without affecting the client logic`,
        position: 'Senior Implementation Engineer',
        techStack: 'J2EE, Velocity, Javascript, Ant'
    }, {
        name: 'Spitfire',
        description: `Product Designed and developed a migration tool between Insurance Now and Sapiens Insurance Systems and vice versa. Deployed on AWS Lightsail and written docker scripts for easy deployments`,
        position: 'Technical Architect',
        techStack: 'Spring Boot, Angular, Docker, AWS lightsail, Relational DB, Git Hooks'
    }]
}, {
    name: 'Ogon Consulting',
    location: 'Canada',
    startDate: new Date(2022, 5, 1),
    projects: [{
        name: 'Spitfire',
        description: `Further Improved tool to support XSD migration, direct DB migration, UI Mapping between fields to generate code etc. The connection settings can be dynamically changed in runtime.
        Can Save and load mapping progress at any checkpoints. Have a pluggable interface to provide flexible support for new plugins`,
        position: 'Technical Architect',
        techStack: 'Spring Boot, Angular, Docker, AWS lightsail, Relational DB, Spring Config'
    }, {
        name: 'Spitfire Scripts',
        description: `Additional Scripts needed for the spitfire tool are designed and decoupled from the original product.`,
        position: 'Technical Architect',
        techStack: 'Spring Boot, Angular, Docker, AWS lightsail, Relational DB, Spring Config'
    }]
}].sort((a, b) => a.startDate.getMilliseconds() > b.startDate.getMilliseconds() ? 1 : -1);