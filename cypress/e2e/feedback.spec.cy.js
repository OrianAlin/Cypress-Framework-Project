import FeedbackPage from "../page-objects/components/FeedbackPage"



describe('Feedback Test using fixtures', () =>{
    before(()=>{
        FeedbackPage.load()
    })

    it('should submit feedback form', () =>{
        FeedbackPage.submitFeedback()
    })
})