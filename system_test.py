from selenium import webdriver
from flaskcalculator import app, db
import unittest, os, time, logging
from selenium.webdriver.support.ui import Select



# get the path of ChromeDriverServer
basedir = os.path.abspath(os.path.dirname(__file__))

class SystemTest(unittest.TestCase):

    def setUp(self):
        # db.init_app(app)
        # db.create_all()

        logging.disable(logging.CRITICAL)
        unittest.TestLoader.sortTestMethodsUsing = None
        
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


    def test_dropdowns_bachelor(self):
        
        # Select type of student
        locations = Select(self.driver.find_element_by_id('locations'))  # find the locations menu 
        locations_value = locations.select_by_visible_text('Domestic')
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
        courses = Select(self.driver.find_element_by_id('courses'))
        courses.select_by_visible_text('Bachelor of Science')
        time.sleep(1)
        self.driver.implicitly_wait(5)

        # Scroll down
        self.driver.execute_script("window.scrollTo(0, 500)")
        time.sleep(3) 

        # Check the annual fee and typical fee range
        ANF = self.driver.find_element_by_id('ANF')
        TFR = self.driver.find_element_by_id('TFR')
        self.assertEqual(ANF.get_attribute('innerHTML'), '12600')
        self.assertEqual(TFR.get_attribute('innerHTML'), '37800')



    # def test_courseplanner(self):

    #     # Choose type of degree
    #     levels = Select(self.driver.find_elements_by_name('levels')[1])

    #     levels.select_by_visible_text('Undergraduate')
    #     time.sleep(2)
    #     self.driver.implicitly_wait(5)

    #     # Choose degree you want to study
    #     major = Select(self.driver.find_elements_by_id('major_select')[0])
    #     major.select_by_visible_text('Computer Science')
    #     time.sleep(2)
    #     self.driver.implicitly_wait(5)


if __name__=='__main__':
    unittest.main()


