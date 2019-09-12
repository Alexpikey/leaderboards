const mysql = require('mysql');
const {
    GraphQLObjectType, 
    GraphQLInt, 
    GraphQLString, 
    GraphQLNonNull, 
    GraphQLList,
    GraphQLSchema
} = require('graphql');

const connection = new mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'leaderboards'
});


// const entries = () => {
//     return new Promise((resolve, reject) => {
//         let sql = "SELECT * FROM ENTRIES";
//         connection.query(sql, (err, results) => {
//             resolve(results);
//         });
//     });
// };

// console.log(entries.then(function(val) {
//     console.log(val);
// }));

const entries = [
    {
        "id": 1,
        "name": "Jason van Wyk",
        "rankDescription": "Bathroom Beginner\r\n",
        "score": 1250,
        "referrer": "Instagram",
        "joinDate": "2019-09-09 23:48:02",
        "province": "Northern Cape"
    },
    {
        "id": 2,
        "name": "Brandon van Niekerk",
        "rankDescription": "Bathroom Beginner\r\n",
        "score": 1200,
        "referrer": "Youtube add",
        "joinDate": "2019-09-10 23:48:36",
        "province": "Western Cape"
    },
    {
        "id": 3,
        "name": "Annie Jansen",
        "rankDescription": "Bathroom Expert",
        "score": 1500,
        "referrer": "TV-add",
        "joinDate": "2019-09-08 23:48:09",
        "province": "Western Cape"
    },
    {
        "id": 4,
        "name": "Jamie Adams",
        "rankDescription": "Bathroom Expert",
        "score": 1275,
        "referrer": "Instagram",
        "joinDate": "2019-09-06 23:48:33",
        "province": "Gauteng"
    },
    {
        "id": 5,
        "name": "Annet Freddy",
        "rankDescription": "Bathroom Beginner",
        "score": 1114,
        "referrer": "Instagram",
        "joinDate": "2019-09-06 23:48:11",
        "province": "Kwazulu Natal"
    },
    {
        "id": 6,
        "name": "Anita White",
        "rankDescription": "Bathroom Expert",
        "score": 1879,
        "referrer": "Facebook",
        "joinDate": "2019-09-08 23:48:14",
        "province": "Kwazulu Natal"
    },
    {
        "id": 7,
        "name": "John Ackels",
        "rankDescription": "Bathroom Beginner",
        "score": 2010,
        "referrer": "Youtube add",
        "joinDate": "2019-09-07 23:48:16",
        "province": "Kwazulu Natal"
    },
    {
        "id": 8,
        "name": "Peter Pandora",
        "rankDescription": "Bathroom Beginner",
        "score": 2501,
        "referrer": "TV-add",
        "joinDate": "2019-09-06 23:48:18",
        "province": "Gauteng"
    },
    {
        "id": 9,
        "name": "Evan Moss",
        "rankDescription": "Bathroom Expert",
        "score": 2560,
        "referrer": "Facebook",
        "joinDate": "2019-09-06 23:48:22",
        "province": "Gauteng"
    },
    {
        "id": 10,
        "name": "Ben Eecken",
        "rankDescription": "Bathroom Expert",
        "score": 2305,
        "referrer": "Youtube add",
        "joinDate": "2019-09-08 23:48:24",
        "province": "Western Cape"
    },
    {
        "id": 11,
        "name": "Nicole Mont",
        "rankDescription": "Bathroom Beginner",
        "score": 2000,
        "referrer": "Facebook",
        "joinDate": "2019-09-07 23:48:25",
        "province": "Western Cape"
    },
    {
        "id": 12,
        "name": "Cassie Bean",
        "rankDescription": "Bathroom Beginner",
        "score": 1532,
        "referrer": "Facebook",
        "joinDate": "2019-09-10 23:48:27",
        "province": "Western Cape"
    },
    {
        "id": 13,
        "name": "Mornay Jansen",
        "rankDescription": "Bathroom Expert",
        "score": 1901,
        "referrer": "Facebook",
        "joinDate": "2019-09-09 23:48:29",
        "province": "Western Cape"
    }
]

const EntryType = new GraphQLObjectType({
    name: "entry",
    description: "this represents a entry",
    fields: () => ({
        id: {type: GraphQLNonNull(GraphQLInt)},
        name: {type: GraphQLNonNull(GraphQLString)},
        rankDescription: {type: GraphQLNonNull(GraphQLString)},
        score: {type: GraphQLNonNull(GraphQLInt)},
        referrer: {type: GraphQLNonNull(GraphQLString)},
        joinDate: {type: GraphQLNonNull(GraphQLString)},
        province: {type: GraphQLNonNull(GraphQLString)}

    })
})


const RootQurey = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        entries: {
            type: new GraphQLList(EntryType),
            resolve: () => entries
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQurey
});