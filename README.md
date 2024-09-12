# General

The objective of this project is provide an easier interface to the `mvn` command. Initially we will interact only with the command to create a project, but in future we can create other interfaces to other `mvn` commands.

The command in the course did not work. I used the command of [this page](mvn archetype:generate -DarchetypeGroupId=org.apache.maven.archetypes -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.5)

This command exactly:
```
mvn archetype:generate -DarchetypeGroupId=org.apache.maven.archetypes -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.5
```

I only got some parameters from the CLI.

After some errors on execute the `mvn` command through Node.js (exec), I tried to save a file with the command and execute this file. After a new error, I prefered only to output the command to be executed. Executing the outputted command worked for me...