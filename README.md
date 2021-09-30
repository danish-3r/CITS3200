# Flask calculator

UWA project of building flask app fee calculator

## Setting up

Prerequisites: Install python3 on the machine

### Set up a virtual environment

1. create a virtual environment  
    ```python3 -m venv venv```
2. start the virtual environment  
    + On *nix  
        ```source venv/bin/activate```
    + On windows  
        ```venv\Scripts\activate```
3 install all dependecies  
    ```pip install -r requirements.txt```

### Install sqlite

+ On *nix  
    ```sudo apt-get install sqlite3```
+ On windows, follow the link  
    [https://www.sqlitetutorial.net/download-install-sqlite/]([https://www.sqlitetutorial.net/download-install-sqlite/)

### Setup the database on your machine

+ Initialize database  
    ```flask db init```
+ Migrate the database for the first run  
    ```flask db migrate```
+ Upgrade the databse for the first run  
    ```flask db upgrade```

## Running flask app on local host

```flask run```

This should start the app running on localhost at port 5000, i.e.  
[http://localhost:5000/index](http://localhost:5000/index)

## Run tests

### Unit test

python3 -m unittest unit_test.py

### System test

System test supports running test on Chrome using chromedriver. The newest chromedriver version is ran and test on Window. To download another version of chromedriver, follow this link  
    [https://sites.google.com/a/chromium.org/chromedriver/downloads](https://sites.google.com/a/chromium.org/chromedriver/downloads)

To test on Mac or Linux, simply uncomment the chromedriver part in the system_test.py  

To run system tests, first you need to boot up the flask app on one tab
```flask run```
Then you can run the system test on another tab by
```python3 system_test.py```
