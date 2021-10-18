from selenium import webdriver
from flaskcalculator import app, db
import unittest, os, time, logging
from selenium.webdriver.support.ui import Select
from selenium.common.exceptions import WebDriverException

# get the path of ChromeDriverServer
basedir = os.path.abspath(os.path.dirname(__file__))



class SystemTest(unittest.TestCase):
    
    def setUp(self):

        options = webdriver.ChromeOptions()
        options.add_experimental_option('excludeSwitches', ['enable-logging'])

        # Windows chromedriver
        chromedriver = os.path.join(basedir, 'drivers','chromedriver_win32', 'chromedriver.exe')
        self.driver = webdriver.Chrome(executable_path=chromedriver, options=options)

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


    # TEST FEE CALCULATOR
    def test1(self):
    
    # DOMESTIC UNDERGRADUATE CASE

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
        courses = Select(self.driver.find_element_by_id('courses'))
        
        # Select first course in the list
        courses.select_by_index(1)
        time.sleep(1)
        self.driver.implicitly_wait(5)

        # Check the annual fee and typical fee range
        ANF = self.driver.find_element_by_id('ANF')
        TFR = self.driver.find_element_by_id('TFR')
        self.assertTrue(ANF.get_attribute('innerHTML'))
        self.assertTrue(TFR.get_attribute('innerHTML'))
        
        time.sleep(1)
        self.driver.implicitly_wait(5)

    # DOMESTIC POSTGRADUATE CASE

        # Refresh web page
        self.driver.refresh()

        # Select type of student
        types = Select(self.driver.find_element_by_id('types'))  # find the types menu 
        types_value = types.select_by_visible_text('Domestic')
        time.sleep(1)
        self.driver.implicitly_wait(5)

        # Select level of study
        levels = Select(self.driver.find_element_by_id('levels'))
        levels.select_by_visible_text('Postgraduate')
        time.sleep(1)
        self.driver.implicitly_wait(5)

        # Select starting year
        years = Select(self.driver.find_element_by_id('years'))
        years.select_by_visible_text('2022')
        time.sleep(1)
        self.driver.implicitly_wait(5)

        # Select course to complete - depending on the three above options
        courses = Select(self.driver.find_element_by_id('courses'))
        courses.select_by_index(1)
        time.sleep(1)
        self.driver.implicitly_wait(5)

        # Check the annual fee and typical fee range
        ANF = self.driver.find_element_by_id('ANF')
        TFR = self.driver.find_element_by_id('TFR')
        self.assertTrue(ANF.get_attribute('innerHTML'))
        self.assertTrue(TFR.get_attribute('innerHTML'))

        time.sleep(1)
        self.driver.implicitly_wait(5)

    # INTERNATIONAL UNDERGRADUATE CASE
        
        # Refresh web page
        self.driver.refresh()

        # Select type of student
        types = Select(self.driver.find_element_by_id('types'))  # find the types menu 
        types_value = types.select_by_visible_text('International')
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
        courses.select_by_index(1)
        time.sleep(1)
        self.driver.implicitly_wait(5)

        # Check the annual fee and typical fee range
        ANF = self.driver.find_element_by_id('ANF')
        TFR = self.driver.find_element_by_id('TFR')
        self.assertTrue(ANF.get_attribute('innerHTML'))
        self.assertTrue(TFR.get_attribute('innerHTML'))
        
        time.sleep(1)
        self.driver.implicitly_wait(5)

    # INTERNATIONAL POSTGRADUATE CASE
        
        # Refresh web page
        self.driver.refresh()

        # Select type of student
        types = Select(self.driver.find_element_by_id('types'))  # find the types menu 
        types_value = types.select_by_visible_text('International')
        time.sleep(1)
        self.driver.implicitly_wait(5)

        # Select level of study
        levels = Select(self.driver.find_element_by_id('levels'))
        levels.select_by_visible_text('Postgraduate')
        time.sleep(1)
        self.driver.implicitly_wait(5)

        # Select starting year
        years = Select(self.driver.find_element_by_id('years'))
        years.select_by_visible_text('2022')
        time.sleep(1)
        self.driver.implicitly_wait(5)

        # Select course to complete - depending on the three above options
        courses = Select(self.driver.find_element_by_id('courses'))
        courses.select_by_index(1)
        time.sleep(1)
        self.driver.implicitly_wait(5)

        # Check the annual fee and typical fee range
        ANF = self.driver.find_element_by_id('ANF')
        TFR = self.driver.find_element_by_id('TFR')
        self.assertTrue(ANF.get_attribute('innerHTML'))
        self.assertTrue(TFR.get_attribute('innerHTML'))
        
        time.sleep(1)
        self.driver.implicitly_wait(5)
    

    # TEST COURSE PLANNER - ONE MAJOR
    def test2(self):

        DEFAULT_CREDIT = 6
        DEFAULT_EFTSL = 0.125
        DEFAULT_FEE = 1000
        DEFAULT_COMP_COURSES = 15


        # CHOOSE COURSE OPTION
        course_planner = self.driver.find_element_by_id('course-planner')
        self.driver.execute_script("arguments[0].scrollIntoView();", course_planner)
        time.sleep(2)
        self.driver.implicitly_wait(5)
        
        # Choose type of degree
        levels = Select(self.driver.find_elements_by_name('levels')[1])
        levels.select_by_visible_text('Undergraduate')
        time.sleep(2)
        self.driver.implicitly_wait(5)

        # Choose degree you want to study
        major = Select(self.driver.find_elements_by_id('major_select')[0])
        major.select_by_visible_text('Computer Science')
        time.sleep(2)
        self.driver.implicitly_wait(5)

        total_credit = self.driver.find_element_by_id('total_credits')
        total_eftsl = self.driver.find_element_by_id('total_eftsl')
        total_fee = self.driver.find_element_by_id('total_price')

        self.driver.execute_script("arguments[0].scrollIntoView();", total_fee)
        time.sleep(2)
        self.driver.implicitly_wait(5)

        # Check the default result
        self.assertEqual(total_credit.text, str(DEFAULT_CREDIT * DEFAULT_COMP_COURSES))
        self.assertEqual(total_eftsl.text, str(DEFAULT_EFTSL * DEFAULT_COMP_COURSES))
        self.assertEqual(total_fee.text, '$' + str(DEFAULT_FEE * DEFAULT_COMP_COURSES))


        # time.sleep(2)
        # self.driver.implicitly_wait(5)

        # ADD NEW UNIT IN 23RD POSITION
        unit23 = (self.driver.find_element_by_id('+unit23'))
        self.driver.execute_script("arguments[0].scrollIntoView();", unit23)
        time.sleep(2)
        self.driver.implicitly_wait(5)

        # Click the select bar
        self.driver.execute_script("arguments[0].click();", unit23)
        time.sleep(1)
        self.driver.implicitly_wait(5)

        # Choose unit
        unit_select = Select(self.driver.find_element_by_id('unit_select23'))
        unit_select.select_by_index(1)
        time.sleep(1)
        self.driver.implicitly_wait(5)

        # ADD NEW UNIT IN 24RD POSITION
        unit24 = (self.driver.find_element_by_id('+unit24'))

        # Click the select bar
        self.driver.execute_script("arguments[0].click();", unit24)
        time.sleep(1)
        self.driver.implicitly_wait(5)

        # Choose unit
        unit_select = Select(self.driver.find_element_by_id('unit_select24'))
        unit_select.select_by_index(1)
        time.sleep(1)
        self.driver.implicitly_wait(5)


        # Check if two units are different
        self.assertNotEqual(unit23, unit24)

        total_credit = self.driver.find_element_by_id('total_credits')
        total_eftsl = self.driver.find_element_by_id('total_eftsl')
        total_fee = self.driver.find_element_by_id('total_price')
        
        num_of_courses = DEFAULT_COMP_COURSES + 2

        self.driver.execute_script("arguments[0].scrollIntoView();", total_fee)
        time.sleep(2)
        self.driver.implicitly_wait(5)

        # Check the update result
        self.assertEqual(total_credit.text, str(DEFAULT_CREDIT * num_of_courses))
        self.assertEqual(total_eftsl.text, str(DEFAULT_EFTSL * num_of_courses))
        self.assertEqual(total_fee.text, '$' + str(DEFAULT_FEE * num_of_courses))


    # TEST COURSE PLANNER - TWO MAJOR
    def test3(self):
        UNDERGRADUATE_YEAR = 3
        POSTGRADUATE_YEAR = 2

        # CHOOSE COURSE OPTION
        course_planner = self.driver.find_element_by_id('course-planner')
        self.driver.execute_script("arguments[0].scrollIntoView();", course_planner)
        time.sleep(2)
        self.driver.implicitly_wait(5)
        
        # Choose type of degree
        levels = Select(self.driver.find_elements_by_name('levels')[1])
        levels.select_by_visible_text('Undergraduate')
        time.sleep(2)
        self.driver.implicitly_wait(5)

        # Choose degree you want to study
        major = Select(self.driver.find_elements_by_id('major_select')[0])
        major.select_by_visible_text('Computer Science')
        time.sleep(2)
        self.driver.implicitly_wait(5)


        # Check there exists 3 year
        year_3 = None
        try:
            year_3 = self.driver.find_element_by_id('year-3')
            self.driver.execute_script("arguments[0].scrollIntoView();", year_3)
            time.sleep(2)
            self.driver.implicitly_wait(5)
            
        except:
            print ("No year 3")

        self.assertIsNotNone(year_3)

        # CHOOSE COURSE OPTION
        course_planner = self.driver.find_element_by_id('course-planner')
        self.driver.execute_script("arguments[0].scrollIntoView();", course_planner)
        time.sleep(2)
        self.driver.implicitly_wait(5)
        
        # Choose type of degree
        levels = Select(self.driver.find_elements_by_name('levels')[1])
        levels.select_by_visible_text('Postgraduate')
        time.sleep(2)
        self.driver.implicitly_wait(5)

        # Choose degree you want to study
        major = Select(self.driver.find_elements_by_id('major_select')[0])
        major.select_by_visible_text('Master of Education - Thesis & Coursework')
        time.sleep(2)
        self.driver.implicitly_wait(5)


        # Check there exists 2 year
        year_2=None
        try:
            year_2 = self.driver.find_element_by_id('year-2')
            self.driver.execute_script("arguments[0].scrollIntoView();", year_2)
            time.sleep(2)
            self.driver.implicitly_wait(5)
            self.assertIsNotNone(year_2)
        except:
            print ("No year 2")

        self.assertIsNotNone(year_2)


    # TEST FAQ
    def test4(self):

        # Click on FAQ page

        faq = self.driver.find_element_by_xpath("//div[@class='faq-link']/button")
        self.driver.execute_script("arguments[0].scrollIntoView();", faq)
        time.sleep(2)
        self.driver.implicitly_wait(5)

        self.driver.execute_script("arguments[0].click();", faq)

        time.sleep(2)
        self.driver.implicitly_wait(5)

        # Check if sucessfully access to FAQ page
        header = self.driver.find_element_by_xpath("//div[@class='headings']/h1")
        self.assertEqual(header.get_attribute('innerHTML'), 'Frequently asked questions')

        faq_question_btn = self.driver.find_elements_by_tag_name('button')[0]
        
        # Try to click a FAQ question
        try:
            faq_question_btn.click()
            time.sleep(2)
            self.driver.implicitly_wait(5)
        except WebDriverException:
            print ("FAQ question is not clickable")

        # Try clicking again
        try:
            faq_question_btn.click()
            time.sleep(2)
            self.driver.implicitly_wait(5)
        except WebDriverException:
            print ("FAQ question is not clickable")

        # Return to home page
        self.driver.execute_script("arguments[0].scrollIntoView();", faq_question_btn)
        time.sleep(2)
        self.driver.implicitly_wait(5)

        return_btn = self.driver.find_elements_by_xpath("//a//button")[0]
        return_btn.click()
        time.sleep(1)
        self.driver.implicitly_wait(5)

        # Check if return to home page
        header = self.driver.find_element_by_xpath("//div[@class='headings']/h1")

        time.sleep(1)
        self.driver.implicitly_wait(5)

        self.assertEqual(header.get_attribute('innerHTML'), 'Fee Calculator')

        
if __name__=='__main__':
    unittest.main()


