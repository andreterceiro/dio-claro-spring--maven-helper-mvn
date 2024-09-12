const inquirer = require('inquirer');
//var exec = require('child_process').exec;
//const fs = require('fs');
var globalVariables = {};

inquirer.default.prompt({
    message: "Archetype group ID",
    name: "archetypeGroupID",
    default: "org.apache.maven.archetypes"
}).then(
    function(variables) {
        globalVariables["archetypeGroupID"] = variables["archetypeGroupID"];
        inquirer.default.prompt({
            message: "Archetype artifact ID",
            name: "archetypeArtifactId",
            default: "maven-archetype-quickstart"
        }).then(
            function(variables) {
                globalVariables["archetypeArtifactId"] = variables["archetypeArtifactId"];
                inquirer.default.prompt({
                    message: "Archetype version",
                    name: "archetypeVersion",
                    default: "1.5"
                }).then(
                    function(variables) {
                        globalVariables["archetypeVersion"] = variables["archetypeVersion"];                    
                        /*
                        Debugging
                        
                        console.log("mvn archetype:generate -DarchetypeGroupId=org.apache.maven.archetypes -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.5");
                        console.log(`Executing: mvn archetype:generate -DarchetypeGroupId=${globalVariables['archetypeGroupID']} -DarchetypeArtifactId=${globalVariables['archetypeArtifactId']} -DarchetypeVersion=${globalVariables['archetypeVersion']}`)
                        exec(`mvn archetype:generate -DarchetypeGroupId=${globalVariables['archetypeGroupID']} -DarchetypeArtifactId=${globalVariables['archetypeArtifactId']} -DarchetypeVersion=${globalVariables['archetypeVersion']}`, function(error, stdout, stderr) { 
                        */
                        command = `mvn archetype:generate -DarchetypeGroupId=${globalVariables['archetypeGroupID']} -DarchetypeArtifactId=${globalVariables['archetypeArtifactId']} -DarchetypeVersion=${globalVariables['archetypeVersion']}`;
                        console.log("Please execute the command under this message:");
                        console.log(command);
                        /*
                        Debugging

                        fs.writeFileSync('/tmp/command-mvn-create-project.sh', command);
                        fs.chmodSync('/tmp/command-mvn-create-project.sh', 0o700);
                        exec('/tmp/command-mvn-create-project.sh', function(error, stdout, stderr) {
                            console.log(stdout);
                            console.log(error);
                            console.log(stderr);
                        });
                        */
                    }
                );        
            }
        );
    }
);


