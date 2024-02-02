
const config_data = [
    {
        "type": "deal_of_the_day",
        "section_id": 29,
        "limit": 3,
    },
    {
        "type": "exciting_offers",
        "section_id": '',
        "limit": 50,
    },
    {
        "type": "bundle_deals",
        "section_id": 19,
        "limit": 3,
    },
    {
        "type": "clearance_sale",
        "section_id": 117,
        "limit": 4,
    },
    {
        "type": "category_items",
        "limit": 3,
    },
    {
        "type": "getcart_items",
        "section_id": 51,
    },
    {
        "type": "home_category_section",
        "categories": [
            {
                "category_id": 38,
                "subcategory": [212, 213, 214, 215, 216, 217]
            },
            {
                "category_id": 36,
                "subcategory": [176, 177, 178, 179, 180, 181]
            },
            {
                "category_id": 39,
                "subcategory": [219, 220, 221, 222, 223, 437]
            },
            {
                "category_id": 10,
                "subcategory": [33, 34, 281, 284, 285, 286]
            },
            {
                "category_id": 46,
                "subcategory": [400, 401, 402, 403, 404, 405]
            },
            {
                "category_id": 49,
                "subcategory": [63, 130, 329, 331, 332, 334]
            },
            {
                "category_id": 27,
                "subcategory": [112, 114, 431, 442, 443, 444]
            },
            {
                "category_id": 41,
                "subcategory": [233, 234, 236, 237, 238, 239]
            },
            {
                "category_id": 32,
                "subcategory": [138, 139, 140, 141, 142, 143]
            },

        ],
    },
]

const country_id = 1;

async function elasticsearch() {
    try {
        const { Client } = require('@elastic/elasticsearch')

        const client = new Client({
            node: 'http://20.238.38.143:9200/',
            auth: {
                username: 'elastic',
                password: 'D11HRXJ1jdjpSNpmo9Oj'
            },
        })
        client.info()
            .then(response => console.log(response))
            .catch(error => console.error(error))
        return client
    } catch (error) {
        return console.log(`elastic search Could not connect - ${error}`);
    }
}

function createPool() {
    try {
        const mysql = require('mysql2');

        const pool = mysql.createPool({
            host: "127.0.0.1",
            user: "root",
            password: "",
            port: "3306",
            /*  host: "78.138.31.21",
            user: "root",
            password: "Mysql8@iraxtech",
            port: "3306", */
            database: "os_uat",
            connectionLimit: 10,
            waitForConnections: true,
            multipleStatements: true,
            queueLimit: 0
        });
        const promisePool = pool.promise();
        return promisePool;
    } catch (error) {
        return console.log(`Could not connect - ${error}`);
    }
}

const pool = createPool();

module.exports = {
    base_url: process.env.base_url,
    port: process.env.port,
    elastic: process.env.elastic,
    config_data: config_data,
    country_id: country_id,
    elasticsearch: elasticsearch,
    connection: async () => pool.getConnection(),
    execute: (...params) => pool.execute(...params)
}