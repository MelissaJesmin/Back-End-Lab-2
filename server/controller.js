const db = require('../server/db.json')

let id = 4

module.exports = {
    getAllHouses : (req,res) => {
        let allHouses = db;
        res.status(200).send(allHouses)
    },

    deleteHouse : (req,res) => {
        const {house_id} = req.params;

        for(let i = 0; i < db.length; i++) {
            if(db[i].id === +house_id) {
                db.splice(i,1)
            }
        }
        res.status(200).send(db)


        /*
        OR: 
         let index = db.findIndex(elem => elem.id === +req.params.id)
        db.splice(index, 1)
        res.status(200).send(db)

        */
    },

    createHouse : (req,res) => {
        id++;
        let newHouse = {...req.body,id : id} 
        //console.log(newHouse)
        db.push(newHouse)

        res.status(200).send(db)

    },

    updateHouse : (req,res) => {
        const {house_id} = req.params;
        const {type} = req.body;
        for(let i = 0; i < db.length; i++) {
            if(db[i].id === +house_id) {
                if(type === 'plus') {
                    db[i].price+= 10000
                }
                if(db[i].price <= 10000 && type === 'minus') {
                    db[i].price = 0
                }
                else if(type === 'minus') {
                    db[i].price-= 10000
                }
                
            }
        }
        res.status(200).send(db)
    }

    /*
        OR: 
        instead of for loop:
         let index = db.findIndex(elem => elem.id === +req.params.id) */

}