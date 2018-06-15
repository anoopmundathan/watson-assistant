# Watson Assistant Basic starter kit [![](https://img.shields.io/badge/bluemix-powered-blue.svg)](https://bluemix.net)


This Node.js app demonstrates the [Watson Assistant](https://www.ibm.com/watson/services/conversation/) service in a simple chat interface simulating a cognitive car dashboard.

## Getting started

### Running locally

The following steps are for running locally with Node.js. You can also [run locally with Docker](#running-locally-with-docker).

1. To develop locally, first install [Node.js](https://nodejs.org) ([LTS](https://github.com/nodejs/Release) supported versions).

1. At the command line, go to your project directory.

1. Install the dependencies:

    ```sh
    npm install
    ```

1. Start the app:

    ```sh
    npm start
    ```

1. Point your browser to [localhost:3000](http://localhost:3000).

### Testing the app

After your app is installed and running, experiment with it to see how it responds.

The chat interface is on the left, and the JSON that the JavaScript code receives from the Watson Assistant service is on the right. Your questions and commands are interpreted using a small set of sample data trained with the following intents:

    turn_on
    turn_off
    turn_up
    turn_down
    traffic_update
    locate_amenity
    weather
    phone
    capabilities
    greetings
    goodbyes

Type a request, such as `music on` or `I want to turn on the windshield wipers`. The system understands your intent and responds. You can see the details of how your input was understood by examining the JSON data in the `Watson understands` section on the right side.

For example, if you type `Turn on some music`, the JSON data shows that the system understood the `turn_on` intent with a high level of confidence, along with the `appliance` entity with a value of `music`.

* Visit the documentation to learn more about [intents](https://console.bluemix.net/docs/services/conversation/intents.html#defining-intents) and [entities](https://console.bluemix.net/docs/services/conversation/entities.html#defining-entities)

* Go to the tool to learn more about the Car Dashboard's intents, entities, and dialog.
  1. To launch the tool you need to return to your [Project List](https://console.bluemix.net/developer/watson/projects) and select your Watson Assistant Basic Project.
  2. Click on `Train Service` from the Service List, next to `Watson Assistant`.
  3. Log into the tool with your IBM Cloud login and password
  4. Click on the Car Dashboard workspace
  5. You will land on the `Intents` tab. Here you can view the intents such as `turn_on`, to modify these visit the [documentation](https://console.bluemix.net/docs/services/conversation/intents.html#editing-intents) for the service.
  6. The next tab is where you can modify `entities` such as `appliance`. View the [documentation](https://console.bluemix.net/docs/services/conversation/entities.html#editing-entities) to learn how to modify.
  7. The third tab is for modifying the `dialog`. You can learn more about modifying `dialog` in the [documentation](https://console.bluemix.net/docs/services/conversation/dialog-build.html#dialog-build).

### Modifying the app

After you have the app deployed and running, you can explore the source files and make changes. Try the following:

* Modify the .js files to change the app logic.
* Modify the .html file to change the appearance of the app page.
* Use the Watson Assistant tool to train the service for new intents, or to modify the dialog flow. For more information, see the [Watson Assistant service documentation](https://console.bluemix.net/docs/services/conversation/intents.html#defining-intents).
* Try creating your own bot with the tool:
  1. To launch the tool you need to return to your [App List](https://console.bluemix.net/developer/watson/apps) and select your Watson Assistant Basic Project.
  2. Click on `Train Service` from the Service List, next to `Watson Assistant`.
  3. Log into the tool.
  4. Follow the [Getting started guide](https://console.bluemix.net/docs/services/conversation/getting-started.html#create-workspace) to create your own Watson Assistant workspace

### Deploying to IBM Cloud as a CloudFoundry application

1. To deploy your project to IBM Cloud, you will need to install the [Bluemix CLI](https://console.bluemix.net/docs/cli/reference/bluemix_cli/get_started.html#getting-started). Open a terminal and run the command that corresponds with your operating system:

    - MacOS

        ```sh
        sh <(curl -fsSL https://clis.ng.bluemix.net/install/osx)
        ```

    - Linux

        ```sh
        sh <(curl -fsSL https://clis.ng.bluemix.net/install/linux)
        ```

    - Windows Powershell

        Copy and paste the following command into a Windows PowerShell terminal console and execute it.
        ```sh
        iex(New-Object Net.WebClient).DownloadString('https://clis.ng.bluemix.net/install/powershell')
        ```

1. Set your API endpoint. Check the top right corner of your [IBM Cloud dashboard](https://console.bluemix.net/dashboard) to determine which of the following Regions your account is set to, then run the corresponding command to set your API Endpoint.

    - US South:

        ```sh
        bx api https://api.ng.bluemix.net
        ```

    - Germany:

        ```sh
        bx api https://api.eu-de.bluemix.net
        ```

    - Sydney:

        ```sh
        bx api https://api.au-syd.bluemix.net
        ```

    - United Kingdom:

        ```sh
        bx api https://api.eu-gb.bluemix.net
        ```

1. In your terminal go to your Project folder and run the following command to login to your IBM Cloud account with your IBM Cloud username and password.

    ```bash
    bx login
    ```

1. Push the app to IBM Cloud:

    ```bash
    bx app push
    ```
    The app will be deployed using the settings in your project's `manifest.yml` file.

1. Access your app at the URL specified in the command output.

    After your app is deployed, you can manage it from your [IBM Cloud dashboard](https://console.bluemix.net/dashboard/apps).
    
## Managing your project in the Watson Console

Select your project from the [Projects list](https://console.bluemix.net/developer/watson/projects) in the Watson developer console. From the project page, you can do the following:

    - Add additional services to your project
    - View documentation and credentials for your project's services
    - Configure a DevOps toolchain

## Running locally with Docker

1. Run the command that corresponds with your operating system to install the [IBM Cloud Developer Tools CLI](https://console.bluemix.net/docs/cloudnative/dev_cli.html):

    - MacOS or Linux:

        ```sh
        curl -sL https://ibm.biz/idt-installer | bash
        ```

    - Windows 10:

        ```sh
        Set-ExecutionPolicy Unrestricted; iex(New-Object Net.WebClient).DownloadString('http://ibm.biz/idt-win-installer')
        ```
        
1. Download and install [Docker](https://www.docker.com/).
1. If you installed any node dependencies into your project folder, remove them. Open a terminal and run the following command from your project folder, where your starter kit code is:

    ```sh
    rm -rf node_modules
    ```
    
1. Build the Docker container:

    ```sh
    bx dev build
    ```
    
    The build may take a few minutes to complete.
    
1. Run the Docker container:

    ```sh
    bx dev run
    ```
    
1. Point your browser to [localhost:3000](http://localhost:3000).

## License

  This sample code is licensed under Apache 2.0.

## Open Source @ IBM

  Find more open source projects on the [IBM Github Page](http://ibm.github.io/)
