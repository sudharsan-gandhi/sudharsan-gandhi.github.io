export type GitProject = {
    name: string,
    repoName: string,
    description: string,
    techStack: string,
    link: string
}
export const gitProjects: Array<GitProject> = [{
    name: 'Loops Library',
    repoName: 'loops',
    description: 'Drum beats and music management tool with admin. Completely built on top GraphQl.',
    techStack: 'React, GraphQL, Node, MySQL',
    link: 'https://github.com/sudharsan-gandhi/loops'
}, {
    name: 'Node boilerplate',
    repoName: 'node-onion-boiler',
    description: 'This is node boilerplate build with IoC and Onion Architecture with variants like nosql, nosql-graphql, mysql and with user auth setup',
    techStack: 'Node, Typeorm, Inversify',
    link: 'https://github.com/sudharsan-gandhi/node-onion-boiler'
}, {
    name: 'firebase and swagger',
    repoName: 'firebase-swagger',
    description: 'This project is an example for setting up swagger documentation for firebase functions',
    techStack: 'firebase',
    link: 'https://github.com/sudharsan-gandhi/firebase-swagger'
}, {
    name: 'QR Code',
    repoName: 'AngularQR',
    description: 'Qr code generator from text',
    techStack: 'Angular',
    link: 'https://github.com/sudharsan-gandhi/AngularQR'
}, {
    name: 'websocket boilerplate',
    repoName: 'websocket-angular',
    description: 'Websocket boilerplate with RxJS Websocket in Angular',
    techStack: 'Angular, RxJS, Websockets',
    link: 'https://github.com/sudharsan-gandhi/websocket-angular'
}]