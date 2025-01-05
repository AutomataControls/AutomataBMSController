module.exports = function (RED) {
    function AutomataBMSController(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        const ui = RED.require("node-red-dashboard")(RED);
        const group = RED.nodes.getNode(config.group);

        if (!group) {
            return;
        }

        const fs = require('fs');
        const path = require('path');
        const templatePath = path.join(__dirname, 'templates', 'controller-ui.html');

        try {
            const template = fs.readFileSync(templatePath, 'utf8');

            const done = ui.addWidget({
                node: node,
                group: config.group,
                width: config.width,
                height: 12,
                format: template,
                templateScope: "local",
                emitOnlyNewValues: false,
                forwardInputMessages: false,
                storeFrontEndInputAsState: true,

                beforeEmit: function (msg, value) {
                    return { msg: msg };
                },

                beforeSend: function (msg, orig) {
                    if (orig) {
                        return orig.msg;
                    }
                },

                initController: function ($scope, events) {
                    $scope.$watch('msg', function (msg) {
                        // Your template handles the msg processing
                    });
                }
            });

            if (done) {
                node.on("close", done);
            }
        } catch (e) {
            node.error("Error loading template: " + e.message);
        }
    }

    RED.nodes.registerType("AutomataBMSController", AutomataBMSController);
};