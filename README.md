# Message

To be clear. The content here is a content based on a free course. Noone can reproduce this material. If you wanna to know this material, my advice is to you access the **free** [course](https://web.dio.me/track/coding-the-future-claro-java-spring-boot). And if they end the course or start to ask money to study in the course? Well, this considerations are out of my control, but the DIO material is excelent and the course is amazing! If you acquire a DIO paln, you will have access to amazing courses.


# General

The objective of this project is provide an easier interface to the `mvn` command. Initially we will interact only with the command to create a project, but in future we can create other interfaces to other `mvn` commands.

The command in the course did not work. I used the command of [this page](mvn archetype:generate -DarchetypeGroupId=org.apache.maven.archetypes -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.5)

This command exactly:
```
mvn archetype:generate -DarchetypeGroupId=org.apache.maven.archetypes -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.5
```

I only got some parameters from the CLI.

After some errors on execute the `mvn` command through Node.js (exec), I tried to save a file with the command and execute this file. After a new error, I prefered only to output the command to be executed. Executing the outputted command worked for me...
