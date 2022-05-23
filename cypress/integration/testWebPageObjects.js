import { onDatePickerPage } from "../support/page_objects/datePickerPage"
import { onFormLayoutsPage } from "../support/page_objects/formLayoutsPage"
import { navigateTo } from "../support/page_objects/navigationPage"
import { onSmartTable } from "../support/page_objects/smartTablePage"



describe('test with Page Objects', () => {

    beforeEach('open application', () => {
        cy.openHomePage()
    })

    it('verify navigation to the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datePickerPage()
        navigateTo.toasterPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
    })


    it.only('should submit Inline and Basic form and select tomorrow date in the calendar', ()=>{
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInLineFormWithNameAndEmail('Hoang', 'test@gmail.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@gmail.com', '123456')
    
        navigateTo.datePickerPage()
        onDatePickerPage.selectCommonDatepickerDateFromToday(2)
        onDatePickerPage.selectDatepickerWithRangeFromToday(6, 14)

        navigateTo.smartTablePage()
        onSmartTable.addNewRecordWithFirstAndLastName('Hoang', 'Nguyen')
        onSmartTable.updateAgeByFirstName('Hoang', '26')
        onSmartTable.deleteRowByIndex(1)
    })
})