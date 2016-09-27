module.exports.getRabbitUrl = function () {
    var uri = "";
    
    if (process.env.VCAP_SERVICES) {
        var conf = JSON.parse(process.env.VCAP_SERVICES);
        uri = conf['p-rabbitmq'][0].credentials.uri;
    }
    else {
        uri ="amqp://localhost";
    }
    
    return uri;
}