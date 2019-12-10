'use strict'

const Trigger = use('App/Models/Trigger');
const Database = use('Database');

class TriggerController {

    async index() {
        return Trigger.all();
    }

    async getIdByDescription(request) {
        const { params } = request;
        let { description } = params;
        //console.log(description.replace('/\%20/g', ' '));
        const newDescription = decodeURI(description);


        const { id } = await Database
            .select('id')
            .from('triggers')
            .where('description', newDescription).first();
        return id;
    }
};

module.exports = TriggerController;