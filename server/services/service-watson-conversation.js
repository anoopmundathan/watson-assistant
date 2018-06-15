const IBMCloudEnv = require('ibm-cloud-env');
const AssistantV1 = require('watson-developer-cloud/assistant/v1');

module.exports = function(app, serviceManager){
	let params = {
		version: '2018-02-16',
		url: IBMCloudEnv.getString('watson_conversation_url'),
	};

	if (IBMCloudEnv.getString('watson_conversation_apikey')) {
		const iam_url = params.url.includes('gateway-s.') ? 
			'https://iam.stage1.bluemix.net/identity/token' :
			'https://iam.bluemix.net/identity/token';
		Object.assign(params, {
			iam_apikey: IBMCloudEnv.getString('watson_conversation_apikey'),
			iam_url,
		});
	}
	else {
		Object.assign(params, {
			username: IBMCloudEnv.getString('watson_conversation_username'),
			password: IBMCloudEnv.getString('watson_conversation_password'),
		});		
	}
	const assistant = new AssistantV1(params);

	serviceManager.set("watson-conversation", assistant);
};
