from selenium import webdriver
from flaskcalculator import app, db
import unittest, os, time
from selenium.webdriver.support.ui import Select

# get the path of ChromeDriverServer
basedir = os.path.abspath(os.path.dirname(__file__))

class SystemTest(unittest.TestCase):

    def setUp(self):
        # db.init_app(app)
        # db.create_all()

        # Windows chromedriver
        chromedriver = os.path.join(basedir, 'drivers','chromedriver_win32', 'chromedriver.exe')
        print(chromedriver)
        self.driver = webdriver.Chrome(executable_path=chromedriver)

        # Linux chromedriver
        # chromedriver = os.path.join(basedir, 'drivers','chromedriver_linux64', 'chromedriver.exe')

        # Mac chromedriver
        # chromedriver = os.path.join(basedir, 'drivers','chromedriver_mac64', 'chromedriver.exe')

        
        if not self.driver:
             self.skipTest('Web browser not available')
        else:
            self.driver.maximize_window()
            self.driver.get('http://localhost:5000/')

    def tearDown(self):
        if self.driver:
            self.driver.close()


    def test_dropdowns(self):
        
        # Select type of student
        types = Select(self.driver.find_element_by_id('types'))  # find the types menu 
        types_value = types.select_by_visible_text('Domestic')
        time.sleep(1)
        self.driver.implicitly_wait(5)

        # Select level of study
        levels = Select(self.driver.find_element_by_id('levels'))
        levels.select_by_visible_text('Undergraduate')
        time.sleep(1)
        self.driver.implicitly_wait(5)

        # Select starting year
        years = Select(self.driver.find_element_by_id('years'))
        years.select_by_visible_text('2022')
        time.sleep(1)
        self.driver.implicitly_wait(5)

        # Select course to complete - depending on the three above options
        course = Select(self.driver.find_element_by_id('courses'))
        time.sleep(1)
        self.driver.implicitly_wait(5)


        self.assertEqual(1,1)

if __name__=='__main__':
  unittest.main(verbosity=2)