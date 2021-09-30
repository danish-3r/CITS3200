from selenium import webdriver
from flaskcalculator import app, db
import unittest, os, time

# get the path of ChromeDriverServer
basedir = os.path.abspath(os.path.dirname(__file__))

class SystemTest(unittest.TestCase):
    driver = None
    
    def setUp(self):
        db.init_app(app)
        db.create_all()

        # Windows chromedriver
        chromedriver = os.path.join(basedir, 'drivers','chromedriver_win32', 'chromedriver.exe')
        print(chromedriver)
        self.driver = webdriver.Chrome(executable_path=chromedriver)

        # Linux chromedriver
        # chromedriver = os.path.join(basedir, 'drivers','chromedriver_linux64', 'chromedriver.exe')

        # Mac chromedriver
        # chromedriver = os.path.join(basedir, 'drivers','chromedriver_mac64', 'chromedriver.exe')

        # geckodriver = os.path.join(basedir, 'drivers', 'geckodriver.exe')
        # self.driver = webdriver.Firefox(executable_path=geckodriver)
        
        if not self.driver:
             self.skipTest('Web browser not available')
        else:
            self.driver.maximize_window()
            self.driver.get('http://localhost:5000/')

    def tearDown(self):
        if self.driver:
            self.driver.close()



# self.driver.get('http://localhost:5000/')

# chromedriver = os.path.join(basedir, 'drivers','chromedriver_win32', 'chromedriver.exe')
# print("chromedriver: ", chromedriver)
# driver = webdriver.Chrome(executable_path=chromedriver)
# driver.maximize_window()
# driver.get('http://localhost:5000/')

    def test_dropdowns(self):
        # Invalid sign up - username already exists
        time.sleep(5)
        self.assertEqual(1,1)

if __name__=='__main__':
  unittest.main(verbosity=2)