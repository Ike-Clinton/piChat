#piChat
========
piChat is a simple chat app written with meteor.
The intent is that you host this on a network and then anyone can connect and chat.

Setup
----

Setup is fairly simple. First you will need to have meteor installed to run the app.
``` shell
curl https://install.meteor.com/ | sh
```

This will automatically install meteor. Once the setup is complete then just clone this
repository with the method of your choice.

``` shell
git clone https://github.con/Ike-Clinton/piChat.git
```

Hosting
----
Once done you have all the necessary packages setup for you. All that you have to 
do at this point is run the server

``` shelll
cd piChat
meteor -p 80
```

Where the -p flag is the port of your choice (default is 3000). Just connect to your IP (or localhost)
and the app should be up and running waiting for you.

Notes About MongoDB and Usage
--------

License
--------