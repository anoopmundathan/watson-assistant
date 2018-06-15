const IBMCloudEnv = require('ibm-cloud-env');
const bodyParser = require('body-parser');
const AssistantV1 = require('watson-developer-cloud/assistant/v1');
const vcapServices = require('vcap_services');
let workspaceId = process.env.WORKSPACE_ID || '<workspace-id>';

const credsFromEnv = vcapServices.getCredentials('conversation');
if (credsFromEnv.apikey) {
  credsFromEnv['iam_apikey'] = credsFromEnv.apikey;
}

let credsFromFile = {};
if (!process.env.VCAP_SERVICES) {
  credsFromFile = IBMCloudEnv.getCredentialsForService(
    'watson',
    'conversation',
    require('./../localdev-config.json')
  );
}

const params = Object.assign({ version: '2018-02-16' }, credsFromEnv, credsFromFile);
const assistant = new AssistantV1(params);


module.exports = function(app) {
  app.use(bodyParser.json());

  /**
   * Endpoint to be call from the client side
   */
  app.post('/api/message', function(req, res) {
    console.log("message", req.body);
    if (!workspaceId || workspaceId === '<workspace-id>') {
      return res.json({
        output: {
          text: 'The app has not been configured with a <b>WORKSPACE_ID</b> environment variable. Please refer to the Application Checklist in the Watson Console documentation on how to set this variable. <br>' + 'Once a workspace has been defined the intents may be imported from the training file (<code>training/car_workspace.json</code>) in order to get a working application.'
        }
      });
    }
    var payload = {
      workspace_id: workspaceId,
      context: req.body.context || {},
      input: req.body.input || {}
    };

    // Send the input to the assistant service
    assistant.message(payload, function(err, data) {
      if (err) {
        return res.status(err.code || 500).json(err);
      }
      return res.json(data);
    });
  });
}

/**
 * Creates a workspace or use an existing one
*/
assistant.listWorkspaces(function(err, response) {
  if (err) {
    return;
  } else if (response.workspaces.length > 0) {
    workspaceId = response.workspaces[0].workspace_id;
  } else {
    console.log('creating a workspace...');
    assistant.createWorkspace(require('../../training/car_training.json'), function(err, response) {
      if (!err) {
        workspaceId = response.workspace_id;
      }
    });
  }
});
